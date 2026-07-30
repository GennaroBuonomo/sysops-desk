import SearchBar from './SearchBar';

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>SysOps Desk</h1>
        <p>Gestione Asset e Budget IT</p>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
}