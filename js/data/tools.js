export const toolPages = {
    'mehrwerte-enabler': {
        title: 'Werkzeug: Mehrwerte & Enabler',
        actionTitle: 'Mehrwerte & Enabler',
        subtitle: 'Wie shyftplan Ihr Unternehmen voranbringt und was den Erfolg sicherstellt.',
        layout: 'resourceGrid',
        content: [
            { title: 'Effizienzsteigerung', description: 'Reduzieren Sie den Planungsaufwand um bis zu 80%.', icon: 'zap', link: '#' },
            { title: 'Mitarbeiterzufriedenheit', description: 'Transparente Planung und mobile Zugriffe für Ihr Team.', icon: 'smile', link: '#' },
            { title: 'Rechtssicherheit', description: 'Automatische Prüfung von Arbeitszeitgesetzen.', icon: 'shield-check', link: '#' },
            { title: 'Datenbasierte Entscheidungen', description: 'Fundierte Analysen durch aussagekräftige Reports.', icon: 'bar-chart-2', link: '#' }
        ]
    },
    'mitarbeiter-app': {
        title: 'Mitarbeiter werden über shyftplan in Echtzeit eingebunden',
        actionTitle: 'Mitarbeiter-App: Echtzeit-Einbindung',
        subtitle: 'Ein Überblick über die Kernfunktionen der Mitarbeiter-App.',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                /* This component's styles are scoped here */
                .custom-html-page-mitarbeiter-app {
                    background-color: #f8fafc; /* slate-50 */
                    padding: 0; /* Use parent padding */
                    margin: -2rem; /* Counteract parent padding */
                    border-radius: 0.75rem;
                }
                
                /* Animation for a subtle fade-in effect on load */
                @keyframes customFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .custom-html-page-mitarbeiter-app .fade-in {
                    animation: customFadeIn 0.8s ease-out forwards;
                }
                
                /* Assigning different animation delays for a staggered effect */
                .custom-html-page_mitarbeiter-app .fade-in-delay-1 { animation-delay: 0.2s; }
                .custom-html-page_mitarbeiter-app .fade-in-delay-2 { animation-delay: 0.4s; }
                .custom-html-page_mitarbeiter-app .fade-in-delay-3 { animation-delay: 0.6s; }
                .custom-html-page_mitarbeiter-app .fade-in-delay-4 { animation-delay: 0.8s; }

                /* Styling for the vertical lines connecting list items, inspired by the slide */
                .custom-html-page-mitarbeiter-app .feature-list > li {
                    position: relative;
                    padding-left: 30px; 
                    padding-bottom: 2rem;
                }
                
                /* The decorative line and circle */
                .custom-html-page-mitarbeiter-app .feature-list > li::before {
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 5px;
                    bottom: -5px;
                    width: 2px;
                }

                .custom-html-page-mitarbeiter-app .feature-list > li::after {
                    content: '';
                    position: absolute;
                    left: 0px;
                    top: 5px;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid;
                }

                /* Removing the line for the last child in each list */
                .custom-html-page_mitarbeiter-app .feature-list > li:last-child::before {
                   display: none;
                }

                /* Assigning colors from the palette to the lines and circles */
                .custom-html-page_mitarbeiter-app .feature-group-1 .feature-list > li::before,
                .custom-html-page_mitarbeiter_app .feature-group-1 .feature-list > li::after { background-color: #77a0f6; border-color: #77a0f6; }
                .custom-html-page_mitarbeiter_app .feature-group-2 .feature-list > li::before,
                .custom-html-page_mitarbeiter_app .feature-group-2 .feature-list > li::after { background-color: #ff8eb7; border-color: #ff8eb7; }
                .custom-html-page_mitarbeiter_app .feature-group-3 .feature-list > li::before,
                .custom-html-page_mitarbeiter_app .feature-group-3 .feature-list > li::after { background-color: #9865f6; border-color: #9865f6; }
                
                /* Phone Mockup Styling */
                .custom-html-page-mitarbeiter-app .phone-mockup {
                    position: relative; width: 100%; max-width: 280px; height: 560px;
                    background-color: #000; border-radius: 40px; border: 10px solid #1a1a1a;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 2px #333;
                    transform: perspective(1000px); transition: transform 0.3s ease;
                }
                .custom-html-page-mitarbeiter-app .phone-mockup:hover { transform: perspective(1000px) translateY(-5px) rotateX(2deg); }
                .custom-html-page-mitarbeiter-app .phone-screen { width: 100%; height: 100%; background-color: #25486f; border-radius: 30px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
                .custom-html-page-mitarbeiter-app .phone-notch { position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 120px; height: 25px; background-color: #1a1a1a; border-radius: 0 0 15px 15px; z-index: 10; }
            </style>
            <div class="custom-html-page-mitarbeiter-app">
                <div class="container mx-auto">
                    
                    <main class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div class="flex justify-center items-center gap-4 fade-in fade-in-delay-1">
                            <div class="phone-mockup" style="transform: rotate(-8deg) translateX(20px);"><div class="phone-notch"></div><div class="phone-screen"><img src="https://placehold.co/260x540/2d313d/aec7f8?text=Shyftplan+UI" alt="Shyftplan App Ansicht 1" class="object-cover w-full h-full"></div></div>
                            <div class="phone-mockup" style="transform: rotate(8deg) translateX(-20px) scale(1.05); z-index: 5;"><div class="phone-notch"></div><div class="phone-screen"><img src="https://placehold.co/260x540/25486f/aec7f8?text=App+Features" alt="Shyftplan App Ansicht 2" class="object-cover w-full h-full"></div></div>
                        </div>
                        <div class="space-y-12">
                            <div class="feature-group-1 fade-in fade-in-delay-2">
                                <h3 class="text-2xl font-bold text-slate-800 mb-6">KI-unterstützte Schichtplanung</h3>
                                <ul class="feature-list">
                                    <li><h4 class="font-bold text-slate-700 mb-1">Automatisierte Schichtplanung</h4><p class="text-slate-500">Entlang von Präferenzen und (gesetzlichen) Regelungen.</p></li>
                                    <li><h4 class="font-bold text-slate-700 mb-1">Schichtkalender</h4><p class="text-slate-500">Arbeitsplatz/Maschine, Zusatzinformationen (Tags & Notizen), Schicht-Kollegen & Arbeitszeiten.</p></li>
                                    <li><h4 class="font-bold text-slate-700 mb-1">Verfügbarkeiten</h4><p class="text-slate-500">Berücksichtigung von Mitarbeiterwünschen möglich.</p></li>
                                </ul>
                            </div>
                            <div class="feature-group-2 fade-in fade-in-delay-3">
                                <h3 class="text-2xl font-bold text-slate-800 mb-6">Kommunikation & Mitarbeitereinbindung</h3>
                                <ul class="feature-list">
                                    <li><h4 class="font-bold text-slate-700 mb-1">Automatische Benachrichtigungen</h4><p class="text-slate-500">Änderungen in ihrem Schichtplan werden Mitarbeitern direkt mitgeteilt.</p></li>
                                    <li><h4 class="font-bold text-slate-700 mb-1">Bewerbung auf offene Schichten</h4><p class="text-slate-500">Push-Benachrichtigungen zugeschnitten auf relevante Mitarbeiter (Qualifikationen).</p></li>
                                    <li><h4 class="font-bold text-slate-700 mb-1">Dashboard & Chat</h4><p class="text-slate-500">Live-Feed und Kommunikation in der Fläche (zugeschnitten nach Mitarbeiter, Abteilungen oder Arbeitsplätzen).</p></li>
                                </ul>
                            </div>
                            <div class="feature-group-3 fade-in fade-in-delay-4">
                                <h3 class="text-2xl font-bold text-slate-800 mb-6">Zeiten & Abwesenheiten</h3>
                                <ul class="feature-list">
                                    <li><h4 class="font-bold text-slate-700 mb-1">Zeitkorrekturen & Mehrarbeitsanträge</h4><p class="text-slate-500">Einfache Beantragung und Genehmigung direkt in der App.</p></li>
                                    <li><h4 class="font-bold text-slate-700 mb-1">Abwesenheiten</h4><p class="text-slate-500">Anträge (inkl. Warnmeldungen), Urlaubskontingente und Zeitkontenabbildung (inkl. Prognose).</p></li>
                                    <li><h4 class="font-bold text-slate-700 mb-1">Jahresurlaubsplanung</h4><p class="text-slate-500">Planung in Abhängigkeit von Qualifikationen und Bedarfen.</p></li>
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            `
        }
    },
    'projekt-timeline': {
        title: 'Projekt-Timeline',
        actionTitle: 'Projekt-Timeline: Der Ablauf im Überblick',
        subtitle: 'Ein klarer Überblick über den Projektablauf.',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                .custom-html-page-projekt-timeline .timeline-container {
                    background: #ffffff;
                    border: 1px solid #e2e8f0; /* slate-200 */
                    border-radius: 0.75rem; /* Standard-Radius */
                    overflow-x: auto; /* Horizontal scrollbar */
                    padding-bottom: 4rem; /* Add space for milestones */
                }
                .custom-html-page-projekt-timeline .timeline-grid { display: grid; grid-template-columns: 0.8fr repeat(4, 1fr); position: relative; }
                .custom-html-page-projekt-timeline .timeline-row { display: contents; }
                .custom-html-page-projekt-timeline .timeline-cell { padding: 0.75rem 2rem; transition: background-color 0.3s ease-in-out; position: relative; }
                .custom-html-page-projekt-timeline .activity-cell ul { list-style-position: outside; margin-left: 1rem; }
                .custom-html-page-projekt-timeline .activity-cell li { margin-bottom: 0.5rem; }
                .custom-html-page-projekt-timeline .activity-cell li:last-child { margin-bottom: 0; }
                .custom-html-page-projekt-timeline .timeline-row:hover .timeline-cell { background-color: rgba(248, 248, 250, 0.6); }
                .custom-html-page-projekt-timeline .timeline-row:not(:last-child) .timeline-cell { border-bottom: 1px solid rgba(0, 0, 0, 0.05); }
                .custom-html-page-projekt-timeline .timeline-cell:not(:last-child):not(.no-border) { border-right: 1px solid rgba(0, 0, 0, 0.05); }
                .custom-html-page-projekt-timeline .role-icon { transition: all 0.3s ease-in-out; }
                .custom-html-page-projekt-timeline .timeline-row:hover .role-icon { transform: scale(1.15); }
                .custom-html-page-projekt-timeline .role-cell { position: relative; padding-left: 4.5rem !important; }
                .custom-html-page-projekt-timeline .role-cell::before {
                    content: ''; position: absolute; left: 2.5rem; top: 50%;
                    transform: translateY(-50%); width: 5px; height: 40px; border-radius: 3px;
                }
                .custom-html-page-projekt-timeline .role-projektleitung::before { background-color: #25486f; }
                .custom-html-page-projekt-timeline .role-hr::before { background-color: #f59e0b; }
                .custom-html-page-projekt-timeline .role-it::before { background-color: #77a0f6; }
                .custom-html-page-projekt-timeline .role-kernplaner::before { background-color: #14b8a6; }
                .custom-html-page-projekt-timeline .role-trainer::before { background-color: #9865f6; }
                .custom-html-page-projekt-timeline .chevron-container { display: flex; width: 100%; }
                .custom-html-page-projekt-timeline .phase-block .chevron {
                    position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
                    flex: 1; padding: 1rem 1rem; color: white; text-align: center;
                    clip-path: polygon(0% 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 0% 100%, 22px 50%);
                    margin-left: -23px; box-shadow: 0 0 0 2px white;
                }
                .custom-html-page-projekt-timeline .chevron:first-child {
                    clip-path: polygon(0% 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 0% 100%);
                }
                .custom-html-page-projekt-timeline .chevron-0,
                .custom-html-page-projekt-timeline .chevron-1,
                .custom-html-page-projekt-timeline .chevron-2,
                .custom-html-page-projekt-timeline .chevron-3 { background-color: #25486f; }
                .custom-html-page-projekt-timeline .phases-wrapper { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
                .custom-html-page-projekt-timeline .phase-block { display: flex; flex-direction: column; }
                .custom-html-page-projekt-timeline .timeframe {
                    text-align: center; font-size: 0.75rem; color: #64748b; /* slate-500 */
                    padding-top: 0.5rem; margin-top: 0.5rem;
                    border-top: 2px solid #e2e8f0; /* slate-200 */
                }
                .custom-html-page-projekt-timeline .milestone { 
                    position: absolute; top: 100%; margin-top: 1rem;
                    display: flex; flex-direction: column; align-items: flex-start; gap: 0.25rem;
                    font-size: 0.75rem; font-weight: 600; color: #475569; /* slate-600 */
                }
                .custom-html-page-projekt-timeline .milestone .milestone-icon {
                    width: 1.25rem; /* 20px */
                    height: 1.25rem; /* 20px */
                    background-color: #6f42c1; /* shyftplan-purple */
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }
            </style>
            <style>
                /* Make iframe modal wider */
                #timeline-iframe-modal .modal-container { width: 90vw; height: 90vh; }
                /* The body of the modal needs to fill the container, minus header height */
                #timeline-iframe-modal .modal-body { height: calc(100% - 60px); }
            </style>
            <main class="custom-html-page-projekt-timeline">
                <div class="timeline-container">
                    <div class="timeline-grid">
                        <!-- Header Row -->
                        <div class="timeline-cell no-border"></div>
                        <div class="timeline-cell" style="grid-column: 2 / -1; padding: 0.75rem 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.05);">
                            <div class="phases-wrapper">
                                <div class="phase-block"><div class="chevron chevron-0" style="margin-left: 0;"><h2 class="text-xl font-bold">Vorbereitung</h2></div><div class="timeframe">September / Oktober</div></div>
                                <div class="phase-block"><div class="chevron chevron-1"><h2 class="text-xl font-bold">Kick-off</h2></div><div class="timeframe">bis November</div></div>
                                <div class="phase-block"><div class="chevron chevron-2"><h2 class="text-xl font-bold">Fachliche & Technische Umsetzung</h2></div><div class="timeframe">bis Februar</div></div>
                                <div class="phase-block"><div class="chevron chevron-3"><h2 class="text-xl font-bold">Einführung & Go-Live</h2></div><div class="timeframe">ab März</div></div>
                            </div>
                        </div>

                        <!-- Projektleitung Row -->
                        <div class="timeline-row">
                            <div class="timeline-cell role-cell flex items-center role-projektleitung">
                                <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="role-icon h-8 w-8" style="color: #25486f;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <h3 class="font-bold text-gray-900 text-lg">Projektleiter</h3>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc">
                                    <li class="bg-violet-50 border border-violet-200 rounded-lg -ml-1 p-1">
                                        <button data-action="open-iframe-modal" data-src="org-chart.html" data-title="Teamaufstellung (Org-Chart)" class="inline-flex items-center gap-2 text-left font-medium text-shyftplan-purple transition-colors group w-full" title="Org-Chart anzeigen">
                                            <span class="flex-grow">Teamaufstellung (Org-Chart)</span><i data-lucide="eye" class="h-5 w-5 text-shyftplan-purple/70 group-hover:text-shyftplan-purple transition-colors"></i>
                                        </button>
                                    </li>
                                    <li>BR-Freigabe (incl. Handy-App)</li>
                                </ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc">
                                    <li class="bg-violet-50 border border-violet-200 rounded-lg -ml-1 p-1">
                                        <button data-action="open-iframe-modal" data-src="projektplan.html" data-title="Projektplanung" class="inline-flex items-center gap-2 text-left font-medium text-shyftplan-purple transition-colors group w-full" title="Projektplan anzeigen">
                                            <span class="flex-grow">Projektplanung</span><i data-lucide="eye" class="h-5 w-5 text-shyftplan-purple/70 group-hover:text-shyftplan-purple transition-colors"></i>
                                        </button>
                                    </li>
                                    <li>Kundenerfahrung aus vergangen Projekten</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Projektsteuerung und Qualitätssicherung</li><li>Kommunikationsplan (inkl der priorisieren Instrumente vom Kick-off Workshop)</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Freigabe aller Verantwortlichen einholen</li><li>Qualitätssicherung der Planer- und Mitarbeiterschulungen</li></ul>
                            </div>
                        </div>

                        <!-- HR-Verantwortlicher Row -->
                        <div class="timeline-row">
                            <div class="timeline-cell role-cell flex items-center role-hr">
                                <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="role-icon h-8 w-8" style="color: #f59e0b;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-1 3.732V18a2 2 0 002 2z"></path></svg>
                                </div>
                                <h3 class="font-bold text-gray-900 text-lg">HR-Verantwortlicher</h3>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc">
                                    <li>Vorbereitung & Bereitstellung Echtdaten (Abwesenheitstypen, Arbeitszeitmodelle, etc.)</li>
                                </ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Erwartete Mehrwerte</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Fachliche Abnahme</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Verfügbarkeit bei Rückfragen</li><li>Begleitung Mitarbeiterkommunikation</li></ul>
                            </div>
                        </div>

                        <!-- IT Row -->
                        <div class="timeline-row">
                            <div class="timeline-cell role-cell flex items-center role-it">
                                <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="role-icon h-8 w-8" style="color: #77a0f6;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                                </div>
                                <h3 class="font-bold text-gray-900 text-lg">IT-Verantwortlicher</h3>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Vorbereitung Systemzugänge</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc">
                                    <li class="bg-violet-50 border border-violet-200 rounded-lg -ml-4 -mr-4 p-1 pl-4">
                                        <button data-action="open-iframe-modal" data-src="technical-survey.html" data-title="Erfassung der Datenfelder & Technische Umfrage" class="inline-flex items-center gap-2 text-left font-medium text-shyftplan-purple transition-colors group w-full" title="Technische Umfrage anzeigen">
                                            <span class="flex-grow">Erfassung der Datenfelder</span><i data-lucide="eye" class="h-5 w-5 text-shyftplan-purple/70 group-hover:text-shyftplan-purple transition-colors"></i>
                                        </button>
                                    </li>
                                    <li>Bereitstellung System-Zugänge</li>
                                </ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc -mr-4">
                                    <li>Installation Schnittstellenprogramm</li>
                                    <li class="bg-violet-50 border border-violet-200 rounded-lg -ml-4 p-1 pl-4">
                                        <button data-action="open-iframe-modal" data-src="integration-intro.html" data-title="Einführung in die HCM-Schnittstelle" class="inline-flex items-center gap-2 text-left font-medium text-shyftplan-purple transition-colors group w-full" title="Informationen zur Schnittstelle anzeigen">
                                            <span class="flex-grow">Technische Schnittstellenabnahme</span><i data-lucide="eye" class="h-5 w-5 text-shyftplan-purple/70 group-hover:text-shyftplan-purple transition-colors"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Verfügbarkeit bei Rückfragen</li></ul>
                            </div>
                        </div>

                        <!-- Fachlich Verantwortlicher Row -->
                        <div class="timeline-row">
                            <div class="timeline-cell role-cell flex items-center role-kernplaner">
                                <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="role-icon h-8 w-8" style="color: #14b8a6;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                </div>
                                <h3 class="font-bold text-gray-900 text-lg">Fachlich Verantwortlicher</h3>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Angeleitete grundlegende Account-Konfiguration</li><li>Vereinbarte Mehrwerte</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc">
                                    <li>Anwendungsfälle in shyftplan</li>
                                    <li>Fachliche Abnahme</li>
                                    <li class="bg-violet-50 border border-violet-200 rounded-lg -ml-4 -mr-4 p-1 pl-4">
                                        <button data-action="open-iframe-modal" data-src="use-cases.html" data-title="Fachliche Schnittstellenabnahme (Anwendungsfälle)" class="inline-flex items-center gap-2 text-left font-medium text-shyftplan-purple transition-colors group w-full" title="Anwendungsfälle anzeigen">
                                            <span class="flex-grow">Fachliche Schnittstellenabnahme</span><i data-lucide="eye" class="h-5 w-5 text-shyftplan-purple/70 group-hover:text-shyftplan-purple transition-colors"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Unterstützung anderer Planer</li><li>Multiplikator für shyftplan</li></ul>
                            </div>
                        </div>

                        <!-- Trainer Row -->
                        <div class="timeline-row">
                            <div class="timeline-cell role-cell flex items-center role-trainer">
                                <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="role-icon h-8 w-8" style="color: #9865f6;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                </div>
                                <h3 class="font-bold text-gray-900 text-lg">Trainer</h3>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Anforderungsprofil für Trainer</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Bestätigung des Anforderungsprofils an Trainer</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Teilnahme Train-the-Trainer (TtT)</li><li>Vorbereitung Planerschulung (zeitlich und inhaltlich)</li></ul>
                            </div>
                            <div class="timeline-cell activity-cell">
                                <ul class="list-disc"><li>Durchführung der Planerschulungen</li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            `
        }
    },
    datenupload: {
        title: 'Werkzeug: Datenupload',
        actionTitle: 'Datenupload & Validierung',
        subtitle: 'Sicherer Upload Ihrer Mitarbeiter- und Stammdaten.',
        layout: 'dashboard',
         content: {
            stats: [
                { value: '3 / 4', label: 'Dateien hochgeladen', icon: 'file-check' },
                { value: '98%', label: 'Validierungs-Erfolg', icon: 'shield-check' },
                { value: '1', label: 'Fehlerhafte Einträge', icon: 'file-warning' }
            ],
            tasks: [
                { text: 'Mitarbeiterliste.csv', status: 'done' },
                { text: 'Abwesenheiten.csv', status: 'done' },
                { text: 'Standorte.xlsx', status: 'pending' },
                 { text: 'Qualifikationen.csv', status: 'done' },
            ]
        }
    },
     'intro-hcm-schnittstelle': {
        title: 'Werkzeug: Intro zur HCM-Schnittstelle',
        actionTitle: 'Einführung in die HCM-Schnittstelle',
        subtitle: 'Alle Informationen zur Anbindung Ihres HR-Systems.',
        layout: 'resourceGrid',
        content: [
            { title: 'Technische Doku', description: 'Spezifikationen für den Datenaustausch.', icon: 'file-code-2', link: '#' },
            { title: 'Standard-Mappings', description: 'Vorlagen für gängige HR-Systeme.', icon: 'arrow-left-right', link: '#' },
            { title: 'Test-Cases', description: 'Szenarien zur Prüfung der Schnittstelle.', icon: 'vial', link: '#' },
            { title: 'Ansprechpartner', description: 'Kontakt zu unseren Technik-Experten.', icon: 'phone', link: '#' }
        ]
    },
     'schnittstellen-konfiguration': {
         title: 'Werkzeug: Schnittstellen-Konfiguration',
         actionTitle: 'Konfiguration der Schnittstelle',
         subtitle: 'Passen Sie die Daten-Mappings und Übertragungsregeln an Ihre Bedürfnisse an.',
         layout: 'resourceGrid',
         content: [
             { title: 'Mitarbeiter-Daten', description: 'Mappings für Personalstammdaten anpassen.', icon: 'user', link: '#' },
             { title: 'Abwesenheiten', description: 'Regeln für die Synchronisation von Urlaub und Krankheit.', icon: 'calendar-off', link: '#' },
             { title: 'Zeitbuchungen', description: 'Konfiguration der Übertragung von Zeitstempeln.', icon: 'timer', link: '#' },
             { title: 'Übertragungs-Logs', description: 'Einsehen der letzten Synchronisations-Protokolle.', icon: 'file-text', link: '#' }
         ]
     },
     'schnittstellen-testkatalog': {
         title: 'Werkzeug: Schnittstellen-Testkatalog',
         actionTitle: 'Testkatalog für die Schnittstelle',
         subtitle: 'Strukturierte Überprüfung aller Endpunkte und Datenflüsse.',
         layout: 'itemList',
         content: {
             title: 'Testfälle für HCM-Schnittstelle',
             items: [
                 { title: 'Mitarbeiter anlegen', status: 'erfolgreich' },
                 { title: 'Mitarbeiter aktualisieren', status: 'erfolgreich' },
                 { title: 'Abwesenheiten synchronisieren', status: 'fehlgeschlagen' },
                 { title: 'Stammdaten-Abgleich', status: 'offen' }
             ]
         }
     },
     'trainingsplanung': {
        title: 'Werkzeug: Trainingsplanung',
        actionTitle: 'Planung der Anwenderschulungen',
        subtitle: 'Planen und verwalten Sie alle Schulungstermine für Ihre Teams.',
        layout: 'itemList',
         content: {
            title: 'Anstehende Schulungen',
            items: [
                { title: 'Key-User Workshop (Online)', status: 'Geplant: 25.09.2025' },
                { title: 'Admin-Schulung (Vor Ort)', status: 'Geplant: 02.10.2025' },
                { title: 'Offene Fragerunde für Planer', status: 'Terminfindung' },
            ]
         }
     },
    'tool-management': {
        title: 'Werkzeug: Tool-Management',
        actionTitle: 'Tool-Management & Konfiguration',
        subtitle: 'Konfigurieren Sie globale Einstellungen und verwalten Sie Benutzerberechtigungen.',
        layout: 'resourceGrid',
        content: [
            { title: 'Benutzerrollen & Rechte', description: 'Definieren Sie Zugriffslevel für Admins und Planer.', icon: 'users', link: '#' },
            { title: 'Benachrichtigungen', description: 'Stellen Sie ein, wer wann informiert wird.', icon: 'bell', link: '#' },
            { title: 'Globale Einstellungen', description: 'Passen Sie das Tool an Ihre Unternehmensregeln an.', icon: 'settings', link: '#' },
            { title: 'Mandanten-Struktur', description: 'Verwalten Sie verschiedene Standorte oder Bereiche.', icon: 'building-2', link: '#' }
        ]
    },
    'shyftplan-academy': {
        title: 'Werkzeug: shyftplan-Academy',
        actionTitle: 'Weiterbildung mit der shyftplan-Academy',
        subtitle: 'Vertiefen Sie Ihr Wissen mit unseren Online-Kursen und Zertifizierungen.',
        layout: 'resourceGrid',
        content: [
            { title: 'Grundkurs Dienstplanung', description: 'Alle Basics für den perfekten Start.', icon: 'play-circle', link: '#' },
            { title: 'Kurs für Fortgeschrittene', description: 'Tipps & Tricks für Power-User.', icon: 'star', link: '#' },
            { title: 'Zertifizierung zum Admin', description: 'Werden Sie zum shyftplan-Experten.', icon: 'graduation-cap', link: '#' },
            { title: 'Alle Kurse anzeigen', description: 'Durchstöbern Sie unseren Kurskatalog.', icon: 'search', link: '#' }
        ]
    },
    ressourcen: {
        title: 'Werkzeug: Weitere Ressourcen',
        actionTitle: 'Weitere nützliche Ressourcen',
        subtitle: 'Nützliche Dokumente, Anleitungen und FAQs für Ihr Projekt.',
        layout: 'resourceGrid',
        content: [
            { title: 'FAQ', description: 'Häufig gestellte Fragen', icon: 'help-circle', link: '#' },
            { title: 'Best Practices', description: 'Tipps für die optimale Nutzung', icon: 'star', link: '#' },
            { title: 'Handbuch für Planer', description: 'Detaillierte Anleitung', icon: 'book-open', link: '#' },
            { title: 'Vorlage: Interne Kommunikation', description: 'Textbausteine für den Rollout', icon: 'megaphone', link: '#' }
        ]
    }
    ,
    'train-the-trainer-schulung': {
        title: 'Train-the-Trainer Schulung',
        actionTitle: 'Konzept: Train-the-Trainer Schulung',
        subtitle: 'Wie das Wissen über die Schichtplanung bei Bruker EAS sichergestellt wird.',
        layout: 'customHtml',
        TtT_location: 'Hanau',
        content: {
            html: `
            <main class="max-w-4xl mx-auto">
                <section>
                    <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Die Grundlage für einen erfolgreichen Rollout</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div class="mx-auto bg-violet-100 h-12 w-12 rounded-full flex items-center justify-center mb-4"><i data-lucide="calendar" class="h-6 w-6 shyftplan-purple"></i></div>
                            <h3 class="text-lg font-bold">Wann?</h3>
                            <p class="text-sm text-slate-600 mt-2">Im Januar (2 Tage)</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div class="mx-auto bg-violet-100 h-12 w-12 rounded-full flex items-center justify-center mb-4"><i data-lucide="map-pin" class="h-6 w-6 shyftplan-purple"></i></div>
                            <h3 class="text-lg font-bold">Wo?</h3>
                            <p class="text-sm text-slate-600 mt-2">In {{TtT_location}}</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div class="mx-auto bg-violet-100 h-12 w-12 rounded-full flex items-center justify-center mb-4"><i data-lucide="users" class="h-6 w-6 shyftplan-purple"></i></div>
                            <h3 class="text-lg font-bold">Wer?</h3>
                            <p class="text-sm text-slate-600 mt-2">Das Trainerteam</p>
                        </div>
                    </div>
                </section>

                <section class="mt-12">
                    <div class="space-y-4">
                        <div class="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-5 hover:shadow-lg transition-shadow">
                            <div class="flex-shrink-0 bg-sky-100 text-sky-600 rounded-full p-3 mt-1">
                                <i data-lucide="user-check" class="h-6 w-6"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg text-slate-800">Persönliche Betreuung</h4>
                                <p class="text-slate-600">Die Schulung wird von einem persönlichen shyftplan Account Manager geleitet, um eine direkte und effektive Wissensvermittlung zu gewährleisten.</p>
                            </div>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-5 hover:shadow-lg transition-shadow">
                             <div class="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-3 mt-1">
                                <i data-lucide="puzzle" class="h-6 w-6"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg text-slate-800">Kombiniertes Wissen</h4>
                                <p class="text-slate-600">Die Trainer werden darauf vorbereitet, spezifisches Prozesswissen von Bruker mit der Funktionsweise von shyftplan zu verbinden.</p>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-5 hover:shadow-lg transition-shadow">
                             <div class="flex-shrink-0 bg-green-100 text-green-600 rounded-full p-3 mt-1">
                                <i data-lucide="target" class="h-6 w-6"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-lg text-slate-800">Voller Fokus</h4>
                                <p class="text-slate-600">Für den maximalen Lernerfolg muss die Schulung <span class="font-bold">ohne Ablenkung</span> vom Tagesgeschäft stattfinden, um einen vollen Fokus zu gewährleisten.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>`
        }
    }
    ,
    'vorstellungsrunde': {
        title: 'Kurze Vorstellungsrunde',
        actionTitle: 'Kurze Vorstellungsrunde',
        subtitle: 'Lernen wir uns kennen.',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .fade-in { animation: fadeIn 0.5s ease-out forwards; opacity: 0; }
                .card-1 { animation-delay: 0.1s; } .card-2 { animation-delay: 0.2s; } .card-3 { animation-delay: 0.3s; }
            </style> 
                <main class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200/50 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 fade-in card-1">
                        <div class="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center" style="background-color: #e0e7ff;"><i data-lucide="user-circle" class="w-12 h-12 text-indigo-700"></i></div>
                        <h2 class="text-2xl font-bold text-slate-800">Name</h2>
                        <p class="text-gray-500 mt-2">Wie lautet dein Name?</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200/50 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 fade-in card-2">
                        <div class="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center" style="background-color: #ede9fe;"><i data-lucide="briefcase" class="w-12 h-12 text-violet-700"></i></div>
                        <h2 class="text-2xl font-bold text-slate-800">Rolle</h2>
                        <p class="text-gray-500 mt-2">Deine Rolle im Unternehmen & Projekt.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200/50 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 fade-in card-3">
                        <div class="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center" style="background-color: #fce7f3;"><i data-lucide="target" class="w-12 h-12 text-pink-700"></i></div>
                        <h2 class="text-2xl font-bold text-slate-800">Erwartungen</h2>
                        <p class="text-gray-500 mt-2">Was erwartest du vom Workshop?</p>
                    </div>
                </main>
            `
        }
    },
    'erfolgreiche-einfuehrung': {
        title: 'Erfolgreiche Einführung von shyftplan',
        actionTitle: 'Erfolgreiche Einführung von shyftplan',
        subtitle: 'Die drei zentralen Säulen für ein erfolgreiches Projekt.',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                .custom-html-page-erfolgreiche-einfuehrung { background-color: #f8f9fa; padding: 2rem; margin: -2rem; border-radius: 0.75rem; }
                .custom-html-page-erfolgreiche-einfuehrung .card-bg {
                    background-color: #ffffff; /* Ensure white background */
                    border: 1px solid #e5e7eb; /* Light gray border */
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07); /* Subtle shadow */
                    border-radius: 1rem; /* Ensure consistent rounded corners */
                    padding: 2rem; /* Add consistent padding */
                    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effects */
                }

                .custom-html-page-erfolgreiche-einfuehrung .card-bg:hover {
                    transform: scale(1.05); /* Slightly enlarge on hover */
                    box-shadow: 0 6px 8px -2px rgb(0 0 0 / 0.1), 0 4px 6px -3px rgb(0 0 0 / 0.1); /* Enhance shadow on hover */
                }
            </style>
            <div class="custom-html-page-erfolgreiche-einfuehrung">
                <div class="container mx-auto">

                    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="card-bg rounded-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300 card-bg">
                            <div class="flex-grow">
                                <div class="flex items-center justify-between mb-6"><h2 class="text-xl font-bold" style="color: #2d313d;">Setup: Prozesse</h2><svg class="w-10 h-10" style="color: #77a0f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg></div>
                                <div class="mb-6"><h3 class="font-semibold text-lg mb-2 text-gray-900">Kritischer Erfolgsfaktor</h3><p class="text-gray-600">Das erste Mal richtig - Angemessenes Zeitinvestment für eine solide Grundlage.</p></div>
                                <div><h3 class="font-semibold text-lg mb-2 text-gray-900">Ergebnis</h3><p class="text-gray-600">"Richtige" Nutzung der branchenerprobten Software von shyftplan.</p></div>
                            </div>
                        </div>
                        <div class="card-bg rounded-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300 card-bg">
                            <div class="flex-grow">
                                <div class="flex items-center justify-between mb-6"><h2 class="text-xl font-bold" style="color: #2d313d;">Integration: Systeme</h2><svg class="w-10 h-10" style="color: #aec7f8;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div>
                                <div class="mb-6"><h3 class="font-semibold text-lg mb-2 text-gray-900">Kritischer Erfolgsfaktor</h3><p class="text-gray-600">Vollständige und nahtlose System-Integration.</p></div>
                                <div><h3 class="font-semibold text-lg mb-2 text-gray-900">Ergebnis</h3><p class="text-gray-600">Beste User Experience und maximale Effizienz im Arbeitsalltag.</p></div>
                            </div>
                        </div>
                        <div class="card-bg rounded-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300 card-bg">
                            <div class="flex-grow">
                                <div class="flex items-center justify-between mb-6"><h2 class="text-xl font-bold" style="color: #2d313d;">Roll-out: Menschen</h2><i data-lucide="users" class="w-10 h-10" style="color: #ff8eb7;"></i></div>
                                <div class="mb-6"><h3 class="font-semibold text-lg mb-2 text-gray-900">Kritischer Erfolgsfaktor</h3><p class="text-gray-600">Proaktives Change-Management, inklusive Train-the-Trainer-Konzepten.</p></div>
                                <div><h3 class="font-semibold text-lg mb-2 text-gray-900">Ergebnis</h3><p class="text-gray-600">Inspirierte, vollständig befähigte und motivierte Nutzer.</p></div>
                            </div>
                        </div>
                    </main>
                    <footer class="text-center mt-16 border-t border-gray-200 pt-8">
                        <p class="text-sm font-semibold tracking-wider uppercase" style="color: #9865f6;">Steuerung</p>
                        <p class="text-gray-500 mt-2 text-lg">Bruker-Projektteam</p>
                    </footer>
                </div></div>
            `
        }
    },
    'zugriff-auf-shyftplan': {
        title: 'Zugriff auf shyftplan',
        actionTitle: 'Zugriff auf shyftplan',
        subtitle: 'Wie und womit greifen die verschiedenen Nutzergruppen auf das System zu?',
        layout: 'customHtml',
        content: {
            html: `
            <main class="max-w-5xl mx-auto">
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-800">Führungskräfte</h3>
                         <p class="text-sm text-slate-500 mb-4">Verfügbar für Web-App & Mobile-App</p>
                        <div class="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div><strong class="flex items-center"><i data-lucide="briefcase" class="h-4 w-4 mr-2 text-slate-400"></i>Endgeräte:</strong><span class="ml-2">Geschäftlich</span></div>
                            <div><strong class="flex items-center"><i data-lucide="at-sign" class="h-4 w-4 mr-2 text-slate-400"></i>E-Mail:</strong><span class="ml-2">Bruker EAS</span></div>
                            <div><strong class="flex items-center"><i data-lucide="key-round" class="h-4 w-4 mr-2 text-slate-400"></i>Login:</strong><span class="ml-2">SSO (Single Sign-On)</span></div>
                        </div>
                    </div>
                     <div class="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-800">Mitarbeiter</h3>
                        <p class="text-sm text-slate-500 mb-4">Verfügbar für Web-App, Mobile-App & Terminal</p>
                        <div class="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div><strong class="flex items-center"><i data-lucide="home" class="h-4 w-4 mr-2 text-slate-400"></i>Endgeräte:</strong><span class="ml-2">BYOD (Privat)</span></div>
                            <div><strong class="flex items-center"><i data-lucide="at-sign" class="h-4 w-4 mr-2 text-slate-400"></i>E-Mail:</strong><span class="ml-2">Bruker EAS</span></div>
                            <div><strong class="flex items-center"><i data-lucide="key-round" class="h-4 w-4 mr-2 text-slate-400"></i>Login:</strong><span class="ml-2">SSO für Vorarbeiter</span></div>
                        </div>
                    </div>
                     <div class="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-800">Externe Mitarbeiter</h3>
                        <p class="text-sm text-slate-500 mb-4">Verfügbar für Web-App & Mobile-App</p>
                        <div class="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div><strong class="flex items-center"><i data-lucide="home" class="h-4 w-4 mr-2 text-slate-400"></i>Endgeräte:</strong><span class="ml-2">BYOD (Privat)</span></div>
                            <div><strong class="flex items-center"><i data-lucide="at-sign" class="h-4 w-4 mr-2 text-slate-400"></i>E-Mail:</strong><span class="ml-2">Privat</span></div>
                            <div><strong class="flex items-center"><i data-lucide="lock" class="h-4 w-4 mr-2 text-slate-400"></i>Login:</strong><span class="ml-2">E-Mail & Passwort</span></div>
                        </div>
                    </div>
                </div>
            </main>
            `
        }
    },
    'rollen-berechtigungen': {
        title: 'Rollen & Berechtigungen',
        actionTitle: 'Rollen & Berechtigungen in shyftplan',
        subtitle: 'Wer darf was und wie? Ein Überblick über die Rollen und Rechte in shyftplan.',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                .matrix-table tbody tr td { padding-top: 1rem; padding-bottom: 1rem; }
                .matrix-table tbody tr td ul { list-style-position: inside; }
                .matrix-table .main-role { padding-left: 1.5rem; }
            </style>
            <main>
                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-800 mb-4">Die drei Hauptrollen</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div class="mx-auto bg-violet-100 h-12 w-12 rounded-full flex items-center justify-center mb-4"><i data-lucide="sliders-horizontal" class="h-6 w-6 shyftplan-purple"></i></div>
                                <h3 class="text-lg font-bold">Super-Admin</h3>
                                <p class="text-sm text-slate-600 mt-2">Konfiguriert das System, verwaltet Standorte und hat vollen Zugriff auf alle Daten und Einstellungen.</p>
                            </div>
                            <div class="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div class="mx-auto bg-violet-100 h-12 w-12 rounded-full flex items-center justify-center mb-4"><i data-lucide="user-cog" class="h-6 w-6 shyftplan-purple"></i></div>
                                <h3 class="text-lg font-bold">Manager</h3>
                                <p class="text-sm text-slate-600 mt-2">Plant und verwaltet Schichten für zugewiesene Bereiche und Mitarbeiter. Genehmigt Abwesenheiten.</p>
                            </div>
                            <div class="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div class="mx-auto bg-violet-100 h-12 w-12 rounded-full flex items-center justify-center mb-4"><i data-lucide="user" class="h-6 w-6 shyftplan-purple"></i></div>
                                <h3 class="text-lg font-bold">Mitarbeiter</h3>
                                <p class="text-sm text-slate-600 mt-2">Sieht Pläne, bewirbt sich auf Schichten und beantragt Abwesenheiten. Zugriff nur auf persönliche Daten.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                         <h2 class="text-2xl font-bold text-slate-800 mb-4">Rechte im Detail</h2>
                         <div class="bg-white rounded-xl border border-slate-200 overflow-x-auto">
                            <table class="matrix-table w-full text-sm">
                                <thead>
                                    <tr>
                                        <th rowspan="2" class="w-1/6 border-b border-slate-200 bg-slate-50 pl-6">Rolle in shyftplan</th>
                                        <th rowspan="2" class="w-1/6 border-b border-slate-200 bg-slate-50">Rolle Bruker EAS</th>
                                        <th rowspan="2" class="w-1/3 border-b border-slate-200 bg-slate-50">Tätigkeiten</th>
                                        <th colspan="5" class="border-b border-purple-200 bg-purple-100 text-purple-800 font-semibold">Rechte shyftplan</th>
                                    </tr>
                                    <tr class="bg-purple-50 text-purple-700 border-b border-slate-300">
                                        <th class="font-semibold">Firmenprofil</th>
                                        <th class="font-semibold">Mitarbeiter</th>
                                        <th class="font-semibold">Abwesenheit</th>
                                        <th class="font-semibold">Schichtpläne</th>
                                        <th class="font-semibold">Auswertungen</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-200">
                                    <!-- Super-Admin Rows -->
                                    <tr>
                                        <td class="main-role" rowspan="2">Super-Admin</td>
                                        <td>Admin (fachlich)</td>
                                        <td><ul class="space-y-1"><li>Anpassung von Firmeneinstellungen</li></ul></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                    </tr>
                                    <tr class="border-b-2 border-slate-400">
                                        <td>Admin (IT)</td>
                                        <td><ul class="space-y-1"><li>Überwachung der Schnittstellen und Verwaltung der API-User</li></ul></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                    </tr>
                                    <!-- Manager Rows -->
                                    <tr>
                                        <td class="main-role" rowspan="4">Manager</td>
                                        <td>Gruppenleiter / Vorarbeiter</td>
                                        <td><ul class="space-y-1"><li>Vorplanung, initiale Mitarbeiterzuweisung</li><li>Schichtplanveröffentlichung</li><li>Auswertung der Arbeitszeiten</li></ul></td>
                                        <td><div class="flex justify-center"><i data-lucide="minus" class="h-4 w-4 text-slate-300"></i></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                    </tr>
                                     <tr>
                                        <td>Produktionsleiter</td>
                                        <td><ul class="space-y-1"><li>Schichtplanungs-Ansicht / Kontrolle</li></ul></td>
                                        <td><div class="flex justify-center"><i data-lucide="minus" class="h-4 w-4 text-slate-300"></i></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                    </tr>
                                     <tr>
                                        <td>HR</td>
                                        <td><ul class="space-y-1"><li>Prüfung von Rückfragen zu Abwesenheiten</li><li>Optional: Prüfung von Arbeitszeiten/Auswertungen</li></ul></td>
                                        <td><div class="flex justify-center"><i data-lucide="minus" class="h-4 w-4 text-slate-300"></i></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                    </tr>
                                    <tr class="border-b-2 border-slate-400">
                                        <td>Betriebsrat</td>
                                        <td><ul class="space-y-1"><li>Prüfung Mehrarbeitsanträge</li></ul></td>
                                        <td><div class="flex justify-center"><i data-lucide="minus" class="h-4 w-4 text-slate-300"></i></div></td>
                                        <td><div class="flex justify-center"><i data-lucide="minus" class="h-4 w-4 text-slate-300"></i></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                    </tr>
                                    <!-- Mitarbeiter Row -->
                                    <tr>
                                        <td class="main-role">Mitarbeiter</td>
                                        <td>Feste / Externe Mitarbeiter</td>
                                        <td><ul class="space-y-1"><li>Sieht eigenen Schichtplan und Kollegen</li><li>Schichttausch / Schichtbewerbungen</li><li>Angabe von Verfügbarkeiten</li></ul></td>
                                        <td><div class="flex justify-center"><i data-lucide="minus" class="h-4 w-4 text-slate-300"></i></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"><i data-lucide="pencil" class="h-4 w-4 text-amber-500"></i></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                        <td><div class="flex gap-x-2 w-10 mx-auto"><span class="w-4 h-4"><i data-lucide="eye" class="h-4 w-4 text-green-500"></i></span><span class="w-4 h-4"></span></div></td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>
                    </div>
                </div>
            </main>
            `
        }
    },
    'zugriff-auf-shyftplan': {
        title: 'Zugriff auf shyftplan',
        actionTitle: 'Zugriff auf shyftplan',
        subtitle: 'Wie und womit greifen die verschiedenen Nutzergruppen auf das System zu?',
        layout: 'customHtml',
        content: {
            html: `
            <main class="max-w-5xl mx-auto">
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-800">Führungskräfte</h3>
                         <p class="text-sm text-slate-500 mb-4">Verfügbar für Web-App & Mobile-App</p>
                        <div class="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div><strong class="flex items-center"><i data-lucide="briefcase" class="h-4 w-4 mr-2 text-slate-400"></i>Endgeräte:</strong><span class="ml-2">Geschäftlich</span></div>
                            <div><strong class="flex items-center"><i data-lucide="at-sign" class="h-4 w-4 mr-2 text-slate-400"></i>E-Mail:</strong><span class="ml-2">Bruker EAS</span></div>
                            <div><strong class="flex items-center"><i data-lucide="key-round" class="h-4 w-4 mr-2 text-slate-400"></i>Login:</strong><span class="ml-2">SSO (Single Sign-On)</span></div>
                        </div>
                    </div>
                     <div class="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-800">Mitarbeiter</h3>
                        <p class="text-sm text-slate-500 mb-4">Verfügbar für Web-App, Mobile-App & Terminal</p>
                        <div class="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div><strong class="flex items-center"><i data-lucide="home" class="h-4 w-4 mr-2 text-slate-400"></i>Endgeräte:</strong><span class="ml-2">BYOD (Privat)</span></div>
                            <div><strong class="flex items-center"><i data-lucide="at-sign" class="h-4 w-4 mr-2 text-slate-400"></i>E-Mail:</strong><span class="ml-2">Bruker EAS</span></div>
                            <div><strong class="flex items-center"><i data-lucide="key-round" class="h-4 w-4 mr-2 text-slate-400"></i>Login:</strong><span class="ml-2">SSO für Vorarbeiter</span></div>
                        </div>
                    </div>
                     <div class="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-800">Externe Mitarbeiter</h3>
                        <p class="text-sm text-slate-500 mb-4">Verfügbar für Web-App & Mobile-App</p>
                        <div class="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div><strong class="flex items-center"><i data-lucide="home" class="h-4 w-4 mr-2 text-slate-400"></i>Endgeräte:</strong><span class="ml-2">BYOD (Privat)</span></div>
                            <div><strong class="flex items-center"><i data-lucide="at-sign" class="h-4 w-4 mr-2 text-slate-400"></i>E-Mail:</strong><span class="ml-2">Privat</span></div>
                            <div><strong class="flex items-center"><i data-lucide="lock" class="h-4 w-4 mr-2 text-slate-400"></i>Login:</strong><span class="ml-2">E-Mail & Passwort</span></div>
                        </div>
                    </div>
                </div>
            </main>
            `
        }
    },
    'schichtplanungsprozess': {
        title: 'Kernanwendungsfälle in der Praxis bei Bruker',
        actionTitle: 'Kernanwendungsfälle in der Praxis bei Bruker',
        subtitle: 'Der definierte Prozess von der Planung bis zur laufenden Anpassung.',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                .use-case-table tbody tr td { vertical-align: middle; }
                .category-cell { position: relative; }
                .category-line { position: absolute; left: 8px; top: 8px; bottom: 8px; width: 3px; border-radius: 9999px;}
                .info-list { list-style: disc; padding-left: 1.5rem; }
                .info-list li { margin-bottom: 0.5rem; }
            </style>
<div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto w-4/5 mx-auto">
                <table class="w-full text-left min-w-[800px] use-case-table">
                    <thead class="text-sm text-slate-700 bg-slate-50">
                        <tr>
                            <th class="px-6 py-3 font-semibold w-[30%]">Kategorie</th>
                            <th class="px-6 py-3 font-semibold w-[60%]">Arbeitsschritt</th>
                            <th class="px-6 py-3 font-semibold w-[10%] text-center">Video</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-slate-200">
                        
                        <tr>
                            <td rowspan="2" class="px-6 py-4 font-semibold text-slate-800 category-cell border-r border-slate-200 align-middle">
                                <div class="category-line" style="background-color: #9865f6;"></div>
                                <div class="pl-4">
                                    <span>Schichtplananlage</span><br>
                                    <span class="ml-0">inkl. Bedarfsplanung</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="calendar-plus" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Leeren Schichtplan erstellen & Maschinen Vorplanen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Leeren Schichtplan erstellen & Maschinen Vorplanen" data-video-src="assets/videos/video1.mp4" data-info="<p>Schichtrotationen anwenden: Erzeugen von leeren Schichten (z.B. Früh/Spät/Nacht)</p><p class='mt-4'><strong>Feiertagsregelungen bei Schicht-Modellen</strong></p><p class='mt-2'>18 Schicht-Modell = Schichtherstellung für Feiertage verhindern (aus dem Feiertag heraus arbeiten)</p><p class='mt-2'>15 Schicht-Modell = Schichtherstellung für Feiertage verhindern (in den Feiertag hinein arbeiten)</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="file-edit" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Zusatzinformationen im Schichtplan ergänzen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                               <button data-action="open-video-modal" data-full-title="Zusatzinformationen im Schichtplan ergänzen" data-video-src="assets/videos/video2.mp4" data-info="<p><strong>Schichtetiketten:</strong> Mit Schichtetiketten können Zusatzinformationen an die Mitarbeiter weitergegeben werden.</p><p class='mt-4'><strong>Tagesinfo:</strong> Die Tagesinfo kann verwendet werden, um allgemeine Infos zu dem Schichtplan anzeigen zu lassen.</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" class="px-6 py-4 font-semibold text-slate-800 category-cell border-r border-slate-200 align-middle">
                                 <div class="category-line" style="background-color: #77a0f6;"></div>
                                 <span class="pl-4">Mitarbeiter-zuweisung</span>
                            </td>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="user-plus" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Schichten mit Mitarbeiter besetzen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                               <button data-action="open-video-modal" data-full-title="Schichten mit Mitarbeiter besetzen" data-video-src="assets/videos/video3.mp4" data-info="<p><strong>Standard-Zuordnungspräferenzen für die Automatisierung:</strong></p><ul class='info-list'><li>Versuche Stammarbeitsplätze zuzuweisen</li><li>Ausschließlich passende Schichttypen zuweisen</li><li>Wenigste Arbeitsbereiche priorisieren</li><li>Schicht-Überschneidungen ausschließen</li><li>Abwesende Mitarbeiter nicht verplanen</li></ul>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                         <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="search" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Besetzung der Mitarbeiter auf den Schichten prüfen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Besetzung der Mitarbeiter auf den Schichten prüfen" data-video-src="assets/videos/video4.mp4" data-info="<p><strong>Für die Prüfung relevante Filteroptionen im Schichtplan</strong></p><ul class='info-list'><li>Nicht eingeplante Mitarbeiter</li><li>Offene Schichten</li><li>Mitarbeiterübersicht</li></ul><p class='mt-4'><strong>Veröffentlichung des Schichtplans</strong><br>Nach der Veröffentlichung sind alle Änderungen an dem Schichtplan in Echtzeit dargestellt und für Mitarbeiter einsehbar.</p><p class='mt-4'><strong>Weitere Anwesenheiten</strong><br>Seminare und Dienstreisen werden durch einen eigenen Arbeitsbereich abgebildet.</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3" class="px-6 py-4 font-semibold text-slate-800 category-cell border-r border-slate-200 align-middle">
                                <div class="category-line" style="background-color: #ff8eb7;"></div>
                                <span class="pl-4">Freigabe und Veröffentlichung</span>
                            </td>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="clock" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Mehrarbeiten der Mitarbeiter einplanen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Mehrarbeiten der Mitarbeiter einplanen" data-video-src="assets/videos/video5.mp4" data-info="<p>Die Genehmigung und Spezifizierung von Mehrarbeiten erfolgt über Auswertungsetiketten</p><ul class='info-list'><li>Gleitzeit mit Zuschlägen</li><li>Einarbeitung</li><li>Besprechung</li><li>Auszahlung</li><li>Persl. bedingte Vertretung</li><li>Betriebsbedingte Vetretung</li><li>Verleih</li></ul>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="gavel" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Freigabe vom Betriebsrat vorbereiten</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                               <button data-action="open-video-modal" data-full-title="Freigabe vom Betriebsrat vorbereiten" data-video-src="assets/videos/video6.mp4" data-info="<p>Geplante Mehrarbeitsschichten für (z.B. Wochenende) können über manuelle Anlage von Schichten und dem Schicht-Etikett “Mehrarbeit” angelegt und markiert werden.</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                         <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="send" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Schichtplan veröffentlichen mit Hinweis an meine Mitarbeiter versenden</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Schichtplan veröffentlichen" data-video-src="assets/videos/video7.mp4" data-info="<p><strong>Für die Prüfung relevante Filteroptionen im Schichtplan</strong></p><ul class='info-list'><li>Nicht eingeplante Mitarbeiter</li><li>Offene Schichten</li><li>Mitarbeiterübersicht</li></ul><p class='mt-4'><strong>Veröffentlichung des Schichtplans</strong><br>Nach der Veröffentlichung sind alle Änderungen an dem Schichtplan in Echtzeit dargestellt und für Mitarbeiter einsehbar.</p><p class='mt-4'><strong>Weitere Anwesenheiten</strong><br>Seminare und Dienstreisen werden durch einen eigenen Arbeitsbereich abgebildet.</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                         <tr>
                            <td rowspan="6" class="px-6 py-4 font-semibold text-slate-800 category-cell border-r border-slate-200 align-middle">
                                <div class="category-line" style="background-color: #f59e0b;"></div>
                                <span class="pl-4">Laufende Anpassungen</span>
                            </td>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="plane" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Urlaubsanträge berücksichtigen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Urlaubsanträge berücksichtigen" data-video-src="assets/videos/video8.mp4" data-info="<ul class='info-list'><li>Mitarbeiter können Urlaube oder Gleittage über den Browser und über die App einreichen</li><li>Planer können Urlaubsanträge in shyftplan annehmen bzw. ablehnen - akzeptierte Anträge werden nach SAP übertragen</li><li>Sonderabwesenheiten und Krankheiten (z.B. Arbeitsunfall, Jubiläum, Elternzeit) werden in SAP eingetragen und nach shyftplan übertragen</li><li>Individuelle Regelungen bei Krankheiten werden weiterhin von HR beachtet und hinterlegt (bspw. Prüfung von Kurzkrank)</li></ul>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="check-check" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Mehrarbeitsgenehmigungen und Zeitkorrekturen meiner Mitarbeiter berücksichtigen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Mehrarbeitsgenehmigungen und Zeitkorrekturen berücksichtigen" data-video-src="assets/videos/video9.mp4" data-info="<p>Mitarbeiter können Mehrarbeiten und Zeitkorrekturen über eine Schichtauswertung mit Auswertungs-Tags beantragen.</p><p class='mt-4'><strong>Relevante Auswertungen</strong></p><ul class='info-list'><li>Gleitzeit mit Zuschlägen</li><li>Einarbeitung</li><li>Besprechung</li><li>Auszahlung</li></ul><p class='mt-4'>Nur genehmigte Mehrarbeitsanträge werden an SAP synchronisiert.</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="eye" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Stempelungen meiner Mitarbeiter einsehen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Stempelungen meiner Mitarbeiter einsehen" data-video-src="assets/videos/video10.mp4" data-info="<ul class='info-list'><li>Eingestempelte Mitarbeiter werden Live-Statusübersicht dargestellt</li><li>In der Auswertungsübersicht werden pro Standort Schichten die Auswertung der Mitarbeiter dargestellt inkl. Filtermöglichkeiten (u.A. nach Status und Auswertungs-Merkmal)</li></ul>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="user-minus" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Kurzfristige Abwesenheiten meiner Mitarbeiter berücksichtigen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Kurzfristige Abwesenheiten berücksichtigen" data-video-src="assets/videos/video11.mp4" data-info="<p>Krankheiten werden ausschließlich in SAP von HR gepflegt.<br>Um die Zeit zwischen Eingabe in SAP und Übertrag nach shyftplan zu überbrücken, wird eine Dummy-Abwesenheit “Kurzfristige Abwesenheit” durch den Manager angelegt, um Mitarbeiter sauber auszuplanen.</p>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="user-check" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Bewerbung auf Schichten berücksichtigen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Bewerbung auf Schichten berücksichtigen" data-video-src="assets/videos/video12.mp4" data-info="<ul class='info-list'><li>Planer können Mitarbeitern Nachrichten über offene Schichten senden</li><li>Mitarbeiter kann Schichtbeitrittsanfragen über die Mobile App oder Browser stellen</li><li>Schichtbeitrittsanfragen werden im Dashboard und Schichtplan (Filter Schichtbeitrittsanfragen) angezeigt</li></ul>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-4 text-slate-600">
                                <div class="flex items-center">
                                    <i data-lucide="users" class="h-5 w-5 mr-3 text-purple-600 flex-shrink-0"></i>
                                    <span>Mitarbeiter kurzfristig umplanen</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-center">
                                <button data-action="open-video-modal" data-full-title="Mitarbeiter kurzfristig umplanen" data-video-src="assets/videos/video13.mp4" data-info="<ul class='info-list'><li>Planer können Mitarbeitern Nachrichten über offene Schichten senden</li><li>Mitarbeiter kann Schichtbeitrittsanfragen über die Mobile App oder Browser stellen</li><li>Schichtbeitrittsanfragen werden im Dashboard und Schichtplan (Filter Schichtbeitrittsanfragen) angezeigt</li></ul>" class="text-purple-600 hover:text-purple-800"><i data-lucide="play-circle" class="h-6 w-6"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            `
        }
    },
};