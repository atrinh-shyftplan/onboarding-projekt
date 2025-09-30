import { toolPages } from './tools.js';

export const presentationPages = {
    presentations: {
        title: 'Präsentationen',
        subtitle: 'Starten Sie vordefinierte Präsentationen für Ihre Workshops.',
        layout: 'presentationsPage',
        content: {
            presentations: [
                {
                    title: 'PoC-Workshop',
                    description: 'Für den initialen Proof-of-Concept Workshop mit den wichtigsten Stakeholdern.',
                    icon: 'shield-check',
                    action: 'start-presentation',
                    presentationId: 'poc-workshop',
                    templateData: {
                        'poc-workshop-title': {
                            title: 'Willkommen zum PoC-Workshop',
                            actionTitle: 'Willkommen zum PoC-Workshop',
                            subtitle: '',
                            layout: 'customHtml',
                            TtT_location: 'Hanau',
                            customerName: 'Bruker EAS',
                            workshopDate: '25. September 2025',
                            content: {
                                html: `
                                <main class="w-full h-full flex flex-col justify-center items-center text-center p-8">
                                    <div class="w-full max-w-5xl bg-white p-12 rounded-2xl shadow-lg border border-slate-200/80">
                                        <div class="mb-10 flex justify-center items-center gap-x-8">
                                            <img src="assets/images/customer-logo.png" alt="Customer Logo" class="h-12"/>
                                            <i data-lucide="x" class="h-8 w-8 text-slate-300"></i>
                                            <img src="assets/images/shyftplan-logo.svg" alt="shyftplan Logo" class="h-12"/>
                                        </div>
                                        <h1 class="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight leading-tight">
                                            {{title}}
                                        </h1>
                                        <p class="mt-6 text-2xl text-slate-600">
                                            bei <span class="font-semibold text-slate-700">{{customerName}}</span>
                                        </p>
                                        <div class="mt-12 border-t border-slate-200 pt-6">
                                            <p class="text-lg text-slate-500">{{workshopDate}}</p>
                                        </div>
                                    </div>
                                </main>
                                `,
                                skipPresentationHeader: true
                            }
                        },
                        'poc-workshop-agenda': {
                            title: 'Agenda: PoC-Workshop',
                            actionTitle: 'Agenda: PoC-Workshop',
                            subtitle: 'Ein strukturierter Überblick über die heutigen Themen und Ziele.',
                            layout: 'agenda',
                            content: {
                                mainTitle: 'Agenda',
                                days: [
                                    {
                                        title: 'PoC-Workshop',
                                        items: [
                                            { time: '08:00 – 09:00', title: '<strong>Werksführung</strong>', details: '', isTransition: false, startSlideIndex: 0 },
                                            { time: '09:00 – 09:30', title: '<strong>Intro:</strong> Projektplan & aktueller Stand', details: '', isTransition: true, startSlideIndex: 2 },
                                            { time: '09:30 – 10:30', title: '<strong>Setup: Basiskonfiguration</strong>', details: 'Zugriff, Org.-Struktur sowie Rollen & Rechte', isTransition: true, startSlideIndex: 6 },
                                            { time: '10:30 – 12:00', title: '<strong>Setup: Kern-Anwendungsfälle – Teil 1</strong>', details: '(u.a. Mitarbeiterpflege, Informationspflege, Schichtplanung)', isTransition: false, startSlideIndex: 7 },
                                            { time: '12:00 – 13:00', title: 'Mittagspause', details: '', isTransition: false, startSlideIndex: 7 },
                                            { time: '13:00 – 14:30', title: '<strong>Setup: Kern-Anwendungsfälle – Teil 2</strong>', details: '(u.a. Auswertungen, Vertretungen, Abwesenheitsmanagement)', isTransition: true, startSlideIndex: 8 },
                                            { time: '14:30 – 15:00', title: '<strong>Zusammenfassung, Ausblick & Feedback</strong>', details: '', isTransition: true, startSlideIndex: 9 }
                                        ]
                                    }
                                ]
                            }
                        },
                        'schichtplanungsprozess-slide': {
                            title: 'Wie kann der Schichtplanungsprozess in shyftplan für Bruker EAS ablaufen?',
                            actionTitle: 'Wie kann der Schichtplanungsprozess in shyftplan für Bruker EAS ablaufen?',
                            subtitle: 'Von der Bedarfsplanung bis zur laufenden Anpassung.',
                            layout: 'customHtml',
                            content: {
                                html: `
                                <style>
                                    .schichtplanung-prozess-table {
                                        background-color: #ffffff; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07);
                                        overflow: hidden; border: 1px solid #e5e7eb;
                                    }
                                    .schichtplanung-prozess-table thead th { color: #374151; background-color: #f9fafb; font-weight: 600; }
                                    .schichtplanung-prozess-table tbody tr:not(:last-child) { border-bottom: 1px solid #e5e7eb; }
                                    .schichtplanung-prozess-table .category-cell { color: #111827; font-weight: 600; background-color: #f9fafb; border-right: 1px solid #e5e7eb; vertical-align: middle; position: relative; }
                                    .schichtplanung-prozess-table .icon { width: 1.5rem; height: 1.5rem; margin-right: 0.75rem; flex-shrink: 0; color: #77a0f6; }
                                    .schichtplanung-prozess-table .tag { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
                                    .schichtplanung-prozess-table .tag-purple { background-color: #f5f3ff; color: #7c3aed; }
                                    .schichtplanung-prozess-table .tag-blue { background-color: #eff6ff; color: #3b82f6; }
                                    .schichtplanung-prozess-table .tag-pink { background-color: #fdf2f8; color: #db2777; }
                                </style>
                                <div class="w-full overflow-x-auto">
                                    <div class="schichtplanung-prozess-table min-w-[1000px]">
                                        <table class="w-full text-left">
                                            <thead class="text-xs tracking-wider"><tr><th class="p-4 w-1/6">Kategorie</th><th class="p-4 w-2/6">Prozessschritt</th><th class="p-4 w-1/12">Wann</th><th class="p-4 w-1/12">Wer</th><th class="p-4 w-1/3">Bemerkungen</th></tr></thead>
                                            <tbody class="text-sm">
                                                <tr><td class="p-4 category-cell" rowspan="3"><div class="absolute left-2 top-1/2 -translate-y-1/2 h-[calc(100%-1rem)] w-1 bg-[#9865f6] rounded-full"></div><span class="ml-2">Schichtplananlage inkl. Bedarfsplanung</span></td><td class="p-4"><div class="flex items-center"><i data-lucide="calendar" class="icon"></i><span>Schichtplananlage (Monatsplan) inkl. einheitlicher Namenskonvention pro Werk</span></div></td><td class="p-4"><span class="tag tag-purple">Vormonat</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">Volle Bearbeitungsrechte notwendig</td></tr>
                                                <tr><td class="p-4"><div class="flex items-center"><i data-lucide="file-check-2" class="icon"></i><span>Rotationen und Standardbedarfe anwenden</span></div></td><td class="p-4"><span class="tag tag-purple">Vorwoche</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">Anlage über Schichtrotationen oder Schichtplanvorlagen</td></tr>
                                                <tr><td class="p-4"><div class="flex items-center"><i data-lucide="pencil" class="icon"></i><span>Wenn erforderlich: Manuelle Korrekturen von Mitarbeiterbedarfen bei einzelnen Schichten (Bedarfe, Schicht-Etiketten oder Notizen)</span></div></td><td class="p-4"><span class="tag tag-purple">Vorwoche</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">&nbsp;</td></tr>
                                                <tr><td class="p-4 category-cell" rowspan="2"><div class="absolute left-2 top-1/2 -translate-y-1/2 h-[calc(100%-1rem)] w-1 bg-[#77a0f6] rounded-full"></div><span class="ml-2">Mitarbeiter-zuweisung</span></td><td class="p-4"><div class="flex items-center"><i data-lucide="users" class="icon"></i><span>Automatisierte Mitarbeiter-Zuweisung durchführen</span></div></td><td class="p-4"><span class="tag tag-purple">Vorwoche</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]"><ul class="list-disc list-inside space-y-1"><li>Fokus auf Stammarbeitsplätze</li><li>Möglich für alle Arbeitsbereiche oder gesondert pro Arbeitsbereich</li></ul></td></tr>
                                                <tr><td class="p-4"><div class="flex items-center"><i data-lucide="sliders-horizontal" class="icon"></i><span>Manuelle Feinplanung durchführen</span></div></td><td class="p-4"><span class="tag tag-purple">Vorwoche</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]"><ul class="list-disc list-inside space-y-1"><li>Auffüllen der Twistmaschinen</li><li>Filter z.B. nach Arbeitsbereichen, Schicht-Etiketten (für bspw. Priorisierung), Mitarbeiter-Merkmale</li></ul></td></tr>
                                                <tr><td class="p-4 category-cell" rowspan="3"><div class="absolute left-2 top-1/2 -translate-y-1/2 h-[calc(100%-1rem)] w-1 bg-[#ff8eb7] rounded-full"></div><span class="ml-2">Freigabe und Veröffentlichung</span></td><td class="p-4"><div class="flex items-center"><i data-lucide="plus-circle" class="icon"></i><span>Optional: Mehrarbeitsschichten/Sonderschichten anlegen und mit Mitarbeitern besetzen</span></div></td><td class="p-4"><span class="tag tag-purple">Vorwoche</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">Auswertungstags verwenden</td></tr>
                                                <tr><td class="p-4"><div class="flex items-center"><i data-lucide="clipboard-list" class="icon"></i><span>Optional: Mehrarbeiten (Wochenende) freigeben</span></div></td><td class="p-4"><span class="tag tag-purple">Vorwoche</span></td><td class="p-4"><span class="tag tag-pink">Betriebsrat</span></td><td class="p-4 text-[#6b7281]">Link zu Schichtplan an Betriebsrat zur Freigabe</td></tr>
                                                <tr><td class="p-4"><div class="flex items-center"><i data-lucide="check-circle-2" class="icon"></i><span>Schichtplan veröffentlichen</span></div></td><td class="p-4"><span class="tag tag-purple">Montag d. Arbeitswoche</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">Automatische Benachrichtigung der Mitarbeiter</td></tr>
                                                <tr><td class="p-4 category-cell" rowspan="2"><div class="absolute left-2 top-1/2 -translate-y-1/2 h-[calc(100%-1rem)] w-1 bg-[#f59e0b] rounded-full"></div><span class="ml-2">Laufende Anpassungen</span></td><td class="p-4"><div class="flex items-center"><i data-lucide="edit" class="icon"></i><span>Anpassung am Schichtplan vornehmen</span></div></td><td class="p-4"><span class="tag tag-purple">Täglich</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">Automatische Benachrichtigung betroffener Mitarbeiter</td></tr>
                                                <tr><td class="p-4"><div class="flex items-center"><i data-lucide="repeat" class="icon"></i><span>Änderungen von der Disposition einarbeiten</span></div></td><td class="p-4"><span class="tag tag-purple">Täglich</span></td><td class="p-4"><span class="tag tag-blue">Planer</span></td><td class="p-4 text-[#6b7281]">Manuelle Nachpflege von Schichten</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>`
                            }
                        },
                        'poc-workshop-feedback': {
                            title: 'Gedanken zum heutigen PoC-Workshop',
                            actionTitle: 'Feedback & Gedanken',
                            subtitle: 'Ein gemeinsamer Rückblick auf den heutigen Tag.',
                            layout: 'customHtml',
                            content: {
                                html: `
                                <style>
                                    .feedback-slide-body {
                                        background-color: #f8f9fa;
                                        color: #2d313d;
                                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                                        margin: 0;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        min-height: 100%;
                                        text-align: center;
                                        padding: 2rem;
                                    }
                                    .feedback-slide-body .main-container { width: 100%; max-width: 1200px; padding-top: 2rem; }
                                    .feedback-slide-body .feedback-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem; justify-content: center; }
                                    .feedback-slide-body .feedback-card {
                                        background: #ffffff;
                                        border: 1px solid #e9ecef;
                                        border-radius: 20px;
                                        padding: 2rem;
                                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                                        cursor: pointer;
                                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
                                    }
                                    .feedback-slide-body .feedback-card:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(45, 49, 61, 0.1); }
                                    .feedback-slide-body .feedback-card .icon { height: 60px; width: 60px; margin: 0 auto 1rem auto; color: #25486f; }
                                    .feedback-slide-body .feedback-card h2 { font-size: 1.5rem; font-weight: 600; color: #9865f6; margin: 0; }
                                </style>
                                <div class="feedback-slide-body">
                                    <main class="main-container">
                                        <div class="feedback-grid">
                                            <section class="feedback-card">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 2H5C3.346 2 2 3.346 2 5V19C2 20.654 3.346 22 5 22H19C20.654 22 22 20.654 22 19V5C22 3.346 20.654 2 19 2ZM17.293 8.293L11 14.586L6.707 10.293L8.121 8.879L11 11.758L15.879 6.879L17.293 8.293Z"/></svg>
                                                <h2>Bestes Ergebnis</h2>
                                            </section>
                                            <section class="feedback-card">
                                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17ZM12 6C9.79086 6 8 7.79086 8 10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 12 11 11.75 11 14H13C13 12.25 16 12.5 16 10C16 7.79086 14.2091 6 12 6Z"/></svg>
                                                <h2>Überraschendes Ereignis</h2>
                                            </section>
                                            <section class="feedback-card">
                                                 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
                                                <h2>Verbesserungsvorschläge</h2>
                                            </section>
                                        </div>
                                    </main>
                                </div>
                                `
                            }
                        }
                    }
                },
                { title: 'Projekt-Kickoff-Workshop', description: 'Für den offiziellen Startschuss des Projekts mit dem gesamten Projektteam.', icon: 'rocket', action: 'start-presentation', presentationId: 'projekt-kickoff-workshop', templateData: {} },
                { title: 'Train-the-Trainer-Workshop', description: 'Schulungsmaterialien für Ihre internen Multiplikatoren und Key-User.', icon: 'graduation-cap', action: 'start-presentation', presentationId: 'train-the-trainer-workshop', templateData: {} }
            ]
        }
    },
};

