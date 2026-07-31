import { useState } from 'react';
import { X } from 'lucide-react';

export default function AssetFormModal({ isOpen, onClose, onAdd }) {
  // Stato iniziale vuoto del form
  const [formData, setFormData] = useState({
    type: 'Laptop',
    model: '',
    assignee: '',
    dept: '',
    cost: '',
    status: 'Operativo'
  });

  // Gestore universale per tutti gli input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita che la pagina si ricarichi (comportamento base dei form)
    
    // Creo un ID finto (es. LPT-847) in base al tipo
    const prefix = formData.type === 'Smartphone' ? 'PHN' : formData.type === 'Monitor' ? 'MNT' : formData.type === 'Server' ? 'SRV' : 'LPT';
    const fakeId = `${prefix}-${Math.floor(Math.random() * 1000)}`;

    // Inviamo i dati al padre (App.jsx) assicurandoci che il costo sia un numero
    onAdd({
      id: fakeId,
      ...formData,
      cost: Number(formData.cost)
    });

    // Resettiamo il form e chiudiamo la modale
    setFormData({ type: 'Laptop', model: '', assignee: '', dept: '', cost: '', status: 'Operativo' });
    onClose();
  };

  if (!isOpen) return null; // Se isOpen è false, non renderizza nulla!

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* e.stopPropagation() impedisce che cliccando sul form si chiuda la modale */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Aggiungi Nuovo Asset</h2>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} className="asset-form">
          <div className="form-group">
            <label>Tipo Dispositivo</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Laptop">Laptop</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Server">Server</option>
              <option value="Monitor">Monitor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Modello</label>
            <input type="text" name="model" required value={formData.model} onChange={handleChange} placeholder="es. MacBook Air M2" />
          </div>

          <div className="form-group">
            <label>Assegnatario</label>
            <input type="text" name="assignee" required value={formData.assignee} onChange={handleChange} placeholder="es. Mario Rossi" />
          </div>

          <div className="form-group">
            <label>Reparto</label>
            <input type="text" name="dept" required value={formData.dept} onChange={handleChange} placeholder="es. Sviluppo" />
          </div>

          <div className="form-group">
            <label>Costo (€)</label>
            <input type="number" name="cost" required min="0" value={formData.cost} onChange={handleChange} placeholder="es. 1200" />
          </div>

          <div className="form-group">
            <label>Stato</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Operativo">Operativo</option>
              <option value="In Magazzino">In Magazzino</option>
              <option value="In Manutenzione">In Manutenzione</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Salva Asset</button>
        </form>
      </div>
    </div>
  );
}