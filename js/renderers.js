// --- Helper to create page headers
const createHeader = (title, subtitle, options = {}) => {
    const { mode, dataPath, pageId } = options;
    const isSuperAdmin = mode === 'superadmin';

    const makeEditable = (content, field, isBlock = false) => {
        if (!isSuperAdmin || !dataPath || !pageId) return content;
        const tag = isBlock ? 'div' : 'span';
        return `<${tag} contenteditable="true" 
                      class="${isBlock ? 'p-1' : 'inline-block p-1 -m-1'} rounded-md focus:outline-none focus:bg-violet-100 focus:ring-2 focus:ring-shyftplan-purple"
                      data-path="${dataPath}.${field}" 
                      data-page-id="${pageId}">${content}</${tag}>`;
    };

    return `
        <header class="mb-8">
            <h1 class="text-3xl font-bold text-slate-800">${makeEditable(title, 'title')}</h1>
            <p class="text-slate-500 mt-1">${makeEditable(subtitle, 'subtitle')}</p>
        </header>`;
};

// Helper to save contenteditable changes
function addSuperadminEventListeners(container) {
    container.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.addEventListener('blur', () => {
            const path = el.dataset.path;
            const pageId = el.dataset.pageId;
            if (!path || !pageId) return;

            try {
                const keys = path.split('.');
                // Start from the global window object and traverse the path.
                let obj = window;
                for (let i = 0; i < keys.length - 1; i++) {
                    obj = obj[keys[i]];
                }
                obj[keys[keys.length - 1]] = el.innerHTML; // Use innerHTML to keep potential formatting
            } catch (e) {
            }

            // No full re-render on blur to avoid losing focus, but we could notify if needed.
            // notifyDataChange(pageId); 
        });
    });
}

// Helper for accordions inside rendered content
function addAccordionEventListeners(context) {
    const accordions = context.querySelectorAll('.accordion-button');
    accordions.forEach(button => {
        const content = button.nextElementSibling;
        if (button && content) {
            const isExpanded = !content.classList.contains('hidden');
            button.setAttribute('aria-expanded', isExpanded);
            button.addEventListener('click', () => {
                const isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isCurrentlyExpanded);
                content.classList.toggle('hidden');
            });
        }
    });
}

// Helper to notify app of data changes for re-rendering
function notifyDataChange(pageId) {
    document.dispatchEvent(new CustomEvent('dataChanged', { detail: { pageId } }));
}

// Helper to replace {{...}} placeholders in a string
function replacePlaceholders(htmlString, dataObject) {
    if (!htmlString || !dataObject) return htmlString;
    return htmlString.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        // Use the value from the data object if it exists, otherwise keep the placeholder
        return dataObject.hasOwnProperty(key) ? dataObject[key] : match;
    });
}

// --- RENDER FUNCTION FOR PLACEHOLDERS ---
export const renderPlaceholder = (container, data, options = {}) => {
    const pageId = container.id || data.id;
    const dataPath = `pageData.${pageId}`;
    container.innerHTML = options.presentationMode ? '' : createHeader(data.title, data.subtitle, { ...options, dataPath, pageId });
    if (options.mode === 'superadmin') addSuperadminEventListeners(container);
};


