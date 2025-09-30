import * as Renderers from './renderers.js';

let pageData = null;
let presentations = null;
let currentPresentation = null;
let currentSlideIndex = 0;

// DOM Elements
const presentationModeEl = document.getElementById('presentation-mode');
const presentationContentEl = document.getElementById('presentation-content');
const presentationProgressEl = document.getElementById('presentation-progress');
const prevBtn = document.getElementById('presentation-prev');
const nextBtn = document.getElementById('presentation-next');
const firstBtn = document.getElementById('presentation-first');
const lastBtn = document.getElementById('presentation-last');
const exitBtn = document.getElementById('presentation-exit');
const fullscreenBtn = document.getElementById('presentation-fullscreen');
const editBtn = document.getElementById('presentation-edit');
const editPanel = document.getElementById('presentation-edit-panel');
const editPanelContent = document.getElementById('edit-panel-content');
const editPanelFooter = document.getElementById('edit-panel-footer');
const editPanelCloseBtn = document.getElementById('edit-panel-close');

function handlePresentationKeys(e) {
    if (!currentPresentation) return;

    if (e.key === 'ArrowRight' && currentSlideIndex < currentPresentation.slides.length - 1 && editPanel.classList.contains('hidden')) {
        showSlide(currentSlideIndex + 1);
    } else if (e.key === 'ArrowLeft' && currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            const fullscreenIcon = document.querySelector('#presentation-fullscreen i');
            fullscreenIcon.setAttribute('data-lucide', 'maximize');
            lucide.createIcons();
        }
        exitPresentation();
    } else if (e.key.toLowerCase() === 'e' && window.isSuperAdmin) {
        toggleEditPanel();
    }
}

function toggleFullScreen() {
    const fullscreenIcon = document.querySelector('#presentation-fullscreen i');
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        fullscreenIcon.setAttribute('data-lucide', 'minimize');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        fullscreenIcon.setAttribute('data-lucide', 'maximize');
    }
    lucide.createIcons();
}

function showSlide(index) {
    if (!currentPresentation || index < 0 || index >= currentPresentation.slides.length) return;

    currentSlideIndex = index;
    const slideId = currentPresentation.slides[index];
    
    // --- Template Slide Logic ---
    // Find the presentation configuration in pageData.presentations.content
    const presentationConfig = pageData.presentations.content.presentations.find(p => p.presentationId === currentPresentation.id);
    let slideData;

    // Check if the slideId exists in the presentation's specific templateData
    if (presentationConfig && presentationConfig.templateData && presentationConfig.templateData[slideId]) {
        slideData = presentationConfig.templateData[slideId];
    } else {
        slideData = pageData[slideId];
    }

    const renderOptions = {
        presentationMode: true,
        mode: window.appMode || 'readonly' // Use global appMode, default to readonly
    };

    const skipDefaultHeader = slideData?.content?.skipPresentationHeader || false;

    // --- Agenda Tracker Logic ---
    let activeAgendaIndex = -1;
    if (slideId.includes('agenda')) {
        const agendaData = presentationConfig.templateData[slideId];
        if (agendaData && agendaData.layout === 'agenda') {
            // Find all transition items across ALL days
            const transitionItems = agendaData.content.days.flatMap(day => day.items)
                .map((item, idx) => ({ ...item, originalIndex: idx }))
                .filter(item => item.isTransition);
    
            // Find the current chapter based on the slide index
            // We need to find which "occurrence" of the agenda slide this is.
            const agendaOccurrences = currentPresentation.slides.slice(0, index + 1).filter(s => s === slideId).length;
            
            let currentChapterItem = null;
            if (transitionItems.length >= agendaOccurrences) {
                // The active chapter is the Nth transition item.
                // We sort them by startSlideIndex to be sure.
                currentChapterItem = transitionItems.sort((a, b) => a.startSlideIndex - b.startSlideIndex)[agendaOccurrences - 1];
            }
            if (currentChapterItem) {
                activeAgendaIndex = currentChapterItem.originalIndex + 1;
            }
        }
    }
    if (activeAgendaIndex > -1) {
        renderOptions.activeAgendaIndex = activeAgendaIndex;
    }

    if (slideData) {
        const presentationTitle = slideData.actionTitle || slideData.title || '';
        const headerHtml = `
            <header class="mb-12">
                <h1 class="text-4xl font-bold text-slate-800">${presentationTitle}</h1>
                ${slideData.subtitle ? `<p class="text-xl text-slate-500 mt-2">${slideData.subtitle}</p>` : ''}
            </header>`;

        const slideContainer = document.createElement('div');
        const rendererName = `render${slideData.layout.charAt(0).toUpperCase() + slideData.layout.slice(1)}`;

       
        if (Renderers[rendererName]) {
            Renderers[rendererName](slideContainer, slideData, renderOptions);
        } else {
            Renderers.renderPlaceholder(slideContainer, slideData, renderOptions);
        }

        if (skipDefaultHeader) {
            presentationContentEl.innerHTML = slideContainer.innerHTML;
        } else {
            presentationContentEl.innerHTML = headerHtml + slideContainer.innerHTML;
        }

        lucide.createIcons();
    } else {
        presentationContentEl.innerHTML = `<p>Folie "${slideId}" nicht gefunden.</p>`;
    }

    presentationProgressEl.textContent = `Folie ${index + 1} von ${currentPresentation.slides.length}`;
    prevBtn.disabled = index === 0;
    firstBtn.disabled = index === 0;
    nextBtn.disabled = index === currentPresentation.slides.length - 1;
    lastBtn.disabled = index === currentPresentation.slides.length - 1;
}

