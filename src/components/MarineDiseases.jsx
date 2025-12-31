const MarineDiseases = () => {
  return (
    <section className="diseases-risks">
      <div className="container">
        <div className="section-header">
          <h2>Marine Diseases Risks</h2>
        </div>
        <div className="column-right">
          <div className="disease-section">
            <h3>Decapod Iridescent Virus (DIV-1)</h3>
            <ul className="feature-list">
              <li>
                <span className="icon">🧬</span>
                <div>
                  <strong>Highly contagious and rapidly spreading virus</strong>
                </div>
              </li>
              <li>
                <span className="icon">⚠️</span>
                <div>
                  <strong>Causes very high mortality in shrimp populations</strong>
                </div>
              </li>
              <li>
                <span className="icon">💰</span>
                <div>
                  <strong>Leads to massive economic losses for farmers</strong>
                </div>
              </li>
            </ul>
          </div>
          <div className="disease-section">
            <h3>Laem-Singh Virus (LSNV)</h3>
            <ul className="feature-list">
              <li>
                <span className="icon">📊</span>
                <div>
                  <strong>Linked to Monodon Slow Growth Syndrome (MSGS)</strong>
                </div>
              </li>
              <li>
                <span className="icon">⚠️</span>
                <div>
                  <strong>Particularly affects Indian Black Tiger Shrimps (Penaeus monodon)</strong>
                </div>
              </li>
              <li>
                <span className="icon">📉</span>
                <div>
                  <strong>Results in significant growth delays, reducing harvest value</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineDiseases;