export const presentationDefinitions = {
    'poc-workshop': {
        title: 'PoC-Workshop Präsentation',
        // New slide order with agenda slides as transitions
        slides: [
            'poc-workshop-title', // 0
            'vorstellungsrunde', // 1
            'poc-workshop-einordnung', // NEW
            'erfolgreiche-einfuehrung', // 3
            'sonderseite-saas-verstaendnis', // 4
            'projekt-timeline', // 5
            // Kapitel: Setup: Basiskonfiguration
            'zugriff-auf-shyftplan', // 6
            'rollen-berechtigungen', // 7
            // Kapitel: Setup: Kern-Anwendungsfälle – Teil 1
            'schichtplanungsprozess', // 8
            'train-the-trainer-schulung', // 9
            'poc-workshop-feedback' // 10
        ],
        templateData: {}
    },
    'projekt-kickoff-workshop': {
        title: 'Projekt-Kickoff-Workshop',
        slides: [
            'kickoff', 'mehrwerte-enabler', 'erfolgs-setup'
        ]
    },
    'train-the-trainer-workshop': {
        title: 'Train-the-Trainer-Workshop',
        slides: [
            'trainingsplanung',
            'sonderseite-change-management',
            'shyftplan-academy',
            'tool-management',
            'ressourcen'
        ]
    }
};