function renderEditPanel() {
    if (!currentPresentation || !window.isSuperAdmin) return;

    const presentationConfig = pageData.presentations.content.presentations.find(p => p.presentationId === currentPresentation.id);

    // --- Render Slide List ---
    editPanelContent.innerHTML = currentPresentation.slides.map((slideId, index) => {
        let slideData;
        // First, check for slide data in the presentation's specific templateData
        if (presentationConfig && presentationConfig.templateData && presentationConfig.templateData[slideId]) {
            slideData = presentationConfig.templateData[slideId];
        } else {
            // If not found, fall back to the global pageData
            slideData = pageData[slideId];
        }
        if (!slideData) slideData = { title: 'Unbekannte Folie' };

        return `
            <div class="edit-slide-item flex items-center p-2 rounded-md hover:bg-slate-100" draggable="true" data-index="${index}">
                <i data-lucide="grip-vertical" class="h-5 w-5 text-slate-400 mr-2 cursor-grab"></i>
                <span class="flex-grow text-sm text-slate-700 truncate">${index + 1}. ${slideData.title}</span>
                <button class="delete-slide-btn p-1 rounded-md hover:bg-red-100 text-slate-500 hover:text-red-600" data-index="${index}" title="Folie löschen">
                    <i data-lucide="trash-2" class="h-4 w-4"></i>
                </button>
            </div>
        `;
    }).join('');

    // --- Render "Add Slide" Dropdown ---
    const availableSlides = Object.keys(pageData).filter(id => !currentPresentation.slides.includes(id));
    const optionsHtml = availableSlides.map(id => `<option value="${id}">${pageData[id].title}</option>`).join('');
    editPanelFooter.innerHTML = `
        <div class="flex items-center gap-2">
            <select id="add-slide-select" class="w-full text-sm border-slate-300 rounded-md focus:ring-shyftplan-purple focus:border-shyftplan-purple">
                <option value="">Folie hinzufügen...</option>
                ${optionsHtml}
            </select>
            <button id="add-slide-btn" class="p-2 bg-shyftplan-purple text-white rounded-md hover:bg-violet-700" title="Hinzufügen">
                <i data-lucide="plus" class="h-5 w-5"></i>
            </button>
        </div>
    `;

    lucide.createIcons();
    addEditPanelEventListeners();
}

