import SearchBar from './SearchBar';
import { Sun, Moon, Plus } from 'lucide-react'; 


export default function Header({ searchTerm, setSearchTerm, theme, toggleTheme, onOpenModal }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>SysOps Desk</h1>
        <p>Gestione Asset e Budget IT</p>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%', maxWidth: '580px' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <button 
          className="submit-btn" 
          style={{ marginTop: 0, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }} 
          onClick={onOpenModal}
        >
          <Plus size={18} /> Nuovo
        </button>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
}