import { pageData, presentations } from './data/index.js';
import * as Renderers from './renderers.js';
import { initPresentationMode, closePresentation, updatePresentationData, isPresentationActive } from './presentation.js';

document.addEventListener('DOMContentLoaded', function () {
    // Set app mode and determine if superadmin
    window.appMode = localStorage.getItem('appMode') || 'normal'; // normal, readonly, superadmin
    window.isSuperAdmin = window.appMode === 'superadmin';

    // Make data globally accessible for now, for simplicity in renderers.
    // A more advanced approach would be to pass data down as arguments.
    window.pageData = pageData;
    window.presentations = presentations;

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.main-content-section');

    const mainContainer = document.getElementById('main-container');
    const superadminBanner = document.getElementById('superadmin-banner');
    const closeSuperadminBannerBtn = document.getElementById('close-superadmin-banner');
    const sidebar = document.querySelector('aside');

    function setAppMode(mode) {
        window.appMode = mode;
        localStorage.setItem('appMode', mode);
        window.isSuperAdmin = mode === 'superadmin';
        document.body.dataset.appMode = mode; // For CSS styling if needed

        sidebar.dataset.appMode = mode;

        // Superadmin banner logic
        if (window.isSuperAdmin && sessionStorage.getItem('superadminBannerClosed') !== 'true') {
            superadminBanner.classList.remove('hidden');
            document.body.style.paddingTop = `${superadminBanner.offsetHeight}px`;
        } else {
            superadminBanner.classList.add('hidden');
            document.body.style.paddingTop = '0px';
        }

        // Sidebar behavior based on mode
        if (window.isSuperAdmin) {
            // When switching to superadmin, restore the last saved state
            setSidebarState(localStorage.getItem('sidebarCollapsed') === 'true');
        } else {
            // When switching to normal or readonly, always collapse the sidebar
            setSidebarState(true);
        }
        renderAllPages();
    }

    function renderAllPages() {
        // Render main pages
        for (const pageId in window.pageData) {
            const container = document.getElementById(pageId);
            const data = window.pageData[pageId];
            if (container && data) {
                // Construct renderer function name from layout, e.g., 'dashboard' -> 'renderDashboard'
                const rendererName = `render${data.layout.charAt(0).toUpperCase() + data.layout.slice(1)}`;
                if (Renderers[rendererName]) {
                    Renderers[rendererName](container, data, { mode: window.appMode });
                } else {
                    Renderers.renderPlaceholder(container, data, { mode: window.appMode });
                }
            } else if (container) {
                Renderers.renderPlaceholder(container, { id: container.id, title: container.id.replace(/-/g, ' '), subtitle: 'Hier erscheinen bald neue Inhalte.' }, { mode: window.appMode });
            }
        }

        // Render nested template pages
        const presentationsData = window.pageData.presentations?.content?.presentations;
        if (presentationsData) {
            presentationsData.forEach(pres => {
                if (pres.templateData) {
                    for (const templateId in pres.templateData) {
                        const container = document.getElementById(templateId);
                        const data = pres.templateData[templateId];
                        if (container && data) {
                            const rendererName = `render${data.layout.charAt(0).toUpperCase() + data.layout.slice(1)}`;
                            if (Renderers[rendererName]) {
                                Renderers[rendererName](container, data, { mode: window.appMode });
                            }
                        }
                    }
                }
            });
        }

        console.log('lucide.createIcons() called in app.js');
        lucide.createIcons();
    }

    // Replace missing `vial` icon with a valid fallback
    document.querySelectorAll('i[data-lucide="vial"]').forEach(icon => {
        console.warn('Replacing missing `vial` icon with `circle`');
        icon.setAttribute('data-lucide', 'circle'); // Replace with a valid icon name, e.g., `circle`
    });

    // --- NAVIGATION ---
    function showSection(hash) {
        const targetHash = hash || '#mehrwerte-enabler';
        sections.forEach(s => s.classList.toggle('active', '#' + s.id === targetHash)); 
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === targetHash));                
    }

    document.body.addEventListener('click', function(e) {
        const navLink = e.target.closest('.nav-link');
        if (navLink) {
            e.preventDefault();
            // Close any open presentation, unless we are already in presentation mode
            // This prevents closing the presentation when clicking on a link inside a slide (e.g. in accordionChecklist)
            if (isPresentationActive()) return;
            closePresentation();
            const targetId = navLink.getAttribute('href'); 
            if (document.querySelector(targetId)) { 
                history.pushState(null, null, targetId); 
                showSection(targetId); 
            }
        }
    });

    // Navigate to default view when a presentation is closed
    document.addEventListener('presentationExited', () => {
        history.pushState(null, null, '#projekt-timeline');
        showSection('#projekt-timeline');
    });

    window.addEventListener('popstate', () => { showSection(location.hash); });
    
    // --- SIDEBAR ACCORDIONS ---
    document.querySelectorAll('.sidebar-accordion-button').forEach(button => {
        button.setAttribute('aria-expanded', 'true');
        button.addEventListener('click', () => {
            if (!document.querySelector('aside.is-collapsed')) {
                const content = button.nextElementSibling;
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
                content.classList.toggle('hidden');
            }
        });
    });

    // --- COLLAPSIBLE SIDEBAR ---
    const sidebarToggle = document.getElementById('sidebar-toggle');
    function setSidebarState(collapsed) {
        console.log('Setting sidebar state:', collapsed); // Log sidebar state changes
        sidebar.classList.toggle('is-collapsed', collapsed);

        if (sidebarToggle) {
            sidebarToggle.innerHTML = collapsed ? '<i data-lucide="chevrons-right" class="h-5 w-5 text-slate-500"></i>' : '<i data-lucide="chevrons-left" class="h-5 w-5 text-slate-500"></i>';
            lucide.createIcons();
        }
    }
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => { 
            const isCollapsed = sidebar.classList.contains('is-collapsed'); 
            setSidebarState(!isCollapsed); localStorage.setItem('sidebarCollapsed', !isCollapsed); 
        });
    }

    // --- SETTINGS & JSON ---
    const settingsButton = document.getElementById('settings-button'), settingsMenu = document.getElementById('settings-menu'), exportButton = document.getElementById('export-json'), importButton = document.getElementById('import-json'), fileInput = document.getElementById('json-file-input'), modeSwitcher = document.getElementById('mode-switcher');
    settingsButton.addEventListener('click', (e) => { e.stopPropagation(); settingsMenu.classList.toggle('hidden'); });
    document.addEventListener('click', () => settingsMenu.classList.add('hidden'));
    settingsMenu.addEventListener('click', e => e.stopPropagation());

    closeSuperadminBannerBtn.addEventListener('click', () => {
        superadminBanner.classList.add('hidden');
        document.body.style.paddingTop = '0px';
        sessionStorage.setItem('superadminBannerClosed', 'true');
    });

    // Mode Switcher Logic
    const currentModeRadio = modeSwitcher.querySelector(`input[value="${window.appMode}"]`);
    if (currentModeRadio) currentModeRadio.checked = true;
    modeSwitcher.addEventListener('change', (e) => {
        if (e.target.name === 'app-mode') {
            setAppMode(e.target.value);
            settingsMenu.classList.add('hidden');
        }
    });

    exportButton.addEventListener('click', () => { 
        const exportData = {
            pageData: window.pageData,
            presentations: window.presentations,
            appMode: window.appMode // Save current mode
        };
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(JSON.stringify(exportData, null, 2));
        const linkElement = document.createElement('a'); 
        linkElement.setAttribute('href', dataUri); 
        linkElement.setAttribute('download', 'rollout-cockpit-data.json');
        linkElement.click(); 
        settingsMenu.classList.add('hidden'); 
    });
    importButton.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => { 
            try { 
                const importedData = JSON.parse(e.target.result);
                if (typeof importedData === 'object' && importedData.pageData && importedData.presentations) {
                    window.pageData = importedData.pageData;
                    window.presentations = importedData.presentations;
                    const newMode = importedData.appMode || 'normal';

                    // Update presentation module with new data
                    updatePresentationData(window.pageData, window.presentations);

                    setAppMode(newMode); // This will also re-render everything
                    const newModeRadio = modeSwitcher.querySelector(`input[value="${newMode}"]`);
                    if (newModeRadio) newModeRadio.checked = true;
                    showSection(location.hash || '#mehrwerte-enabler'); 
                    alert('Daten erfolgreich importiert!'); 
                } else { 
                    alert('Fehler: Ungültiges JSON-Format. Die Datei muss "pageData" und "presentations" enthalten.');
                } 
            } catch (error) { 
                alert('Fehler beim Lesen der Datei: ' + error.message); 
            } 
        };
        reader.readAsText(file); fileInput.value = ''; settingsMenu.classList.add('hidden');
    });

    // Listen for data changes to re-render components
    document.addEventListener('dataChanged', (e) => {
        const { pageId } = e.detail;
        if (pageId) {
            const container = document.getElementById(pageId);
            const data = window.pageData[pageId];
            if (container && data) {
                const rendererName = `render${data.layout.charAt(0).toUpperCase() + data.layout.slice(1)}`;
                if (Renderers[rendererName]) {
                    Renderers[rendererName]; // Call the renderer function with arguments
                }
            }
        }
    });
    
    // --- VIDEO MODAL LOGIC ---
    const videoModal = document.getElementById('video-modal');
    const videoModalContent = document.getElementById('video-modal-content');
    const videoModalClose = document.getElementById('video-modal-close');
    const videoPlayer = document.getElementById('video-modal-player');
    const videoModalTitle = document.getElementById('video-modal-title');
    const videoModalInfo = document.getElementById('video-modal-info');

    function openVideoModal(videoSrc, title, info) {
        // Use innerHTML for the title to render potential <strong> tags etc.
        if (videoModalTitle) videoModalTitle.innerHTML = title || ''; // The title now contains the bubble
        if (videoModalInfo) videoModalInfo.textContent = info || '';

        videoPlayer.src = videoSrc;
        videoModal.classList.remove('hidden');
        setTimeout(() => { // For transition
            videoModal.style.opacity = '1';
            videoModalContent.classList.add('scale-100');
        }, 10);
        videoPlayer.play();
    }

    function closeVideoModal() {
        videoPlayer.pause();
        videoModal.style.opacity = '0';
        videoModalContent.classList.remove('scale-100');
        setTimeout(() => {
            videoModal.classList.add('hidden');
            videoPlayer.src = ""; // Clear src
        }, 300);
    }

    document.body.addEventListener('click', (e) => {
        const actionTarget = e.target.closest('[data-action="open-video-modal"], [data-click-action]');
        if (actionTarget?.dataset.action === 'open-video-modal') {
            const videoSrc = actionTarget.dataset.videoSrc;
            const title = actionTarget.dataset.fullTitle || actionTarget.dataset.title; // Support both attributes
            const info = actionTarget.dataset.info;
            openVideoModal(videoSrc, title, info);
        }
        // This listener is now separate to avoid conflicts
        if (actionTarget?.dataset.clickAction === 'open-org-chart') openContentModal('org-chart');
    });
    videoModalClose.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === "Escape" && !videoModal.classList.contains('hidden')) closeVideoModal(); });

    // --- GENERIC CONTENT MODAL LOGIC ---
    const contentModal = document.createElement('div');
    contentModal.id = 'generic-content-modal';
    contentModal.className = 'hidden fixed inset-0 bg-black bg-opacity-60 z-[102] flex items-center justify-center p-4 transition-opacity duration-300';
    contentModal.innerHTML = `
        <div class="bg-slate-50 rounded-xl shadow-xl w-full max-w-7xl h-[90vh] flex flex-col transform scale-95 transition-transform duration-300">
            <div class="flex-shrink-0 p-4 border-b border-slate-200 flex justify-between items-center">
                <h3 id="generic-modal-title" class="text-lg font-semibold text-slate-800"></h3>
                <button id="generic-modal-close" class="p-1.5 rounded-full hover:bg-slate-100" title="Schließen">
                    <i data-lucide="x" class="h-6 w-6 text-slate-600"></i>
                </button>
            </div>
            <div id="generic-modal-content" class="flex-1 overflow-y-auto p-8"></div>
        </div>
    `;
    document.body.appendChild(contentModal);

    const genericModalContent = contentModal.querySelector('#generic-modal-content');
    const genericModalTitle = contentModal.querySelector('#generic-modal-title');

    function openContentModal(pageId) {
        const data = window.pageData[pageId];
        if (!data) return;
        genericModalTitle.textContent = data.title;
        const rendererName = `render${data.layout.charAt(0).toUpperCase() + data.layout.slice(1)}`;
        if (Renderers[rendererName]) {
            Renderers[rendererName](genericModalContent, data, { mode: window.appMode });
        }
        contentModal.classList.remove('hidden');
        setTimeout(() => contentModal.querySelector('.transform').classList.add('scale-100'), 10);
    }

    contentModal.addEventListener('click', (e) => { if (e.target.id === 'generic-content-modal' || e.target.closest('#generic-modal-close')) { contentModal.classList.add('hidden'); contentModal.querySelector('.transform').classList.remove('scale-100'); genericModalContent.innerHTML = ''; } });
    document.addEventListener('keydown', (e) => { if (e.key === "Escape" && !videoModal.classList.contains('hidden')) closeVideoModal(); });

    // --- TIMELINE IFRAME MODAL LOGIC ---
    const timelineIframeModal = document.getElementById('timeline-iframe-modal');
    if (timelineIframeModal) {
        const modalTitle = timelineIframeModal.querySelector('#timeline-iframe-modal-title');
        const modalIframe = timelineIframeModal.querySelector('#timeline-iframe-modal-content');
        const closeModalBtn = timelineIframeModal.querySelector('#timeline-iframe-modal-close');

        const openTimelineModal = (button) => {
            modalTitle.textContent = button.dataset.title;
            modalIframe.src = button.dataset.src;
            timelineIframeModal.classList.remove('hidden');
            lucide.createIcons(); // Render icons inside the now-visible modal
        };

        const closeTimelineModal = () => {
            timelineIframeModal.classList.add('hidden');
            modalIframe.src = 'about:blank'; // Clear iframe content
        };

        // Use a more specific data-action to avoid conflicts
        document.body.addEventListener('click', (e) => {
            const button = e.target.closest('button[data-action="open-iframe-modal"]');
            if (button) {
                openTimelineModal(button);
            }
        });

        closeModalBtn.addEventListener('click', closeTimelineModal);
        timelineIframeModal.addEventListener('click', (e) => { if (e.target === timelineIframeModal) closeTimelineModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !timelineIframeModal.classList.contains('hidden')) closeTimelineModal(); });
    }
    
    // Add a listener to the window to catch messages from iframes
    window.addEventListener('message', (event) => {
        // Optional: Add a security check for the origin
        // if (event.origin !== 'http://your-expected-origin.com') return;

        if (event.data && event.data.action === 'open-iframe-modal') {
            const { src, title } = event.data;
            const pseudoButton = { dataset: { src, title } };
            
            const timelineIframeModal = document.getElementById('timeline-iframe-modal');
            if (timelineIframeModal) timelineIframeModal.querySelector('#timeline-iframe-modal-title').textContent = title;
        }
    });

    // --- INITIAL RENDER ---
    const initialHash = window.location.hash || '#mehrwerte-enabler';
    document.body.dataset.appMode = window.appMode;
    renderAllPages();
    // Set initial sidebar state based on mode and localStorage
    const initialSidebarCollapsed = window.isSuperAdmin ? (localStorage.getItem('sidebarCollapsed') === 'true') : true;
    setSidebarState(initialSidebarCollapsed);
    showSection(initialHash);
    initPresentationMode(window.pageData, window.presentations);

    // Signal, dass die App bereit ist, damit andere Skripts (z.B. der Auto-Start) sicher ausgeführt werden können.
    document.dispatchEvent(new Event('appReady'));
});