import { useState } from 'react';
import { Search, Monitor, Server, Smartphone, Laptop } from 'lucide-react';
import './App.css';

// DATABASE IT (SIMULAZIONE DELL INVENTARIO)
const initialAssets = [
 { id: "LPT-042", type: "Laptop", model: "MacBook Pro 16", assignee: "Mario Rossi", dept: "Sviluppo", cost: 2400, status: "Operativo" },
  { id: "SRV-001", type: "Server", model: "Dell PowerEdge R750", assignee: "IT Ops", dept: "Infrastruttura", cost: 6500, status: "In Manutenzione" },
  { id: "PHN-105", type: "Smartphone", model: "iPhone 15 Pro", assignee: "Giulia Bianchi", dept: "Marketing", cost: 1100, status: "Operativo" },
  { id: "MNT-088", type: "Monitor", model: "Dell UltraSharp 27", assignee: "Luca Neri", dept: "Sviluppo", cost: 450, status: "In Magazzino" },
  { id: "LPT-043", type: "Laptop", model: "ThinkPad T14", assignee: "Elena Verdi", dept: "Amministrazione", cost: 1350, status: "Operativo" }
];

// 2. HELPER: Sceglie l'icona in base al tipo di device
const getDeviceIcon = (type) => {
  switch(type) {
    case 'Laptop': return <Laptop size={18} />;
    case 'Server': return <Server size={18} />;
    case 'Smartphone': return <Smartphone size={18} />;
    case 'Monitor': return <Monitor size={18} />;
    default: return <Monitor size={18} />;
  }
};

function App() {
  // ---STATI---
  const [ assets, setAssets ] = useState(initialAssets);
  const [ searchTerm, setSearchTerm ] =useState("");

  // ---LOGICA: MOTORE DI RICERCA LIVE ---
  const filteredAssets = assets.filter(asset => 
    object.value(asset).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );


  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1>SysOps Desk</h1>
          <p>Gestione Asset e Badget IT</p>
        </div>

        {/* BARRA DI RICERCA */}
        <div className="search-container">
          <Search size={20} className="search-icon" color="#64748b" />
          <input 
          type="text"
          placeholder="Cerca matricola, utente, reparto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          />
        </div>
      </header>
    </div>
  )
}

export default App
