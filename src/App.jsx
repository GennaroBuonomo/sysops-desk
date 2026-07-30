import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

const initialAssets = [
  { id: "LPT-042", type: "Laptop", model: "MacBook Pro 16", assignee: "Mario Rossi", dept: "Sviluppo", cost: 2400, status: "Operativo" },
  { id: "SRV-001", type: "Server", model: "Dell PowerEdge R750", assignee: "IT Ops", dept: "Infrastruttura", cost: 6500, status: "In Manutenzione" },
  { id: "PHN-105", type: "Smartphone", model: "iPhone 15 Pro", assignee: "Giulia Bianchi", dept: "Marketing", cost: 1100, status: "Operativo" },
  { id: "MNT-088", type: "Monitor", model: "Dell UltraSharp 27", assignee: "Luca Neri", dept: "Sviluppo", cost: 450, status: "In Magazzino" },
  { id: "LPT-043", type: "Laptop", model: "ThinkPad T14", assignee: "Elena Verdi", dept: "Amministrazione", cost: 1350, status: "Operativo" }
];

function App() {

  const [assets, setAssets] = useState(initialAssets);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // 1. NUOVO STATO: Gestione del tema (di base 'light')
  const [theme, setTheme] = useState('light');

  // Funzione per invertire il tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  let processedAssets = assets.filter(asset => 
    Object.values(asset).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // 2. ORDINAMENTO
  if (sortConfig.key) {
    processedAssets.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div data-theme={theme} style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
    <div className="app-container">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <main className="dashboard">
        <Table 
          data={processedAssets} 
          sortConfig={sortConfig} 
          onSort={handleSort} 
        />
      </main>
    </div>
    </div>
  );
}

export default App;