export const dashboardPages = {
    'projektleitung-tool-management': {
        title: 'Übersicht: Projektleitung',
        subtitle: 'Zentrale Anlaufstelle für Projektleiter, Sponsoren und Tool-Admins.',
        layout: 'dashboard',
        content: {
            stats: [
                { value: '65%', label: 'Gesamtfortschritt', icon: 'trending-up' },
                { value: '3 / 5', label: 'Voraussetzungen erfüllt', icon: 'check-square' },
                { value: '2', label: 'Aktive Risiken', icon: 'alert-triangle' }
            ],
            tasks: [
                { text: 'Nächstes Jour Fixe vorbereiten', due: 'Morgen', status: 'pending' },
                { text: 'Budgetfreigabe Phase 2', due: 'In 3 Tagen', status: 'pending' },
                { text: 'Stakeholder-Update versenden', due: 'Gestern', status: 'done' }
            ]
        }
    },
    'it-integration': {
        title: 'Übersicht: IT/Integration',
        subtitle: 'Alle technischen Aspekte des Projekts an einem Ort.',
        layout: 'resourceGrid',
        content: [
            { title: 'API Dokumentation', description: 'Technische Doku für die Anbindung.', icon: 'book-text', link: '#' },
            { title: 'System-Architektur', description: 'Schaubild der verbundenen Systeme.', icon: 'network', link: '#' },
            { title: 'SSO Konfiguration', description: 'Anleitung für Single Sign-On.', icon: 'key-round', link: '#' },
            { title: 'Staging Umgebung', description: 'Zugangsdaten zum Testsystem.', icon: 'server', link: '#' }
        ]
    },
    rollout: {
        title: 'Übersicht: Rollout',
        subtitle: 'Schulungsinhalte und Kommunikationspläne für Planer und Mitarbeiter.',
        layout: 'itemList',
        content: {
            title: 'E-Learning Module & Kommunikation',
            items: [
                { title: 'Grundlagen der Dienstplanung', status: 'abgeschlossen', progress: 100 },
                { title: 'shyftplan für Admins', status: 'in Bearbeitung', progress: 45 },
                { title: 'Mitarbeiter-App Einführung', status: 'offen', progress: 0 },
                { title: 'Interne Kickoff-Kommunikation', status: 'Entwurf', progress: null }
            ]
        }
    },
};