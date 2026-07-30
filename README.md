# 🖥️ SysOps Desk - IT Asset & Budget Manager

SysOps Desk è una Single Page Application (SPA) in React progettata per semplificare il monitoraggio degli asset hardware e software aziendali. Il progetto unisce una gestione rigorosa dei dati a un'interfaccia utente pulita, reattiva e in stile "SaaS" (Software as a Service).

Questa applicazione nasce dall'esigenza reale di risolvere i colli di bottiglia tipici del provisioning IT e del monitoraggio dei budget dipartimentali, applicando moderne logiche di sviluppo frontend a flussi di lavoro aziendali concreti.

## 🚀 Funzionalità Principali (Fase 1)

- **Ricerca Live Istantanea:** Un motore di ricerca basato su array multidimensionali che filtra l'inventario in tempo reale a ogni tasto premuto, cercando trasversalmente tra ID, modelli, reparti e assegnatari.
- **Data Table Responsiva:** Una tabella dati ad alta densità costruita interamente con CSS Flexbox. Include un'intestazione fissa (sticky header) per mantenere il contesto durante lo scorrimento di grandi set di dati.
- **Visual Design "SaaS":** Interfaccia utente sviluppata da zero in puro CSS3 (nessun framework esterno). Sfrutta variabili CSS, Flexbox e contrasti accessibili per garantire leggibilità e pulizia.
- **Stati Visivi Dinamici:** Badge di stato (Operativo, In Magazzino, In Manutenzione) renderizzati condizionalmente in base ai dati del componente.

## 🛠️ Stack Tecnologico

- **Frontend:** React 18
- **Build Tool:** Vite (per HMR e bundling ottimizzato)
- **Styling:** Puro CSS3 (Architettura Flexbox/Grid, CSS Variables)
- **Iconografia:** Lucide React

## 🧠 Competenze Tecniche Dimostrate

- Gestione dello stato con `useState`.
- Filtraggio avanzato di array di oggetti tramite i metodi `.filter()` e `.some()`.
- Rendering condizionale di classi CSS per la UI.
- Progettazione di layout complessi e fluidi senza l'ausilio di Bootstrap o Tailwind.
- Traduzione di requisiti di business (gestione finanziaria e logistica IT) in architettura software.
