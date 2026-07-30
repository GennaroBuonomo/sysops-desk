import SearchBar from './SearchBar';
import { Sun, Moon } from 'lucide-react';

export default function Header({ searchTerm, setSearchTerm, theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>SysOps Desk</h1>
        <p>Gestione Asset e Budget IT</p>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%', maxWidth: '480px' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        {/* BOTTONE TOGGLE TEMA */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label="Toggle Dark Mode"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
}