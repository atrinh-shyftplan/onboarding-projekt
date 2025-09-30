export const milestonePages = {
    'erfolgs-setup': {
        title: 'Setup für den Erfolg',
        subtitle: 'Gemeinsam legen wir die entscheidenden Grundsteine für ein erfolgreiches shyftplan-Projekt.',
        actionTitle: 'Meilenstein: Setup für den Erfolg',
        layout: 'accordionChecklist',
        content: [
            {
                title: '1. Strategische Ausrichtung & gemeinsames Verständnis',
                icon: 'compass',
                description: 'Ein klares, gemeinsames Bild von Zielen und Vorgehen ist der Schlüssel, um das Projekt von Anfang an auf die richtige Bahn zu lenken.',
                items: [
                    { text: 'Change Management: Die Mitarbeiter von Anfang an für den Wandel gewinnen', checked: false, link: '#sonderseite-change-management' }
                ]
            },
            {
                title: '2. Technische Klarheit & reibungslose Integration',
                icon: 'smartphone',
                description: 'Wir schaffen die technischen und organisatorischen Rahmenbedingungen, damit shyftplan nahtlos in Ihre Systemlandschaft passt.',
                items: [
                    { text: 'HCM-Schnittstelle: Reibungslosen Datenfluss durch geklärte Anbindung sicherstellen', checked: false, link: '#intro-hcm-schnittstelle' },
                    { text: 'Betriebsvereinbarung: Rechtssicherheit für den PoC-Betrieb gemeinsam herstellen', checked: false, link: '#sonderseite-betriebsvereinbarung' },
                    { text: 'IT-Security & Datenschutz: Einhaltung aller Standards und Richtlinien garantieren', checked: false, link: '#sonderseite-it-security' }
                ]
            },
            {
                title: '3. Projektsteuerung & zentrale Werkzeuge',
                icon: 'clipboard-list',
                description: 'Mit den richtigen Werkzeugen und Plänen behalten Sie jederzeit die Kontrolle und Übersicht über den Projektfortschritt.',
                items: [
                    { text: 'Mehrwerte & Enabler: Konkreten Nutzen und entscheidende Erfolgsfaktoren definieren', checked: false, link: '#mehrwerte-enabler' },                    
                    { text: 'Trainingsplanung: Anwender-Schulungen frühzeitig terminieren und so einen reibungslosen Start garantieren', checked: false, link: '#trainingsplanung' },
                    { text: 'Kickoff-Workshop: Einen motivierenden Projektstart gemeinsam gestalten', checked: false, link: '#kickoff' }
                ]
            }
        ]
    },
    kickoff: {
        title: 'Meilenstein: Projekt-Kickoff',
        subtitle: 'Der offizielle Startschuss für unser gemeinsames Projekt.',
        actionTitle: 'Meilenstein: Projekt-Kickoff',
        layout: 'itemList',
        content: {
            title: 'Agenda Kickoff-Meeting',
            items: [
                { title: 'Vorstellungsrunde & Projektziele', status: 'geplant', duration: '15 Min' },
                { title: 'shyftplan Demo & Vision', status: 'geplant', duration: '45 Min' },
                { title: 'Definition des Projekt-Scopes', status: 'geplant', duration: '30 Min' },
                { title: 'Nächste Schritte & Meilensteine', status: 'geplant', duration: '15 Min' }
            ]
        }
    },
    'go-live': {
        title: 'Meilenstein: Go-Live',
        subtitle: 'Die letzten Schritte vor dem offiziellen Start mit shyftplan.',
        actionTitle: 'Meilenstein: Go-Live',
        layout: 'itemList',
        content: {
            title: 'Go-Live Checkliste',
            items: [
                { title: 'Finale Datenmigration abgeschlossen', status: 'erledigt' },
                { title: 'Alle Key-User geschult', status: 'erledigt' },
                { title: 'Interne Kommunikation versendet', status: 'in Bearbeitung' },
                { title: 'Support-Prozess definiert', status: 'offen' }
            ]
        }
    },
    'poc-evaluation': {
         title: 'Meilenstein: PoC-Evaluation',
         actionTitle: 'Meilenstein: PoC-Evaluation',
        subtitle: 'Bewertung des Proof-of-Concept und Planung der nächsten Schritte.',
        layout: 'dashboard',
        content: {
            stats: [
                { value: '9.2/10', label: 'User Zufriedenheit', icon: 'smile' },
                { value: '85%', label: 'Test-Cases erfolgreich', icon: 'check-circle' },
                { value: '4', label: 'Offene Feedbackpunkte', icon: 'message-square' }
            ],
            tasks: [
                { text: 'Feedback-Workshop mit Key-Usern', due: 'In 2 Tagen', status: 'pending' },
                { text: 'Management-Präsentation erstellen', due: 'In 5 Tagen', status: 'pending' },
            ]
        }
    },
    'rollout-abschluss-standort1': {
        title: 'Meilenstein: Rollout-Abschluss 1. Standort',
        actionTitle: 'Meilenstein: Rollout-Abschluss 1. Standort',
        subtitle: 'Bewertung des abgeschlossenen Rollouts für den ersten Standort und Übergabe in den Regelbetrieb.',
        layout: 'dashboard',
        content: {
            stats: [
                { value: '1 / 12', label: 'Standorte live', icon: 'building' },
                { value: '95%', label: 'User-Aktivierung', icon: 'users' },
                { value: '8', label: 'Offene Support-Tickets', icon: 'life-buoy' }
            ],
            tasks: [
                { text: 'Abschlusspräsentation für das Management', due: 'In 1 Woche', status: 'pending' },
                { text: 'Projektübergabe an Customer Success', due: 'In 2 Wochen', status: 'pending' },
            ]
        }
    },
    'abschluss-gesamt-rollout': {
        title: 'Meilenstein: Abschluss Gesamt-Rollout',
        actionTitle: 'Meilenstein: Abschluss Gesamt-Rollout',
        subtitle: 'Finale Bewertung des gesamten Rollout-Projekts und offizielle Übergabe.',
        layout: 'dashboard',
        content: {
            stats: [
                { value: '12 / 12', label: 'Standorte live', icon: 'building' },
                { value: '98%', label: 'Gesamte User-Aktivierung', icon: 'users' },
                { value: '100%', label: 'Projektziele erreicht', icon: 'target' }
            ],
            tasks: [
                { text: 'Finale Projektabnahme durch den Kunden', due: 'Erledigt', status: 'done' },
                { text: 'Lessons Learned Workshop', due: 'In 1 Woche', status: 'pending' },
            ]
        }
    },
};