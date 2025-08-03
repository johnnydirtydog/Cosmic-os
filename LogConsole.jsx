export default function LogConsole() {
  const logs = [
    { timestamp: "2024-01-01T00:00:00Z", level: "INFO", message: "Cosmic OS initialized" },
    { timestamp: "2024-01-01T00:00:01Z", level: "DEBUG", message: "Loading archetypal logic..." },
    { timestamp: "2024-01-01T00:00:02Z", level: "INFO", message: "Sound FX system ready" },
    { timestamp: "2024-01-01T00:00:03Z", level: "SUCCESS", message: "All systems operational" }
  ];

  return (
    <div className="log-console">
      <h3>System Logs</h3>
      <div className="log-container">
        {logs.map((log, index) => (
          <div key={index} className={`log-entry log-${log.level.toLowerCase()}`}>
            <span className="log-timestamp">{new Date(log.timestamp).toLocaleTimeString()}</span>
            <span className="log-level">[{log.level}]</span>
            <span className="log-message">{log.message}</span>
          </div>
        ))}
      </div>
      <div className="log-input">
        <input type="text" placeholder="Enter command..." />
        <button>Execute</button>
      </div>
    </div>
  );
}