import { Search } from 'lucide-react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
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
  );
}