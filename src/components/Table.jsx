import { Monitor, Server, Smartphone, Laptop, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

const getDeviceIcon = (type) => {
  switch(type) {
    case 'Laptop': return <Laptop size={18} />;
    case 'Server': return <Server size={18} />;
    case 'Smartphone': return <Smartphone size={18} />;
    case 'Monitor': return <Monitor size={18} />;
    default: return <Monitor size={18} />;
  }
};

export default function Table({ data, sortConfig, onSort }) {

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) return <ChevronsUpDown size={14} className="sort-icon inactive" />;
    return sortConfig.direction === 'asc' 
      ? <ChevronUp size={14} className="sort-icon active" /> 
      : <ChevronDown size={14} className="sort-icon active" />;
  };

  return (
    <div className="table-card">
      <div className="table-header">
        <div className="col id sortable" onClick={() => onSort('id')}>ID Asset {getSortIcon('id')}</div>
        <div className="col device sortable" onClick={() => onSort('model')}>Dispositivo {getSortIcon('model')}</div>
        <div className="col assignee sortable" onClick={() => onSort('assignee')}>Assegnatario {getSortIcon('assignee')}</div>
        <div className="col dept sortable" onClick={() => onSort('dept')}>Reparto {getSortIcon('dept')}</div>
        <div className="col cost sortable" onClick={() => onSort('cost')}>Costo {getSortIcon('cost')}</div>
        <div className="col status sortable" onClick={() => onSort('status')}>Stato {getSortIcon('status')}</div>
      </div>

      <div className="table-body">
        {data.length > 0 ? (
          data.map(asset => (
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
          <div className="empty-state">Nessun asset corrispondente ai criteri di ricerca.</div>
        )}
      </div>
    </div>
  );
}