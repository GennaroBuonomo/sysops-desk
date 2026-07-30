import { useState } from 'react';
import { Search, Monitor, Server, Smartphone, Laptop, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import './App.css';

// DATABASE 
const initialAssets = [
  { id: "LPT-042", type: "Laptop", model: "MacBook Pro 16", assignee: "Mario Rossi", dept: "Sviluppo", cost: 2400, status: "Operativo" },
  { id: "SRV-001", type: "Server", model: "Dell PowerEdge R750", assignee: "IT Ops", dept: "Infrastruttura", cost: 6500, status: "In Manutenzione" },
  { id: "PHN-105", type: "Smartphone", model: "iPhone 15 Pro", assignee: "Giulia Bianchi", dept: "Marketing", cost: 1100, status: "Operativo" },
  { id: "MNT-088", type: "Monitor", model: "Dell UltraSharp 27", assignee: "Luca Neri", dept: "Sviluppo", cost: 450, status: "In Magazzino" },
  { id: "LPT-043", type: "Laptop", model: "ThinkPad T14", assignee: "Elena Verdi", dept: "Amministrazione", cost: 1350, status: "Operativo" }
];

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
  const [assets, setAssets] = useState(initialAssets);
  const [searchTerm, setSearchTerm] = useState("");
  
  // ---Configurazione Ordinamento ---
  // Memorizza la chiave (es. 'cost', 'dept') e la direzione ('asc' o 'desc')
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // 1. FILTRO RICERCA LIVE (eseguito per primo)
  let processedAssets = assets.filter(asset => 
    Object.values(asset).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // 2. ORDINAMENTO (eseguito sui risultati filtrati)
  if (sortConfig.key) {
    processedAssets.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  // --- FUNZIONE PER GESTIRE IL CLICK SULLA COLONNA ---
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'; // Se clicchi di nuovo la stessa colonna, inverte la direzione
    }
    setSortConfig({ key, direction });
  };

  // Funzione helper per mostrare l'icona giusta sull'intestazione di colonna
  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) return <ChevronsUpDown size={14} className="sort-icon inactive" />;
    return sortConfig.direction === 'asc' 
      ? <ChevronUp size={14} className="sort-icon active" /> 
      : <ChevronDown size={14} className="sort-icon active" />;
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1>SysOps Desk</h1>
          <p>Gestione Asset e Budget IT</p>
        </div>

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

      <main className="dashboard">
        <div className="table-card">
          
          {/* --- INTESTAZIONE TABELLA CLICCABILE --- */}
          <div className="table-header">
            <div className="col id sortable" onClick={() => handleSort('id')}>
              ID Asset {getSortIcon('id')}
            </div>
            <div className="col device sortable" onClick={() => handleSort('model')}>
              Dispositivo {getSortIcon('model')}
            </div>
            <div className="col assignee sortable" onClick={() => handleSort('assignee')}>
              Assegnatario {getSortIcon('assignee')}
            </div>
            <div className="col dept sortable" onClick={() => handleSort('dept')}>
              Reparto {getSortIcon('dept')}
            </div>
            <div className="col cost sortable" onClick={() => handleSort('cost')}>
              Costo {getSortIcon('cost')}
            </div>
            <div className="col status sortable" onClick={() => handleSort('status')}>
              Stato {getSortIcon('status')}
            </div>
          </div>

          <div className="table-body">
            {processedAssets.length > 0 ? (
              processedAssets.map(asset => (
                <div key={asset.id} className="table-row">
                  <div className="col id"><strong>{asset.id}</strong></div>
                  <div className="col device">
                    <span className="icon-wrapper">{getDeviceIcon(asset.type)}</span>
                    {asset.model}
                  </div>
                  <div className="col assignee">{asset.assignee}</div>
                  <div className="col dept">{asset.dept}</div>
                  <div className="col cost">€{asset.cost}</div>
                  <div className="col status">
                    <span className={`status-badge ${
                      asset.status === 'Operativo' ? 'active' : 
                      asset.status === 'In Magazzino' ? 'idle' : 'maintenance'
                    }`}>
                      {asset.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">Nessun asset trovato per "{searchTerm}"</div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
