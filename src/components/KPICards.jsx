import { Package, TrendingUp, AlertCircle } from 'lucide-react';

export default function KPICards({ data }) {
  // 1. CONTEGGIO TOTALE: Quanti elementi ci sono nell'array attuale?
  const totalAssets = data.length;

  // 2. SOMMA DEI COSTI: Uso .reduce() per sommare la proprietà "cost" di ogni oggetto
  const totalCost = data.reduce((sum, asset) => sum + asset.cost, 0);

  // 3. CONTEGGIO SPECIFICO: Quanti sono in manutenzione?
  const maintenanceCount = data.filter(asset => asset.status === 'In Manutenzione').length;

  return (
    <div className="kpi-container">
      
      <div className="kpi-card">
        <div className="kpi-icon"><Package size={24} /></div>
        <div className="kpi-info">
          <h3>Totale Dispositivi</h3>
          <p>{totalAssets}</p>
        </div>
      </div>

      <div className="kpi-card">
        <div className="kpi-icon"><TrendingUp size={24} /></div>
        <div className="kpi-info">
          <h3>Valore a Budget</h3>
          <p>€{totalCost.toLocaleString('it-IT')}</p>
        </div>
      </div>

      <div className="kpi-card">
        <div className="kpi-icon" style={{ color: '#d97706' }}><AlertCircle size={24} /></div>
        <div className="kpi-info">
          <h3>In Manutenzione</h3>
          <p>{maintenanceCount}</p>
        </div>
      </div>

    </div>
  );
}