// --- RENDER FUNCTIONS FOR DIFFERENT LAYOUTS ---
export const renderDashboard = (container, data, options = {}) => {
    const { mode } = options;
    const isSuperAdmin = mode === 'superadmin';
    const pageId = container.id || data.id;
    const dataPath = `pageData.${pageId}`;

    const makeEditable = (content, path) => {
        if (!isSuperAdmin) return content;
        return `<span contenteditable="true" class="inline-block p-1 -m-1 rounded-md focus:outline-none focus:bg-violet-100 focus:ring-2 focus:ring-shyftplan-purple" data-path="${dataPath}.${path}" data-page-id="${pageId}">${content}</span>`;
    };

    const statsHtml = data.content.stats.map((stat, i) => `
        <div class="bg-white p-4 rounded-xl border border-slate-200 flex items-center">
            <div class="p-3 rounded-full bg-violet-100 mr-4"><i data-lucide="${stat.icon}" class="h-6 w-6 text-shyftplan-purple"></i></div>
            <div>
                <p class="text-2xl font-bold text-slate-800">${makeEditable(stat.value, `content.stats.${i}.value`)}</p>
                <p class="text-sm text-slate-500">${makeEditable(stat.label, `content.stats.${i}.label`)}</p>
            </div>
        </div>`).join('');
    const tasksHtml = data.content.tasks.map((task, i) => `<div class="flex items-center p-3 rounded-lg ${task.status === 'done' ? 'bg-slate-50' : ''}"><i data-lucide="${task.status === 'done' ? 'check-circle-2' : 'circle'}" class="h-5 w-5 ${task.status === 'done' ? 'text-green-500' : 'text-slate-400'}"></i><span class="ml-3 text-sm font-medium ${task.status === 'done' ? 'text-slate-500 line-through' : 'text-slate-700'}">${makeEditable(task.text, `content.tasks.${i}.text`)}</span>${task.due ? `<span class="ml-auto text-xs font-medium text-slate-400">${makeEditable(task.due, `content.tasks.${i}.due`)}</span>` : ''}</div>`).join('');
    
    container.innerHTML = `${options.presentationMode ? '' : createHeader(data.title, data.subtitle, { ...options, pageId, dataPath })}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">${statsHtml}</div><div class="bg-white p-6 rounded-xl border border-slate-200"><h3 class="text-lg font-semibold text-slate-800 mb-4">${makeEditable(data.content.title || 'Offene Aufgaben', 'content.title')}</h3><div class="space-y-2">${tasksHtml}</div></div>`;
    if (isSuperAdmin) addSuperadminEventListeners(container);
};
export const renderChecklist = (container, data, options = {}) => {
    container.innerHTML = `
        ${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}
        <div class="bg-white p-6 rounded-xl border border-slate-200">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold">Checkliste</h3>
                <p class="text-sm font-medium text-slate-500">
                    <span id="preconditions-checklist-completed-count">0</span> / <span id="preconditions-checklist-total-count">0</span> Erledigt
                </p>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 mb-6">
                <div id="preconditions-checklist-progress-bar" class="bg-shyftplan-purple h-2.5 rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
            <div id="preconditions-checklist" class="space-y-3"></div>
        </div>`;

    const checklistContainer = document.getElementById('preconditions-checklist');
    const checklistItems = data.content;
    const completedCountEl = document.getElementById('preconditions-checklist-completed-count');
    const totalCountEl = document.getElementById('preconditions-checklist-total-count');
    const progressBarEl = document.getElementById('preconditions-checklist-progress-bar');
    
    totalCountEl.textContent = checklistItems.length;

    function render() {
        checklistContainer.innerHTML = '';
        checklistItems.forEach((item, index) => {
            const isChecked = item.checked;
            const itemHtml = `
                <div class="border rounded-lg overflow-hidden transition-all duration-300 ${isChecked ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'}">
                    <div class="flex items-center p-3">
                        <div data-action="toggle-check" data-index="${index}" class="flex-shrink-0 h-6 w-6 rounded-md border-2 ${isChecked ? 'bg-shyftplan-purple border-shyftplan-purple' : 'border-slate-300 bg-slate-50'} flex items-center justify-center mr-4 cursor-pointer hover:border-shyftplan-purple transition-colors">
                            ${isChecked ? '<i data-lucide="check" class="h-4 w-4 text-white"></i>' : ''}
                        </div>
                        <span class="flex-grow font-medium text-sm ${isChecked ? 'text-slate-500 line-through' : 'text-slate-800'}">${item.text}</span>
                        <div class="ml-auto text-xs font-semibold px-2 py-1 rounded-full ${isChecked ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}">${isChecked ? 'Erledigt' : 'Ausstehend'}</div>
                        <button data-action="toggle-accordion" class="checklist-accordion-toggle ml-2 p-1 rounded-full hover:bg-slate-100"><i data-lucide="chevron-down" class="h-5 w-5 text-slate-500"></i></button>
                    </div>
                    <div class="checklist-accordion-content hidden px-4 pb-4 pl-14">
                        <p class="text-sm text-slate-600">${item.description}</p>
                    </div>
                </div>`;
            checklistContainer.innerHTML += itemHtml;
        });
        lucide.createIcons();
    }
    function updateProgress() {
        const completedItems = checklistItems.filter(item => item.checked).length;
        completedCountEl.textContent = completedItems;
        const progress = (completedItems / checklistItems.length) * 100;
        progressBarEl.style.width = `${progress}%`;
        if (progress === 100) {
            if(document.hidden === false){setTimeout(() => confetti({ particleCount: 100, spread: 70, origin: { y: 0.2 } }), 300);}
        }
    }
    checklistContainer.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action]'); if (!target) return;
        const action = target.dataset.action;
        if (action === 'toggle-check') { const index = target.dataset.index; checklistItems[index].checked = !checklistItems[index].checked; render(); updateProgress(); } else if (action === 'toggle-accordion') { const content = target.closest('.border').querySelector('.checklist-accordion-content'); content.classList.toggle('hidden'); target.setAttribute('aria-expanded', !content.classList.contains('hidden')); }
    });
    render(); updateProgress();
};
export const renderAgenda = (container, data, options = {}) => {
    const { mode, activeAgendaIndex } = options;
    const isSuperAdmin = mode === 'superadmin';
    const pageId = container.id;
    const dataPath = `pageData.${pageId}.content`;

    const makeEditable = (content, path, isBlock = false) => {
        if (!isSuperAdmin || options.presentationMode) return content;
        const tag = isBlock ? 'div' : 'span';
        return `<${tag} contenteditable="true" class="inline-block p-1 -m-1 rounded-md focus:outline-none focus:bg-violet-100 focus:ring-2 focus:ring-shyftplan-purple" data-path="${path}" data-page-id="${pageId}">${content}</${tag}>`;
    };

    function render() {
        const days = Array.isArray(data.content?.days) ? data.content.days : [];
        // Get all transition items once for efficient lookup
        const allTransitionItems = days.flatMap(day => day.items)
            .map((item, index) => ({ ...item, globalIndex: index }))
            .filter(item => item.isTransition);

        const daysHtml = days.map((day, dayIndex) => {
            const dayDataPath = `${dataPath}.days.${dayIndex}`;
            const items = Array.isArray(day.items) ? day.items : [];
            const itemsHtml = items.map((item, itemIndex) => {
                const isHighlighted = (itemIndex + 1) === activeAgendaIndex;
                const itemDataPath = `${dayDataPath}.items.${itemIndex}`;

                const presentationAttrs = options.presentationMode && item.isTransition
                    ? `data-action="jump-to-slide" data-slide-index="${item.startSlideIndex}"`
                    : '';
                const presentationClasses = options.presentationMode && item.isTransition
                    ? 'cursor-pointer hover:bg-violet-100'
                    : '';

                // Find the presentation this agenda belongs to, to get the correct slide count
                const presentationConfig = window.pageData.presentations.content.presentations.find(p => 
                    p.templateData && p.templateData[pageId]
                );
                const presentationId = presentationConfig ? presentationConfig.presentationId : null;
                const slideCount = presentationId && window.presentations[presentationId] 
                    ? window.presentations[presentationId].slides.length 
                    : 20; // Fallback to 20 if not found

                // --- Dropdown Validation Logic ---
                // Find the startSlideIndex of the previous transition item
                const currentGlobalIndex = days.slice(0, dayIndex).reduce((acc, d) => acc + d.items.length, 0) + itemIndex;
                const currentTransitionItemIndex = allTransitionItems.findIndex(t => t.globalIndex === currentGlobalIndex);
                const minSlideIndex = currentTransitionItemIndex > 0 ? allTransitionItems[currentTransitionItemIndex - 1].startSlideIndex + 1 : 0;

                // Find the startSlideIndex of the next transition item to set an upper bound
                const nextTransitionItem = allTransitionItems[currentTransitionItemIndex + 1];
                const maxSlideIndex = nextTransitionItem ? nextTransitionItem.startSlideIndex : slideCount;

                const chapterSelectHtml = isSuperAdmin && !options.presentationMode && item.isTransition ? `
                    <div class="mt-3 pl-12 flex items-center gap-3 text-sm bg-slate-100 p-2 rounded-lg border border-slate-200/80">
                        <i data-lucide="film" class="h-5 w-5 text-slate-500"></i>
                        <label for="chapter-start-select-${dayIndex}-${itemIndex}" class="font-semibold text-slate-700">Kapitelstart bei Folie:</label>
                        <div class="relative group">
                            <select id="chapter-start-select-${dayIndex}-${itemIndex}" data-action="set-chapter-start" data-day-index="${dayIndex}" data-item-index="${itemIndex}" class="appearance-none bg-white border-2 border-slate-300 rounded-lg py-1.5 pl-3 pr-10 font-bold text-shyftplan-purple focus:outline-none focus:ring-2 focus:ring-shyftplan-purple focus:border-shyftplan-purple transition-all group-hover:border-shyftplan-purple">
                                ${[...Array(slideCount).keys()].map(i => {
                                    const isDisabled = i < minSlideIndex || i >= maxSlideIndex;
                                    const isSelected = item.startSlideIndex === i;
                                    return `<option 
                                                value="${i}" 
                                                ${isSelected ? 'selected' : ''} 
                                                ${isDisabled ? 'disabled class="text-slate-300 bg-slate-50"' : 'class="text-slate-700"'}
                                            >${i + 1}</option>`;
                                }).join('')}
                            </select>
                            <i data-lucide="chevrons-up-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-shyftplan-purple transition-colors"></i>
                        </div>
                    </div>
                ` : '';

                return `
                <li class="agenda-item flex flex-col p-4 border-b border-slate-200 last:border-b-0 transition-colors duration-300 ${isHighlighted ? 'bg-violet-50' : ''} ${presentationClasses}" data-day-index="${dayIndex}" data-item-index="${itemIndex}" ${presentationAttrs}>
                    <div class="flex items-start w-full">
                        <div class="time basis-48 flex-shrink-0 font-medium text-shyftplan-purple pr-8 text-lg pt-1">
                            ${makeEditable(item.time, `${itemDataPath}.time`)}
                        </div>
                        <div class="description flex-grow">
                            <p class="title text-lg font-medium text-slate-800 mb-1">
                                ${makeEditable(item.title, `${itemDataPath}.title`)}
                            </p>
                            <p class="details text-base text-slate-500">
                                ${makeEditable(item.details, `${itemDataPath}.details`)}
                            </p>
                        </div>
                        ${isSuperAdmin && !options.presentationMode ? `
                            <div class="flex items-center ml-4">
                                <button data-action="toggle-transition" title="Als Highlight-Folie ein/ausblenden" class="p-2 rounded-full ${item.isTransition ? 'text-shyftplan-purple' : 'text-slate-400'} hover:bg-violet-100">
                                    <i data-lucide="${item.isTransition ? 'eye' : 'eye-off'}" class="h-5 w-5"></i>
                                </button>
                                <button data-action="delete-agenda-item" title="Eintrag löschen" class="p-2 rounded-full text-slate-400 hover:bg-red-100 hover:text-red-600">
                                    <i data-lucide="trash-2" class="h-5 w-5"></i>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                    ${chapterSelectHtml}
                </li>`;
            }).join('');

            const dayAdminControls = isSuperAdmin && !options.presentationMode ? `
                <div class="mt-4 text-center">
                    <button data-action="add-agenda-item" data-day-index="${dayIndex}" class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-shyftplan-purple py-2 px-4 rounded-lg hover:bg-violet-700">
                        <i data-lucide="plus" class="h-4 w-4"></i> Eintrag für Tag ${dayIndex + 1} hinzufügen
                    </button>
                </div>
            ` : '';

            // Auto-calculate workshop time for the day
            const firstItemTime = items[0]?.time.split('–')[0].trim() || 'N/A';
            const lastItemTime = items[items.length - 1]?.time.split('–')[1].trim() || 'N/A';
            const workshopTime = `${firstItemTime} – ${lastItemTime}`;

            const dayHeaderHtml = days.length > 1 ? `
                <section class="flex justify-between items-center py-8 border-b border-slate-200">
                    <h2 class="text-2xl font-semibold text-slate-700">
                        <span class="text-slate-500">Tag ${dayIndex + 1}:</span> 
                        ${makeEditable(day.title, `${dayDataPath}.title`)}
                    </h2>
                    <span class="text-lg font-semibold text-slate-700 bg-slate-100 px-4 py-2 rounded-lg">${workshopTime}</span>
                </section>` : '';

            return `
                <div class="day-container mb-8" data-day-index="${dayIndex}">
                    ${dayHeaderHtml}
                    <ul class="agenda-items list-none p-0 m-0">${itemsHtml}</ul>
                    ${dayAdminControls}
                </div>
            `;
        }).join('');

        const globalAdminControls = isSuperAdmin && !options.presentationMode ? `
            <div class="mt-8 text-center border-t border-slate-200 pt-6">
                <button data-action="add-agenda-day" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 bg-slate-200 py-2 px-4 rounded-lg hover:bg-slate-300">
                    <i data-lucide="calendar-plus" class="h-4 w-4"></i> Weiteren Tag hinzufügen
                </button>
            </div>
        ` : '';

        container.innerHTML = `
            ${options.presentationMode ? '' : createHeader(data.title, data.subtitle, { ...options, pageId, dataPath })}
            <div class="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-slate-200/50">
                ${daysHtml}
                ${globalAdminControls}
            </div>
        `;

        lucide.createIcons();
        if (isSuperAdmin && !options.presentationMode) {
            addSuperadminEventListeners(container);
            container.addEventListener('click', (e) => {
                const button = e.target.closest('button[data-action]');
                if (!button) return; // Exit if not an action button
                const { action, dayIndex } = button.dataset;
                const itemEl = button.closest('li.agenda-item');
                const itemDayIndex = itemEl ? parseInt(itemEl.dataset.dayIndex, 10) : -1;
                const itemIndex = itemEl ? parseInt(itemEl.dataset.itemIndex, 10) : -1;

                if (action === 'add-agenda-item') {
                    // dayIndex from button is correct here
                    const day = data.content.days[dayIndex];
                    if (!Array.isArray(day.items)) day.items = []; // Ensure items array exists
                    const lastItem = day.items[day.items.length - 1];
                    const newStartTime = lastItem ? lastItem.time.split('–')[1].trim() : '09:00';
                    day.items.push({ time: `${newStartTime} – ...`, title: 'Neuer Punkt', details: 'Beschreibung...', isTransition: false, startSlideIndex: 0 });
                    render();
                } else if (action === 'delete-agenda-item' && itemEl) {
                    data.content.days[itemDayIndex].items.splice(itemIndex, 1);
                    render();
                } else if (action === 'toggle-transition' && itemEl && itemDayIndex !== -1 && itemIndex !== -1) {
                    const item = data.content.days[itemDayIndex].items[itemIndex];
                    item.isTransition = !item.isTransition;
                    render();
                } else if (action === 'add-agenda-day') {
                    data.content.days.push({ title: `Tag ${data.content.days.length + 1}`, items: [] });
                    render();
                }
            });
            container.addEventListener('change', (e) => {
                const select = e.target.closest('select[data-action="set-chapter-start"]');
                if (select) {
                    const { dayIndex, itemIndex } = select.dataset;
                    data.content.days[dayIndex].items[itemIndex].startSlideIndex = parseInt(select.value, 10);
                }
            });
        }
    }

    render();
};
export const renderAccordionChecklist = (container, data, options = {}) => {
    function render() {
        const accordionsHtml = data.content.map((accordion, accordionIndex) => {
            const completedItems = accordion.items.filter(item => item.checked).length;
            const totalItems = accordion.items.length;
            const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

            const checklistItemsHtml = accordion.items.map((item, itemIndex) => {
                const isChecked = item.checked;
                const linkTarget = item.link ? `href="${item.link}"` : '';
                return `
                    <a ${linkTarget} class="flex items-center p-2 rounded-lg hover:bg-slate-50 group">
                        <div class="flex-shrink-0 h-6 w-6 rounded-md border-2 ${isChecked ? 'bg-shyftplan-purple border-shyftplan-purple' : 'border-slate-300 bg-slate-50'} flex items-center justify-center mr-4">
                            ${isChecked ? '<i data-lucide="check" class="h-4 w-4 text-white"></i>' : ''}
                        </div>
                        <span class="flex-grow font-medium text-sm ${isChecked ? 'text-slate-500' : 'text-slate-800'} group-hover:text-shyftplan-purple transition-colors">${item.text}</span>
                        ${item.link ? `<i data-lucide="arrow-up-right" class="h-5 w-5 text-slate-400 ml-auto group-hover:text-shyftplan-purple transition-transform group-hover:scale-110"></i>` : ''}
                    </a>`;
            }).join('');

            return `
                <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button class="accordion-button w-full flex justify-between items-center p-4 text-left" aria-expanded="true">
                        <div class="flex-grow">
                            <h3 class="text-lg font-semibold text-slate-800 flex items-center">
                                <i data-lucide="${accordion.icon || 'circle'}" class="h-5 w-5 mr-3 text-shyftplan-purple"></i>
                                ${accordion.title}
                            </h3>
                            <p class="text-sm text-slate-500 mt-1">${accordion.description}</p>
                            <div class="flex items-center mt-3">
                                <div class="w-full bg-slate-200 rounded-full h-2 mr-4"><div class="bg-shyftplan-purple h-2 rounded-full transition-all duration-500" style="width: ${progress}%"></div></div>
                                <span class="text-sm font-medium text-slate-500 whitespace-nowrap">${completedItems} / ${totalItems}</span>
                            </div>
                        </div>
                        <i data-lucide="chevron-down" class="h-5 w-5 text-slate-500 flex-shrink-0 ml-4"></i>
                    </button>
                    <div class="accordion-content p-4 border-t border-slate-200">
                        <div class="space-y-3">${checklistItemsHtml}</div>
                    </div>
                </div>`;
        }).join('');

        container.innerHTML = `${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}<div class="space-y-6">${accordionsHtml}</div>`;
        lucide.createIcons();
        addAccordionEventListeners(container);
        checkAndTriggerConfetti();
    }

    function checkAndTriggerConfetti() {
        const allItems = data.content.flatMap(acc => acc.items);
        const allCompleted = allItems.every(item => item.checked);
    }

    render();
};
export const renderResourceGrid = (container, data, options = {}) => {
    const itemsHtml = data.content.map(item => {
        if (item.action === 'start-presentation') {
            return `<button data-action="start-presentation" data-presentation-id="${item.presentationId}" class="block text-left bg-white p-6 rounded-xl border border-slate-200 hover:border-shyftplan-purple hover:shadow-lg transition-all duration-300 group w-full">
                        <div class="p-3 rounded-full bg-violet-100 inline-block"><i data-lucide="${item.icon}" class="h-6 w-6 text-shyftplan-purple"></i></div>
                        <h4 class="font-semibold text-slate-800 mt-4">${item.title}</h4>
                        <p class="text-sm text-slate-500 mt-1">${item.description}</p>
                    </button>`;
        }
        return `<a href="${item.link}" class="block bg-white p-6 rounded-xl border border-slate-200 hover:border-shyftplan-purple hover:shadow-lg transition-all duration-300 group"><div class="p-3 rounded-full bg-violet-100 inline-block"><i data-lucide="${item.icon}" class="h-6 w-6 text-shyftplan-purple"></i></div><h4 class="font-semibold text-slate-800 mt-4">${item.title}</h4><p class="text-sm text-slate-500 mt-1">${item.description}</p></a>`;
    }).join('');
    container.innerHTML = `${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${itemsHtml}</div>`;
};
export const renderPresentationsPage = (container, data, options = {}) => {
    const { mode } = options;
    const isSuperAdmin = mode === 'superadmin';

    const presentationsHtml = data.content.presentations.map(item => {
        const templateButtons = isSuperAdmin && item.templateData ? Object.keys(item.templateData).map(templateId => {
            const template = item.templateData[templateId];
            // Choose icon based on layout or title
            const icon = template.layout === 'agenda' ? 'list' : 'layout-template';
            const title = template.actionTitle || template.title || 'Template bearbeiten';
            return `<a href="#${templateId}" data-presentation-id="${item.presentationId}" title="${title}" class="nav-link template-edit-button bg-slate-200 text-slate-600 h-8 w-8 rounded-full flex items-center justify-center hover:bg-shyftplan-purple hover:text-white transition-all"><i data-lucide="${icon}" class="h-4 w-4"></i></a>`;
        }).join('') : '';

        const adminControls = isSuperAdmin ? `
            <div class="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ${templateButtons}
            </div>
        ` : '';

        return `
            <div class="relative group">
                <button data-action="start-presentation" data-presentation-id="${item.presentationId}" class="block text-left bg-white p-6 rounded-xl border border-slate-200 hover:border-shyftplan-purple hover:shadow-lg transition-all duration-300 w-full h-full">
                    <div class="p-3 rounded-full bg-violet-100 inline-block"><i data-lucide="${item.icon}" class="h-6 w-6 text-shyftplan-purple"></i></div>
                    <h4 class="font-semibold text-slate-800 mt-4">${item.title}</h4>
                    <p class="text-sm text-slate-500 mt-1">${item.description}</p>
                </button>
                ${adminControls}
            </div>
        `;
    }).join('');

    container.innerHTML = `
        ${options.presentationMode ? '' : createHeader(data.title, data.subtitle, options)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${presentationsHtml}
        </div>
    `;
    lucide.createIcons();
};
export const renderItemList = (container, data, options = {}) => {
    const itemsHtml = data.content.items.map(item => `<div class="p-4 border-b border-slate-100 last:border-b-0"><div class="flex items-center"><div class="flex-grow"><p class="font-medium text-slate-800">${item.title}</p><p class="text-sm text-slate-500">${item.status}</p></div>${item.progress !== undefined && item.progress !== null ? `<div class="w-1/3 mx-4"><div class="w-full bg-slate-200 rounded-full h-2"><div class="bg-shyftplan-purple h-2 rounded-full" style="width: ${item.progress}%"></div></div></div>` : ''}${item.duration ? `<span class="text-sm font-medium text-slate-500">${item.duration}</span>` : ''}</div></div>`).join('');
    container.innerHTML = `${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}<div class="bg-white rounded-xl border border-slate-200"><div class="p-4 border-b border-slate-200"><h3 class="text-lg font-semibold text-slate-800">${data.content.title}</h3></div><div>${itemsHtml}</div></div>`;
};
export const renderProcessSteps = (container, data, options = {}) => {
    const stepsHtml = data.content.map((step, index) => { const isDone = step.status === 'done', isCurrent = step.status === 'current'; return `<div class="flex items-center"><div class="flex flex-col items-center mr-6"><div class="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isDone ? 'bg-shyftplan-purple text-white' : isCurrent ? 'bg-white border-2 border-shyftplan-purple text-shyftplan-purple' : 'bg-slate-200 text-slate-500'}">${isDone ? '<i data-lucide="check"></i>' : `<span class="font-bold">${index + 1}</span>`}</div>${index < data.content.length - 1 ? '<div class="w-px h-12 bg-slate-200 mt-2"></div>' : ''}</div><div><h4 class="font-semibold ${isCurrent ? 'text-shyftplan-purple' : 'text-slate-800'}">${step.name}</h4><p class="text-sm text-slate-500">${step.description}</p></div></div>`; }).join('');
    container.innerHTML = `${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}<div class="bg-white p-6 rounded-xl border border-slate-200">${stepsHtml}</div>`;
};
export const renderDocumentWorkflow = (container, data, options = {}) => {
    const introHtml = `
        <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h3 class="text-lg font-semibold text-slate-800 mb-4">${data.content.introductionTitle || 'Einführung'}</h3>
            <div class="space-y-4 text-sm text-slate-600">${data.content.introduction}</div>
        </div>`;

    let materialsHtml = '';
    if (data.content.additionalMaterials) {
        const materialsData = data.content.additionalMaterials;
        const itemsHtml = materialsData.items.map(item => {
            let actionButton = '';
            if (item.type === 'download') {
                actionButton = `<a href="${item.link}" download class="mt-4 inline-flex items-center text-sm font-semibold text-shyftplan-purple hover:text-violet-700"><i data-lucide="download" class="h-4 w-4 mr-2"></i>${item.buttonText || 'Herunterladen'}</a>`;
            } else if (item.type === 'copyLink') {
                actionButton = `<button data-action="copy-link" data-link="${item.link}" class="mt-4 inline-flex items-center text-sm font-semibold text-shyftplan-purple hover:text-violet-700"><i data-lucide="copy" class="h-4 w-4 mr-2"></i>Link kopieren</button>`;
            }

            return `
                <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col">
                    <div class="flex items-start">
                        <div class="p-2 rounded-full bg-violet-100 inline-block mr-4 flex-shrink-0">
                            <i data-lucide="${item.icon}" class="h-5 w-5 text-shyftplan-purple"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-slate-800">${item.title}</h4>
                            <p class="text-sm text-slate-500 mt-1">${item.description}</p>
                        </div>
                    </div>
                    <div class="mt-auto pt-2">${actionButton}</div>
                </div>`;
        }).join('');

        materialsHtml = `
            <div class="bg-white p-6 rounded-xl border border-slate-200">
                <h3 class="text-lg font-semibold text-slate-800 mb-4">${materialsData.title}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${itemsHtml}</div>
            </div>`;
    }

    const processHtml = data.content.steps.map((step, index) => {
        const isDone = step.status === 'done', isCurrent = step.status === 'current';
        let actionHtml = '';
        if (step.type === 'download') {
            const buttonText = step.buttonText || 'Datei herunterladen';
            actionHtml = `<a href="${step.link}" download class="mt-2 inline-flex items-center text-sm font-semibold text-shyftplan-purple hover:text-violet-700"><i data-lucide="download" class="h-4 w-4 mr-2"></i>${buttonText}</a>`;
        } else if (step.type === 'upload') {
            actionHtml = `<button class="mt-2 inline-flex items-center text-sm font-semibold text-shyftplan-purple hover:text-violet-700 disabled:text-slate-400 disabled:cursor-not-allowed" ${!isCurrent ? 'disabled' : ''}><i data-lucide="upload" class="h-4 w-4 mr-2"></i>Datei hochladen</button>`;
        } else if (step.type === 'status') {
            const statusIcon = isDone ? 'check-circle-2' : 'hourglass';
            const statusColor = isDone ? 'text-green-600' : 'text-slate-500';
            actionHtml = `<div class="mt-2 flex items-center text-sm font-medium ${statusColor}"><i data-lucide="${statusIcon}" class="h-4 w-4 mr-2"></i><span>${isDone ? 'Erfolgreich geprüft' : 'Prüfung ausstehend'}</span></div>`;
        } else if (step.type === 'info') {
            actionHtml = ''; // No action needed for info steps
        }

        return `
            <div class="flex">
                <div class="flex flex-col items-center mr-6">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isDone ? 'bg-shyftplan-purple text-white' : isCurrent ? 'bg-white border-2 border-shyftplan-purple text-shyftplan-purple' : 'bg-slate-200 text-slate-500'}">${isDone ? '<i data-lucide="check"></i>' : `<span class="font-bold">${index + 1}</span>`}</div>
                    ${index < data.content.steps.length - 1 ? '<div class="w-px h-20 bg-slate-200 mt-2"></div>' : ''}
                </div>
                <div>
                    <h4 class="font-semibold ${isCurrent ? 'text-shyftplan-purple' : 'text-slate-800'}">${step.name}</h4>
                    <p class="text-sm text-slate-500">${step.description}</p>
                    ${actionHtml}
                </div>
            </div>`;
    }).join('');

    const stepsContainerHtml = `<div class="bg-white p-6 rounded-xl border border-slate-200 mt-6">${processHtml}</div>`;

    container.innerHTML = `
        ${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}
        <div class="space-y-6">
            ${introHtml}
            ${materialsHtml}
            ${stepsContainerHtml}
        </div>`;
    
    container.querySelectorAll('[data-action="copy-link"]').forEach(button => {
        button.addEventListener('click', () => {
            const linkToCopy = button.dataset.link;
            navigator.clipboard.writeText(linkToCopy).then(() => {
                const originalContent = button.innerHTML;
                button.innerHTML = '<i data-lucide="check" class="h-4 w-4 mr-2"></i>Link kopiert!';
                lucide.createIcons();
                setTimeout(() => {
                    button.innerHTML = originalContent;
                    lucide.createIcons();
                }, 2000);
            }).catch(err => { console.error('Kopieren fehlgeschlagen: ', err); alert('Link konnte nicht kopiert werden.'); });
        });
    });
};
export const renderPocIntroPage = (container, data, options = {}) => {
    function render() {
        const simpleMode = data.content.simpleMode;

        const toggleHtml = `
            <div class="flex justify-center items-center gap-3 mb-6">
                <span class="font-medium text-slate-600">Detailliert</span>
                <button type="button" id="poc-mode-toggle" class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shyftplan-purple ${simpleMode ? 'bg-shyftplan-purple' : 'bg-slate-300'}" role="switch" aria-checked="${simpleMode}">
                    <span class="sr-only">Bild-Zeitung an/aus</span>
                    <span aria-hidden="true" class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${simpleMode ? 'translate-x-5' : 'translate-x-0'}"></span>
                </button>
                <span class="font-bold text-shyftplan-purple">BILD-Modus</span>
            </div>
        `;

        const intro = data.content.introduction;
        const introContent = simpleMode ? intro.simple : intro;
        const introHtml = `
            <div class="bg-white p-6 rounded-xl border border-slate-200 mb-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start">
                    <!-- Alte Welt -->
                    <div class="md:pr-8 md:border-r md:border-slate-200">
                        <div class="flex items-center mb-3">
                            <i data-lucide="car" class="h-6 w-6 text-slate-500 mr-3 flex-shrink-0"></i>
                            <h3 class="text-lg font-bold text-slate-800">Alte Welt: Der klassische Pilot</h3>
                        </div>
                        <p class="text-sm text-slate-600 mt-1">Software wird erst in einem Projekt von Entwicklern angepasst. Hier ist ein Pilot sinnvoll, um die technische Machbarkeit zu prüfen. Die Nachteile sind jedoch:</p>
                        <div class="mt-3 bg-red-50 border border-red-200 rounded-lg p-3 space-y-2">
                            <div class="flex items-center text-sm text-red-700"><i data-lucide="x-circle" class="h-5 w-5 text-red-500 mr-2 flex-shrink-0"></i>Er lädt zu Wunschlisten ein, statt den Nutzen zu erleben.</div>
                            <div class="flex items-center text-sm text-red-700"><i data-lucide="x-circle" class="h-5 w-5 text-red-500 mr-2 flex-shrink-0"></i>Er wird durch „Fehlersuche“ blockiert, bevor er Stärken zeigt.</div>
                        </div>
                    </div>

                    <!-- Neue Welt -->
                    <div>
                        <div class="flex items-center mb-3">
                            <i data-lucide="key-round" class="h-6 w-6 text-shyftplan-purple mr-3 flex-shrink-0"></i>
                            <h3 class="text-lg font-bold text-shyftplan-purple">Neue Welt: Software-as-a-Service</h3>
                        </div>
                        <div class="mt-2 p-4 bg-violet-50 border border-violet-200 rounded-lg">
                            <p class="text-sm text-slate-700">Unsere Software ist fertig, am Markt erprobt und sofort einsatzbereit. Die Frage ist daher nicht, <strong>ob</strong> die Software funktioniert, sondern nur, <strong>wie schnell</strong> sie in Ihrem Unternehmen Mehrwert stiftet. <strong>Change Management mit Durchsetzungskraft</strong> wird dabei zum entscheidenden Faktor.</p>
                        </div>
                    </div>
                </div>
            </div>`;

        const pocDef = data.content.pocDefinition;
        const pocDefContent = simpleMode ? pocDef.simple : pocDef;
        let pocDefHtml = '';
        if (simpleMode) {
            pocDefHtml = `
                <div class="bg-violet-600 text-white p-6 rounded-xl mb-6">
                    <h3 class="text-xl font-bold mb-6 text-center">${pocDefContent.title}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        ${pocDef.items.map(item => `
                            <div class="flex items-start">
                                <i data-lucide="${item.icon}" class="h-8 w-8 text-violet-300 mr-4 mt-1 flex-shrink-0"></i>
                                <div>
                                    <p class="font-bold text-lg">${item.value}</p>
                                    <p class="text-sm text-violet-200 mt-1">${item.simpleWhy}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
        } else {
            pocDefHtml = `
                <div class="bg-violet-600 text-white p-6 rounded-xl mb-6 text-center">
                    <h3 class="text-xl font-bold mb-6">${pocDefContent.title}</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">${pocDef.items.map(item => `<div><i data-lucide="${item.icon}" class="h-8 w-8 mx-auto text-violet-300 mb-2"></i><p class="text-sm text-violet-300">${item.label}</p><p class="font-bold text-lg">${item.value}</p></div>`).join('')}</div>
                    <p class="font-semibold text-violet-200">"${pocDef.summary}"</p>
                </div>`;
        }

        const advantages = data.content.pocAdvantages;
        const advantagesContent = simpleMode ? advantages.simple : advantages;
        let advantagesHtml = '';
        if (!simpleMode) {
            advantagesHtml = `
            <div class="bg-white p-6 rounded-xl border border-slate-200 mb-6">
                <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">${advantagesContent.title}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${advantages.items.map(item => {
                        const itemContent = simpleMode ? item.simple : item;
                        return `
                            <div class="flex items-start">
                                <div class="p-3 rounded-full bg-violet-100 mr-4"><i data-lucide="${item.icon}" class="h-6 w-6 text-shyftplan-purple"></i></div>
                                <div>
                                    <h4 class="font-semibold text-slate-800">${itemContent.title}</h4>
                                    ${!simpleMode ? `<p class="text-sm text-slate-500 mt-1">${item.description}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>`;
        }

        const strategy = data.content.strategy;
        let strategyHtml = '';
        if (!simpleMode) {
            strategyHtml = `
            <div class="bg-white p-6 rounded-xl border border-slate-200 mb-6">
                <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">${simpleMode ? strategy.simple.title : strategy.title}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    ${strategy.items.map(item => {
                        const itemContent = simpleMode ? item.simple : item;
                        return `
                            <div class="flex items-start">
                                <div class="p-3 rounded-full bg-violet-100 mr-4"><i data-lucide="${item.icon}" class="h-6 w-6 text-shyftplan-purple"></i></div>
                                <div>
                                    <h4 class="font-semibold text-slate-800">${itemContent.title}</h4>
                                    ${!simpleMode ? `<p class="text-sm text-slate-500 mt-1">${item.description}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>`;
        }
        
        const prereq = data.content.prerequisite;
        const prereqContent = simpleMode ? prereq.simple : prereq;
        let prereqHtml = '';
        if (!simpleMode) {
            prereqHtml = `
            <div class="border-l-4 border-blue-400 bg-blue-50 p-4 mb-6">
                <div class="flex">
                    <div class="flex-shrink-0"><i data-lucide="${prereq.icon}" class="h-5 w-5 text-blue-500"></i></div>
                    <div class="ml-3">
                        <h3 class="text-sm font-medium text-blue-800">${prereqContent.title}</h3>
                        <p class="mt-2 text-sm text-blue-700">${prereqContent.text}</p>
                    </div>
                </div>
            </div>`;
        }

        const checkboxData = data.content.checkbox;
        const isChecked = checkboxData.checked;
        const checkboxHtml = `<div data-action="confirm-card" class="p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isChecked ? 'border-shyftplan-purple bg-violet-50' : 'border-slate-200 bg-white hover:border-slate-300'}"><div class="flex items-start"><div class="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${isChecked ? 'bg-shyftplan-purple' : 'bg-slate-100'} transition-colors duration-300"><i data-lucide="${isChecked ? 'check' : 'rocket'}" class="h-6 w-6 ${isChecked ? 'text-white' : 'text-shyftplan-purple'}"></i></div><div class="ml-4 flex-grow"><h4 class="text-lg font-bold text-slate-800">Unser Commitment für den Erfolg</h4><p class="text-sm text-slate-600">${checkboxData.text}</p>${!isChecked ? '<p class="mt-3 text-sm font-semibold text-shyftplan-purple">Klicken Sie hier, um zuzustimmen.</p>' : ''}</div></div></div>`;

        container.innerHTML = (options.presentationMode ? '' : createHeader(data.title, data.subtitle)) + toggleHtml + introHtml + pocDefHtml + advantagesHtml + strategyHtml + prereqHtml + checkboxHtml;
        lucide.createIcons();

        container.querySelector('[data-action="confirm-card"]').addEventListener('click', () => {
            checkboxData.checked = !checkboxData.checked;
            const erfolgsSetupData = window.pageData['erfolgs-setup'];
            const itemToUpdate = erfolgsSetupData?.content.flatMap(acc => acc.items).find(item => item.link === '#' + container.id);
            if (itemToUpdate) { 
                itemToUpdate.checked = checkboxData.checked; 
                notifyDataChange('erfolgs-setup');
            }
            render();
        });
        container.querySelector('#poc-mode-toggle').addEventListener('click', () => {
            data.content.simpleMode = !data.content.simpleMode;
            render();
        });
    }
    render();
};
export const renderVideoQuiz = (container, data, options = {}) => {
    const videoHtml = `
        <div class="bg-white p-6 rounded-xl border border-slate-200 mb-6">
            <h3 class="text-lg font-semibold text-slate-800 mb-4">Einführungsvideo</h3>
            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-slate-200">
                <iframe src="https://www.youtube.com/embed/${data.content.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>`;

    const quizData = data.content.quiz;
    const quizHtml = `
        <div id="quiz-container" class="bg-white p-6 rounded-xl border border-slate-200">
            <h3 class="text-lg font-semibold text-slate-800 mb-4">${quizData.title}</h3>
            <div id="quiz-questions" class="space-y-6"></div>
            <button id="submit-quiz-btn" class="mt-6 bg-shyftplan-purple text-white font-semibold py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed">Quiz auswerten</button>
            <div id="quiz-results" class="hidden mt-6"></div>
        </div>`;

    container.innerHTML = (options.presentationMode ? '' : createHeader(data.title, data.subtitle)) + videoHtml + quizHtml;

    const questionsContainer = container.querySelector('#quiz-questions');
    const submitBtn = container.querySelector('#submit-quiz-btn');
    const resultsContainer = container.querySelector('#quiz-results');

    quizData.questions.forEach((q, qIndex) => {
        const answersHtml = q.answers.map((a, aIndex) => `
            <label class="flex items-center p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer has-[:checked]:bg-violet-50 has-[:checked]:border-shyftplan-purple">
                <input type="radio" name="question-${qIndex}" value="${aIndex}" class="h-4 w-4 text-shyftplan-purple focus:ring-shyftplan-purple">
                <span class="ml-3 text-sm font-medium text-slate-700">${a.text}</span>
            </label>`).join('');
        questionsContainer.innerHTML += `<div><p class="font-medium text-slate-800 mb-3">${qIndex + 1}. ${q.question}</p><div class="space-y-2">${answersHtml}</div></div>`;
    });

    submitBtn.addEventListener('click', () => {
        let correctAnswers = 0;
        quizData.questions.forEach((q, qIndex) => {
            const selectedAnswer = container.querySelector(`input[name="question-${qIndex}"]:checked`);
            if (selectedAnswer) {
                if (q.answers[parseInt(selectedAnswer.value)].correct) correctAnswers++;
            }
        });

        const score = (correctAnswers / quizData.questions.length) * 100;
        let resultsHtml = `<h4 class="text-lg font-semibold">Ergebnis: ${correctAnswers} von ${quizData.questions.length} richtig (${score.toFixed(0)}%)</h4>`;
        if (score === 100) { resultsHtml += `<p class="mt-2 text-green-600 font-medium">Sehr gut! Sie haben alle Fragen richtig beantwortet.</p>`; }
        else {
            resultsHtml += '<div class="mt-4 space-y-4">';
            quizData.questions.forEach((q, qIndex) => {
                if (!q.answers.find((a, i) => container.querySelector(`input[name="question-${qIndex}"][value="${i}"]`)?.checked && a.correct)) { resultsHtml += `<div class="p-4 rounded-lg bg-amber-50 border border-amber-200"><p class="font-semibold text-slate-800">Frage ${qIndex + 1}: ${q.question}</p><p class="mt-2 text-sm text-slate-600">${q.explanation}</p></div>`; }
            });
            resultsHtml += '</div>';
        }
        resultsContainer.innerHTML = resultsHtml;
        resultsContainer.classList.remove('hidden');
        submitBtn.disabled = true;
    });
};
export const renderGantt = (container, data, options = {}) => {
    const headers = data.content.labels.map(label => `<div class="gantt-header">${label}</div>`).join(''); let seriesHtml = ''; data.content.series.forEach(series => { seriesHtml += `<div class="gantt-label">${series.name}</div>`; const tasksHtml = series.tasks.map(task => `<div class="gantt-bar ${task.color}" style="--start: ${task.start + 1}; --end: ${task.end + 1};" title="${task.name}">${task.name}</div>`).join(''); seriesHtml += `<div class="col-span-12 relative">${tasksHtml}</div>`; });
    container.innerHTML = `${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}<div class="bg-white p-6 rounded-xl border border-slate-200 overflow-x-auto"><div class="gantt-chart-grid min-w-[800px]"><div></div>${headers}${seriesHtml}</div></div>`;
};
export const renderInteractiveOrgChart = (container, data, options = {}) => {
    /**
     * OrgChartModule
     * A self-contained module for the interactive organization chart.
     * It manages its own state and renders a two-panel layout for editing hierarchical data.
     */
    const OrgChartModule = (() => {
        // --- STATE MANAGEMENT ---
    })(); // End of OrgChartModule IIFE
};
 export const renderSaasComparisonPage = (container, data, options = {}) => {
    function render() {
        // Diese Logik bleibt unverändert
        const agileMode = data.content.agileMode;
        const comparison = data.content.comparison;
        const videoId = data.content.videoId;
        const rightColData = agileMode ? comparison.solution : comparison.problem;

        const renderPoints = (points) => {
            if (!points || points.length === 0) return '<div class="flex items-center text-sm text-slate-400"><i data-lucide="minus" class="h-4 w-4 mr-2"></i> N/A</div>';
            return points.map(point => `<div class="flex items-start"><div class="h-1.5 w-1.5 bg-slate-700 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></div><span class="text-sm text-slate-600">${point}</span></div>`).join('');
        };

        // *** HIER BEGINNT DER ZU ERSETZENDE TEIL ***
        container.innerHTML = `
            ${options.presentationMode ? '' : createHeader(data.title, data.subtitle)}
            
            <div class="grid grid-cols-12">
                
                <div class="col-span-2"></div>

                <div class="col-span-10 flex flex-col items-center mb-4">
                    <button 
                        data-action="open-video-modal" 
                        data-video-src="assets/videos/${videoId}"
                        class="inline-flex items-center gap-3 bg-shyftplan-purple text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-violet-700 transition-colors shadow-lg mb-6">
                        <i data-lucide="play-circle" class="h-6 w-6"></i>
                        <span>Einführungsvideo ansehen</span>
                    </button>
                    
                    <div class="flex items-center gap-3">
                        <span class="font-medium text-slate-600">Problem</span>
                        <button type="button" id="saas-mode-toggle" class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shyftplan-purple ${agileMode ? 'bg-shyftplan-purple' : 'bg-red-600'}" role="switch" aria-checked="${agileMode}">
                            <span class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${agileMode ? 'translate-x-5' : 'translate-x-0'}"></span>
                        </button>
                        <span class="font-bold text-shyftplan-purple">Die Lösung: Agiler Ansatz</span>
                    </div>
                </div>

                <div class="col-span-12 border border-slate-200 rounded-xl overflow-hidden mt-2">
                    
                    <div class="grid grid-cols-12 text-sm font-semibold bg-white">
                        <div class="col-span-2 p-4"></div>
                        <div class="col-span-5 p-4 text-slate-700 text-left border-l border-slate-200">Konventionelle Software</div>
                        <div class="col-span-5 p-4 text-slate-700 text-left border-l border-slate-200">Cloud Software</div>
                    </div>

                    <div class="grid grid-cols-12 text-sm border-y border-slate-200">
                        <div class="col-span-2 p-4 bg-slate-50 font-semibold text-slate-700"></div>
                        <div class="col-span-5 p-4 bg-slate-50 font-semibold text-slate-700 border-l border-slate-200">${comparison.oldWorld.title}</div>
                        <div class="col-span-5 p-4 font-semibold text-white ${agileMode ? 'bg-green-600' : 'bg-red-600'} border-l border-slate-200">${rightColData.title}</div>
                    </div>

                    ${comparison.categories.slice(0, -1).map((category, index) => `
                        <div class="grid grid-cols-12 text-sm border-b border-slate-200 last:border-b-0">
                            <div class="col-span-2 p-4 bg-slate-50 font-semibold text-slate-700 flex items-center">
                                <i data-lucide="${comparison.icons?.[index] || 'circle'}" class="h-5 w-5 mr-3 text-shyftplan-purple flex-shrink-0"></i>
                                <span>${category}</span>
                            </div>
                            <div class="col-span-5 p-4 space-y-2 border-l border-slate-200">${renderPoints(comparison.oldWorld.points[index])}</div>
                            <div class="col-span-5 p-4 space-y-2 border-l border-slate-200">${renderPoints(rightColData.points[index])}</div>
                        </div>
                    `).join('')}

                    <div class="grid grid-cols-12 text-sm">
                        <div class="col-span-2 p-4 bg-slate-50 font-semibold text-slate-700 flex items-center">
                            <i data-lucide="${comparison.icons?.[comparison.icons.length - 1] || 'circle'}" class="h-5 w-5 mr-3 text-shyftplan-purple flex-shrink-0"></i>
                            <span>${comparison.categories.slice(-1)[0]}</span>
                        </div>
                        <div class="col-span-5 p-4 border-l border-slate-200">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">${comparison.oldWorld.result.text}</span>
                        </div>
                        <div class="col-span-5 p-4 border-l border-slate-200">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${rightColData.result.style === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">${rightColData.result.text}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // *** HIER ENDET DER ZU ERSETZENDE TEIL ***

        lucide.createIcons();
    }
    render();

    const handleToggleClick = (e) => {
        if (e.target.closest('#saas-mode-toggle')) {
            e.stopPropagation();
            data.content.agileMode = !data.content.agileMode;
            render();
        }
    };

    // Remove any existing listener to prevent duplicates, then add it.
    container.removeEventListener('click', handleToggleClick);
    container.addEventListener('click', handleToggleClick);
};

export const renderCustomHtml = (container, data, options = {}) => {
    let processedHtml = replacePlaceholders(data.content.html, data);

    // Make placeholders editable in superadmin mode (but not in presentation mode)
    if (options.mode === 'superadmin' && !options.presentationMode) {
        const pageId = container.id || data.id;
        
        // Find the presentation config to get the correct data path
        const presentationConfig = window.pageData.presentations.content.presentations.find(p => 
            p.templateData && p.templateData[pageId]
        );

        if (presentationConfig) {
            const dataPath = `pageData.presentations.content.presentations.0.templateData.${pageId}`;
            processedHtml = processedHtml.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                const content = data.hasOwnProperty(key) ? data[key] : '';
                return `<span contenteditable="true" class="inline-block p-1 -m-1 rounded-md focus:outline-none focus:bg-violet-100 focus:ring-2 focus:ring-shyftplan-purple" data-path="${dataPath}.${key}" data-page-id="${pageId}">${content}</span>`;
            });
        }
    }

    if (options.presentationMode) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(processedHtml, 'text/html');
        container.innerHTML = processedHtml;
    } else {
        container.innerHTML = createHeader(data.title, data.subtitle, { ...options, pageId: container.id, dataPath: `pageData.${container.id}` }) + processedHtml;
    }

    if (options.mode === 'superadmin') {
        addSuperadminEventListeners(container);
    }

    // If a script is provided in the data, execute it in the context of the container.
    // This is necessary because scripts inserted via innerHTML are not executed.
    if (data.script) {
        try {
            // Use a Function constructor to scope the script to the container and pass data
            new Function('container', 'data', data.script)(container, data);
        } catch (e) {
            console.error(`Error executing custom script for page '${container.id}':`, e);
        }
    }
    lucide.createIcons(); // Ensure icons are rendered for custom HTML content
};
console.log('lucide.createIcons() called in renderers.js');