function addEditPanelEventListeners() {
    // --- Delete Slide ---
    editPanelContent.querySelectorAll('.delete-slide-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index, 10);
            if (currentPresentation.slides.length <= 1) {
                alert("Die letzte Folie kann nicht gelöscht werden.");
                return;
            }
            currentPresentation.slides.splice(index, 1);
            if (currentSlideIndex >= index) {
                currentSlideIndex = Math.max(0, currentSlideIndex - 1);
            }
            showSlide(currentSlideIndex);
            renderEditPanel();
        });
    });

    // --- Add Slide ---
    document.getElementById('add-slide-btn')?.addEventListener('click', () => {
        const select = document.getElementById('add-slide-select');
        if (select.value) {
            currentPresentation.slides.push(select.value);
            renderEditPanel();
            showSlide(currentSlideIndex); // Update progress bar
        }
    });

    // --- Drag and Drop ---
    let dragStartIndex;
    editPanelContent.querySelectorAll('.edit-slide-item').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            dragStartIndex = parseInt(item.dataset.index, 10);
            e.dataTransfer.effectAllowed = 'move';
            setTimeout(() => item.classList.add('opacity-50'), 0);
        });
        item.addEventListener('dragend', () => item.classList.remove('opacity-50'));
        item.addEventListener('dragover', (e) => e.preventDefault());
        item.addEventListener('drop', (e) => {
            e.preventDefault();
            const dropIndex = parseInt(item.dataset.index, 10);
            const draggedItem = currentPresentation.slides.splice(dragStartIndex, 1)[0];
            currentPresentation.slides.splice(dropIndex, 0, draggedItem);
            
            // Update current slide index to follow the moved slide
            if (currentSlideIndex === dragStartIndex) {
                currentSlideIndex = dropIndex;
            } else if (dragStartIndex < currentSlideIndex && dropIndex >= currentSlideIndex) {
                currentSlideIndex--;
            } else if (dragStartIndex > currentSlideIndex && dropIndex <= currentSlideIndex) {
                currentSlideIndex++;
            }

            renderEditPanel();
            showSlide(currentSlideIndex);
        });
    });
}

function toggleEditPanel() {
    const isHidden = editPanel.classList.toggle('hidden');
    if (!isHidden) {
        renderEditPanel();
    }
}

export function startPresentation(presentationId) {
    const originalPresentationData = presentations[presentationId];
    if (!originalPresentationData) {
        console.error(`Presentation with ID "${presentationId}" not found.`);
        return;
    }

    // --- DYNAMIC SLIDE LIST GENERATION ---
    const presentationConfig = pageData.presentations.content.presentations.find(p => p.presentationId === presentationId);
    const originalContentSlides = [...originalPresentationData.slides];
    let finalSlides = []; // This will be our final, dynamically generated list of slides

    if (presentationConfig && presentationConfig.templateData) {
        const agendaSlideId = Object.keys(presentationConfig.templateData).find(id => id.includes('agenda'));
        const agendaData = agendaSlideId ? presentationConfig.templateData[agendaSlideId] : null;

        if (agendaData && agendaData.content?.days) {
            const sortedTransitions = agendaData.content.days
                .flatMap(day => day.items)
                .filter(item => item.isTransition)
                .sort((a, b) => a.startSlideIndex - b.startSlideIndex);

            let lastIndex = 0;
            sortedTransitions.forEach(transition => {
                // Add content slides from the last transition up to the current one
                finalSlides.push(...originalContentSlides.slice(lastIndex, transition.startSlideIndex));
                // Add the agenda slide for the current transition
                finalSlides.push(agendaSlideId);
                lastIndex = transition.startSlideIndex;
            });
            // Add any remaining content slides after the last transition
            finalSlides.push(...originalContentSlides.slice(lastIndex));
        } else {
            finalSlides = originalContentSlides; // No agenda or transitions, use original slides
        }
    }

    // Add the ID to the presentation object for later reference
    currentPresentation = { ...originalPresentationData, slides: finalSlides, id: presentationId };
    document.body.classList.add('presentation-active');
    presentationModeEl.classList.remove('hidden');

    if (window.isSuperAdmin) {
        editBtn.classList.remove('hidden');
    } else {
        editBtn.classList.add('hidden');
    }
    editPanel.classList.add('hidden');

    showSlide(0);
    window.addEventListener('keydown', handlePresentationKeys);
}

