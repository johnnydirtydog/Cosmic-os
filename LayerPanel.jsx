export default function LayerPanel() {
  const layers = [
    { id: 1, name: "Physical Layer", active: true },
    { id: 2, name: "Energy Layer", active: true },
    { id: 3, name: "Information Layer", active: false },
    { id: 4, name: "Consciousness Layer", active: false }
  ];

  return (
    <div className="layer-panel">
      <h3>Cosmic Layers</h3>
      <div className="layer-list">
        {layers.map(layer => (
          <div key={layer.id} className={`layer-item ${layer.active ? 'active' : 'inactive'}`}>
            <span className="layer-indicator">●</span>
            <span className="layer-name">{layer.name}</span>
            <button className="layer-toggle">
              {layer.active ? 'Hide' : 'Show'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}