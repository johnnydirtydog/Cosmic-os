import CosmicSphere from '../CosmicSphere.jsx';
import LayerPanel from '../LayerPanel.jsx';
import LogConsole from '../LogConsole.jsx';

export default function CosmicDashboard() {
  return (
    <div className="cosmic-dashboard">
      <h1>Cosmic OS GLM-4.5</h1>
      <p>A Next.js cosmic simulation system with embedded sound FX and archetypal logic.</p>
      <div className="dashboard-grid">
        <div className="cosmic-sphere-container">
          <CosmicSphere />
        </div>
        <div className="layer-panel-container">
          <LayerPanel />
        </div>
        <div className="log-console-container">
          <LogConsole />
        </div>
      </div>
    </div>
  );
}