function exitPresentation() {
    document.body.classList.remove('presentation-active');
    presentationModeEl.classList.add('hidden');
    presentationContentEl.innerHTML = '';
    currentPresentation = null;
    editPanel.classList.add('hidden');
    window.removeEventListener('keydown', handlePresentationKeys);

    // Trigger navigation to default view after closing presentation
    document.dispatchEvent(new CustomEvent('presentationExited'));
}

export function isPresentationActive() {
    return !!currentPresentation;
}

export function closePresentation() {
    if (isPresentationActive()) {
        exitPresentation();
    }
}

export function updatePresentationData(pData, p) {
    pageData = pData;
    presentations = p;
}

export function initPresentationMode(pData, p) {
    updatePresentationData(pData, p);

    document.addEventListener('click', (e) => {
        const startBtn = e.target.closest('[data-action="start-presentation"]');
        if (startBtn) startPresentation(startBtn.dataset.presentationId);
    });

    presentationContentEl.addEventListener('click', (e) => {
        const jumpBtn = e.target.closest('[data-action="jump-to-slide"]');
        if (jumpBtn && jumpBtn.dataset.slideIndex) {
            const targetOriginalIndex = parseInt(jumpBtn.dataset.slideIndex, 10);
            const presentationConfig = pageData.presentations.content.presentations.find(p => p.presentationId === currentPresentation.id);
            const agendaSlideId = Object.keys(presentationConfig.templateData).find(id => id.includes('agenda'));
            
            // Get all transition items from the agenda data, sorted by their original slide index
            const sortedTransitions = presentationConfig.templateData[agendaSlideId].content.days
                .flatMap(day => day.items)
                .filter(item => item.isTransition)
                .sort((a, b) => a.startSlideIndex - b.startSlideIndex);

            // Find the index of the clicked transition item in the sorted list of all transitions
            const clickedTransitionIndex = sortedTransitions.findIndex(item => item.startSlideIndex === targetOriginalIndex);

            if (clickedTransitionIndex !== -1) {
                // The Nth transition corresponds to the Nth occurrence of the agenda slide.
                const occurrence = clickedTransitionIndex + 1;
                let count = 0;
                // Find the index of the Nth agenda slide in the final list.
                const targetIndex = currentPresentation.slides.findIndex(slide => slide === agendaSlideId && ++count === occurrence);
                
                showSlide(targetIndex);
            }
        }

        // --- Handle SaaS Toggle Click in Presentation Mode ---
        const saasToggle = e.target.closest('#saas-mode-toggle');
        if (saasToggle) {
            const slideId = currentPresentation.slides[currentSlideIndex];
            const presentationConfig = pageData.presentations.content.presentations.find(p => p.presentationId === currentPresentation.id);
            
            // Find the correct data object for the slide
            const slideData = presentationConfig?.templateData?.[slideId] || pageData[slideId];

            if (slideData && slideData.layout === 'saasComparisonPage') {
                slideData.content.agileMode = !slideData.content.agileMode;
                showSlide(currentSlideIndex); // Re-render the current slide
            }
        }

    });

    exitBtn.addEventListener('click', exitPresentation);
    prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
    firstBtn.addEventListener('click', () => showSlide(0));
    lastBtn.addEventListener('click', () => showSlide(currentPresentation.slides.length - 1));
    editBtn.addEventListener('click', toggleEditPanel);
    editPanelCloseBtn.addEventListener('click', toggleEditPanel);
    fullscreenBtn.addEventListener('click', toggleFullScreen);

    document.addEventListener('navigateToSlide', (e) => {
        if (e.detail && e.detail.slideIndex !== undefined) showSlide(e.detail.slideIndex);
    });
}