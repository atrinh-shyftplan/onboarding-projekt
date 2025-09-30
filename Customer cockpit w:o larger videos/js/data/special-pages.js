export const specialPages = {
    'sonderseite-betriebsvereinbarung': {
        title: 'Betriebsvereinbarung für den PoC-Betrieb',
        actionTitle: 'Rechtssicherheit: Die Betriebsvereinbarung',
        subtitle: 'Gemeinsam den Weg für einen schnellen und rechtssicheren Start ebnen.',
        layout: 'documentWorkflow',
        content: {
            additionalMaterials: {
                title: 'Weitere Materialien für Ihren Betriebsrat',
                items: [
                    { title: 'Was ist shyftplan?', description: 'Eine Kurzbeschreibung unserer Software und Vision.', icon: 'file-text', type: 'download', link: '#' , buttonText: 'PDF herunterladen' },
                    { title: 'Modernes Mitarbeiter-Management', description: 'Wie shyftplan die Mitarbeiter-Einbindung fördert.', icon: 'users', type: 'download', link: '#' , buttonText: 'PDF herunterladen' },
                    {
                        title: 'Wichtige Aspekte',
                        description: `
                            <ul class="list-disc list-inside space-y-1 text-sm text-slate-700">
                                <li><strong>Zeitlich begrenzt:</strong> Laufzeit von 6 Monaten für den PoC.</li>
                                <li><strong>Standort-Fokus:</strong> Gilt zunächst nur für den definierten PoC-Bereich.</li>
                                <li><strong>Voller Funktionsumfang:</strong> Ermöglicht die uneingeschränkte Nutzung, inklusive mobiler App und "Bring Your Own Device" (BYOD).</li>
                            </ul>
                            <p class="mt-2">Indem wir den Betriebsrat von Anfang an als Partner einbinden, ermöglichen wir eine fundierte Evaluierung. Auf Basis der praktischen Erfahrungen aus dem PoC kann der Betriebsrat eine zukunftssichere Gesamt-BV gestalten. So verbinden wir einen schnellen Projektstart mit einer nachhaltigen, partnerschaftlichen Lösung.</p>
                            <p class="mt-2">Um Sie dabei bestmöglich zu unterstützen, stellen wir Ihnen bewährte Textbausteine und eine Vorlage zur Verfügung, die als Grundlage für Ihre Abstimmung mit dem Betriebsrat dienen kann.</p>
                        `
                    }
                ]
            },
            steps: [
                { name: 'Vorlage herunterladen', description: 'Nutzen Sie unsere bewährten Bausteine als Diskussionsgrundlage.', status: 'current', type: 'download', link: '#', buttonText: 'Vorlage herunterladen' },
                { name: 'Abgestimmte BV hochladen', description: 'Laden Sie die von beiden Seiten unterzeichnete Vereinbarung hoch.', status: 'pending', type: 'upload' },
                { name: 'Bestätigung durch shyftplan', description: 'Wir prüfen die Vereinbarung und geben Ihnen zeitnah Rückmeldung.', status: 'pending', type: 'status' }
            ],
        }
    }
    ,
    'sonderseite-it-security': {
        title: 'IT-Security & Datenschutz Freigabe',
        actionTitle: 'Freigaben: IT-Security & Datenschutz',
        subtitle: 'Sicherstellen, dass shyftplan Ihre IT-Richtlinien für den PoC erfüllt.',
        layout: 'documentWorkflow',
        content: {
            introductionTitle: 'Der Mehrwert einer IT-Security-Freigabe für den PoC-Bereich',
            introduction: `
                <p>Eine fokussierte IT-Security-Freigabe für den Proof-of-Concept (PoC) ermöglicht einen schnellen und sicheren Start. Sie bestätigen damit, dass die Nutzung von shyftplan im definierten PoC-Rahmen mit Ihren internen Sicherheits- und Datenschutzrichtlinien konform ist.</p>
                <p>Dies schafft die notwendige Sicherheit für alle Beteiligten und erlaubt es, den vollen Funktionsumfang von shyftplan im PoC zu evaluieren. Die hier gewonnenen Erkenntnisse bilden eine solide Grundlage für die finale Sicherheitsbewertung im Rahmen eines unternehmensweiten Rollouts.</p>
                <div class="my-4 p-4 bg-violet-50 border-l-4 border-shyftplan-purple rounded-r-lg">
                    <h4 class="font-semibold text-slate-800 mb-2">Wichtige Freigabe-Aspekte für den PoC:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm text-slate-700">
                        <li><strong>Bring-Your-Own-Device (BYOD):</strong> Nutzung der shyftplan App auf privaten Endgeräten.</li>
                        <li><strong>Mobile App-Nutzung:</strong> Generelle Freigabe der iOS & Android App.</li>
                        <li><strong>SAP-Schnittstelle:</strong> Anbindung an Ihr SAP-System für den Datenaustausch.</li>
                        <li><strong>Kiosk-Modus:</strong> Anzeige des digitalen Schichtplans auf Monitoren im Shopfloor.</li>
                    </ul>
                </div>
                <p>Laden Sie einfach eine formlose Bestätigung Ihrer internen IT-Abteilung hoch (z.B. einen Screenshot einer E-Mail), um diesen Punkt abzuschließen.</p>
            `,
            steps: [
                { name: 'Interne Prüfung durchführen', description: 'Nutzen Sie unser Info-PDF als Grundlage für die Abstimmung mit Ihrer IT-Abteilung.', status: 'current', type: 'download', link: '#', buttonText: 'Info-PDF herunterladen' },
                { name: 'Freigabe-Bestätigung hochladen', description: 'Laden Sie einen Nachweis der Freigabe hoch (z.B. E-Mail Screenshot).', status: 'pending', type: 'upload' },
                { name: 'Bestätigung durch shyftplan', description: 'Wir nehmen die Freigabe zur Kenntnis und bestätigen den Erhalt.', status: 'pending', type: 'status' }
            ]
        }
    }
    ,
    'sonderseite-saas-verstaendnis': {
        title: 'SaaS-Verständnis: Die Vorteile einer Service-Partnerschaft',
        actionTitle: 'Grundlagen: Was bedeutet Software-as-a-Service?',
        subtitle: 'Verstehen Sie, wie das SaaS-Modell Ihr Projekt beschleunigt und zukunftssicher macht.',
        layout: 'saasComparisonPage',
        content: {
            videoId: 'SaaS vs. konventionelle Software.mp4',
            videoTitle: 'Einführung: SaaS vs. konventionelle Software',
            agileMode: false, // The switch state
            comparison: {
                categories: ['Zieldefinition', 'Anforderungsaufnahme', 'Evaluierung', 'Rollout', 'Langfristige Entwicklung', 'Ergebnis'],
                oldWorld: {
                    title: 'Konventioneller Ansatz',
                    points: [
                        ['Individuelle Lösung für die bestehenden Prozesse'],
                        ['Detailliertes Lastenheft, viele Sonderwünsche'],
                        ['Pilotprojekt testet über 6 bis 12 Monate und identifiziert Fehler/Anpassungsbedarf'],
                        ['Maßgeschneiderte Prozesse und geringe Harmonisierung'],
                        ['Updates und Wartung – Technologiesprünge nur durch Migration']
                    ],
                    result: { text: 'Erfolgreiches Projekt', style: 'neutral' }
                },
                problem: {
                    title: 'Konventioneller Ansatz auf SaaS angewendet',
                    points: [
                        ['Falsche Erwartung, dass sich die Software den Prozessen anpassen muss'],
                        ['Langwierige Diskussion über mangelnde Anwendbarkeit'],
                        ['Theoretische Fehlersuche statt Verprobung'],
                        ['Ablehnung der Nutzung und Resignation im Projekt'],
                        ['Keine SaaS Lösungen aufgrund negativer Erfahrung']
                    ],
                    result: { text: 'Scheiterndes Projekt', style: 'failure' }
                },
                solution: {
                    title: 'Agiler Ansatz',
                    points: [
                        ['Best Practices zur Harmonisierung und Modernisierung interner Prozesse'],
                        ['Anpassung durch Konfiguration innerhalb der Standards'],
                        ['Proof-of-Concept: Verprobung von SaaS auf eigene Prozesse innerhalb von 2 bis 3 Monaten'],
                        ['Aktives Change Management für Fit-to-Standard'],
                        ['Innovation by default – kontinuierliche Weiterentwicklung und Verbesserung']
                    ],
                    result: { text: 'Erfolgreiches Projekt', style: 'success' }
                }
            }
        }
    }
    ,
    'sonderseite-change-management': {
         title: 'Change Management: Mitarbeiter begeistern',
         actionTitle: 'Change Management: Mitarbeiter begeistern',
         subtitle: 'Wie Sie Ihr Team aktiv in den Veränderungsprozess einbinden und für eine hohe Akzeptanz sorgen',
         layout: 'changeManagementPage',
         content: {
             block1: {
                 title: 'Die 3 Erfolgsfaktoren für den Wandel',
                 intro: 'Die Einführung von shyftplan verändert Arbeitsweisen. Dieser Wandel geschieht nicht von allein, sondern muss aktiv gestaltet und mit Durchsetzungsvermögen vorangetrieben werden. Entscheidend für den Erfolg ist, dass alle Nutzer die Lösung verstehen und annehmen. Die folgenden drei Faktoren zeigen, wie Sie den Mehrwert für alle sicherstellen',
                 successFactors: [
                     {
                         title: '1. Klare Verantwortung & Kommunikation',
                         subtitle: '→ Sicherheit & Orientierung',
                         icon: 'shield-check',
                         summaryPoints: [
                             'Klare Ansprechpartner schaffen Vertrauen und Orientierung',
                             'Schichtplaner haben feste Anlaufstellen bei Fragen',
                             'Mitarbeiter verstehen die Gründe für die Umstellung'
                         ]
                     },
                     {
                         title: '2. Menschen befähigen & begleiten',
                         subtitle: '→ Akzeptanz & reibungsloser Start',
                         icon: 'users',
                         summaryPoints: [
                             'Praxisnahe Trainings geben Schichtplanern Sicherheit',
                             'Mitarbeiter erleben shyftplan als Arbeitserleichterung',
                             'Das Ergebnis ist hohe Akzeptanz und ein schneller ROI'
                         ]
                     },
                     {
                         title: '3. Stabilität & Nachhaltigkeit sichern',
                         subtitle: '→ Effizienz & Vertrauen',
                         icon: 'trending-up',
                         summaryPoints: [
                             'shyftplan wird zur einzigen gültigen Datenquelle (Single Source of Truth)',
                             'Schichtplaner sparen Zeit durch den Wegfall von Doppelarbeit',
                             'Einheitliche Prozesse schaffen eine verlässliche Datenbasis'
                         ]
                     }
                 ]
             },
             block2: {
                 title: 'Unterstützungsangebote von shyftplan',
                 intro: 'Damit die Einführung reibungslos gelingt, bietet shyftplan praxisnahe Unterstützung:',
                 offerings: [
                     '<strong>Kick-off-Workshop:</strong> Gemeinsamer Start mit allen relevanten Stakeholdern, um Ziele, Rollen und Vorgehen klar zu machen',
                     '<strong>Digitales Tool zur Einführung:</strong> Interaktive Materialien und Anleitungen, mit denen alle Nutzergruppen shyftplan Schritt für Schritt kennenlernen',
                     '<strong>Strukturierter Train-the-Trainer-Prozess:</strong> Aufbau interner Multiplikatoren, die ihr Wissen weitergeben und langfristig die Nutzung sichern',
                     '<strong>Vermittlung zu Change-Management-Experten:</strong> Falls zusätzliche Begleitung vor Ort benötigt wird, stellen wir Kontakte zu erfahrenen Partnern bereit'
                 ],
                 meaning: 'shyftplan lässt Sie mit der Veränderung nicht allein. Wir kombinieren digitale Hilfen, praxisnahe Trainings und – wenn nötig – externe Expertise, um sicherzustellen, dass sowohl Unternehmen als auch Mitarbeitende den größtmöglichen Nutzen aus der Einführung ziehen'
             },
             block3: {
                 title: 'Zusammenfassende Fragen zum Change Management',
                 questions: [
                     {
                         question: 'Warum ist ein klar benannter Tool-Owner entscheidend für die Einführung von shyftplan?',
                         answers: [
                             { text: 'Damit die IT-Abteilung weniger Arbeit hat', correct: false },
                             { text: 'Damit Verantwortung und Ansprechpartner eindeutig sind', correct: true },
                             { text: 'Damit sich alle Mitarbeitenden selbst organisieren', correct: false }
                         ],
                         explanation: 'Ein klarer Tool-Owner stellt sicher, dass es einen zentralen Ansprechpartner gibt und Entscheidungen getroffen werden können'
                     },
                     {
                         question: 'Was ist der wichtigste Nutzen für Schichtplaner, wenn shyftplan konsequent eingeführt wird?',
                         answers: [
                             { text: 'Sie müssen mehr Abstimmungen per Telefon machen', correct: false },
                             { text: 'Sie können ihre Schichtpläne wieder auf Papier führen', correct: false },
                             { text: 'Sie haben weniger Stress durch klare Prozesse und weniger Doppelarbeit', correct: true }
                         ],
                         explanation: 'Die Zentralisierung von Prozessen in shyftplan reduziert manuelle Arbeit und Fehlerquellen, was zu weniger Stress führt'
                     },
                     {
                         question: 'Warum ist es wichtig, Mitarbeitende beim Hochlauf aktiv zu begleiten?',
                         answers: [
                             { text: 'Damit sie das Tool sofort als Arbeitserleichterung erleben und Routine aufbauen', correct: true },
                             { text: 'Damit sie keine Ausreden haben', correct: false },
                             { text: 'Damit sie die Umstellung gar nicht bemerken', correct: false }
                         ],
                         explanation: 'Aktive Begleitung fördert die Akzeptanz und hilft den Nutzern, die Vorteile der neuen Lösung schnell zu erkennen und zu nutzen'

                     },
                     {
                         question: 'Was bedeutet „keine Parallel-Systeme“ in der Praxis?',
                         answers: [
                             { text: 'Excel und Papier dürfen weiter genutzt werden, wenn jemand möchte', correct: false },
                             { text: 'shyftplan ist die einzige gültige Quelle für Schicht- und Abwesenheitsplanung', correct: true },
                             { text: 'Es dürfen maximal zwei Systeme gleichzeitig genutzt werden', correct: false }
                         ],
                         explanation: 'Nur wenn shyftplan die "Single Source of Truth" ist, können Effizienz und Datenqualität sichergestellt werden'
                     },
                     {
                         question: 'Welcher Mehrwert entsteht für das gesamte Unternehmen durch sauberes Change Management bei shyftplan?',
                         answers: [
                             { text: 'Mehr Kontrolle über die Mitarbeitenden', correct: false },
                             { text: 'Schnellere Einführung neuer Tools ohne Beteiligung der Nutzer', correct: false },
                             { text: 'Einheitliche digitale Prozesse, verlässliche Daten und höhere Effizienz', correct: true }
                         ],
                         explanation: 'Gutes Change Management sorgt dafür, dass die Software nicht nur eingeführt, sondern auch gelebt wird, was zu messbaren Unternehmensvorteilen führt'
                     }
                 ]
             }
         }
    },
    'poc-workshop-einordnung': {
        title: 'Einordnung und Zielsetzung',
        actionTitle: 'Einordnung und Zielsetzung für PoC-Workshop',
        subtitle: 'Wo stehen wir und was wollen wir heute erreichen?',
        layout: 'customHtml',
        content: {
            html: `
            <style>
                .custom-html-page-poc-workshop-einordnung .card {
                    background-color: #ffffff;
                    border-radius: 20px;
                    padding: 2.5rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #e5e7eb;
                }
                .custom-html-page-poc-workshop-einordnung .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                .custom-html-page-poc-workshop-einordnung .highlight-card {
                    background-color: #9865f6; /* Purple for highlight */
                    color: #ffffff;
                    border: none;
                }
                .custom-html-page-poc-workshop-einordnung .icon {
                    width: 50px;
                    height: 50px;
                    margin-bottom: 1.5rem;
                    color: #77a0f6; /* Blue icon */
                }
                .custom-html-page-poc-workshop-einordnung .highlight-card .icon {
                     color: #ffffff;
                }
                .custom-html-page-poc-workshop-einordnung ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                .custom-html-page-poc-workshop-einordnung li {
                    position: relative;
                    padding-left: 1.75rem;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #374151; /* Slightly lighter text for list items */
                }
                .custom-html-page-poc-workshop-einordnung li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: #9865f6; /* Purple checkmark */
                    font-weight: 700;
                    font-size: 1.2rem;
                }
                .custom-html-page-poc-workshop-einordnung .highlight-card li {
                    color: #e0d9fe;
                }
                .custom-html-page-poc-workshop-einordnung .highlight-card li::before {
                    color: #ffffff;
                }
                .custom-html-page-poc-workshop-einordnung .highlight-card strong {
                     color: #ffffff;
                }
            </style>
            <div class="custom-html-page-poc-workshop-einordnung">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                    <div class="card">
                        <div class="flex-shrink-0"><svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><h2 class="text-2xl font-semibold text-gray-800 mb-6">Bis zum PoC erledigt</h2></div>
                        <div class="flex-grow"><ul><li><strong class="text-gray-700">Beteiligte informiert</strong> (Kick-Off und Projekt-Workshop durchgeführt)</li><li><strong class="text-gray-700">Kernanwendungsfälle in shyftplan aufgesetzt</strong> (Prozesse aufgenommen &amp; Tool-Konfiguration gestartet)</li><li><strong class="text-gray-700">Erste Erfahrungen</strong> in shyftplan gesammelt</li></ul></div>
                    </div>
                    <div class="card highlight-card transform lg:scale-110">
                         <div class="flex-shrink-0"><svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg><h2 class="text-2xl font-bold mb-6">Zielsetzung im PoC-Workshop</h2></div>
                        <div class="flex-grow"><ul><li><strong>Wesentliche Konfiguration für Schichtplaner</strong> von shyftplan anhand von Kernanwendungsfällen abstimmen</li><li><strong>Weiteres Vorgehen</strong> aufzeigen</li></ul></div>
                    </div>
                    <div class="card">
                         <div class="flex-shrink-0"><svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg><h2 class="text-2xl font-semibold text-gray-800 mb-6">Vorschau bis Go-Live</h2></div>
                        <div class="flex-grow"><ul><li>Letzte <strong class="text-gray-700">Prozess-Details</strong> abstimmen</li><li><strong class="text-gray-700">Schnittstellenkonfiguration</strong> finalisieren</li><li><strong class="text-gray-700">Trainer-Schulung</strong> durchführen</li><li><strong class="text-gray-700">Planer-Schulung</strong> durchführen</li></ul></div>
                    </div>
                </div>
            </div>
            `
        }
    }
};