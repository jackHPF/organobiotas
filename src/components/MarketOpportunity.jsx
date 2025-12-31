const MarketOpportunity = () => {
  return (
    <section id="opportunity" className="market-opportunity">
      <div className="container">
        <div className="section-header">
          <h2>Market Opportunity</h2>
        </div>
        <div className="column-right">
          <div className="opportunity-section">
            <h3>Aquaculture in India</h3>
            <ul className="feature-list">
              <li>
                <span className="icon">🌍</span>
                <div>
                  <strong>Second-largest aquaculture producer globally</strong>
                </div>
              </li>
              <li>
                <span className="icon">🐟</span>
                <div>
                  <strong>Over 15 million metric tons/year in production</strong>
                </div>
              </li>
              <li>
                <span className="icon">📈</span>
                <div>
                  <strong>Growing demand for residue-free, sustainable inputs, especially for export markets (EU, US)</strong>
                </div>
              </li>
            </ul>
          </div>
          <div className="opportunity-section">
            <h3>Gaps</h3>
            <ul className="feature-list gaps">
              <li>
                <span className="icon">❌</span>
                <div>
                  <strong>Limited availability of high-quality, scientifically tested probiotics</strong>
                </div>
              </li>
              <li>
                <span className="icon">❌</span>
                <div>
                  <strong>Overuse of antibiotics remains widespread</strong>
                </div>
              </li>
              <li>
                <span className="icon">❌</span>
                <div>
                  <strong>Lack of access to proven organic alternatives for farmers</strong>
                </div>
              </li>
            </ul>
          </div>
          <div className="opportunity-section">
            <h3>Organo Biotas Solutions</h3>
            <ul className="feature-list solutions">
              <li>
                <span className="icon">✅</span>
                <div>
                  <strong>A scientifically driven approach</strong>
                </div>
              </li>
              <li>
                <span className="icon">✅</span>
                <div>
                  <strong>In partnership with NAP – Nature Agro Products, Thailand, a leader in aquaculture innovation</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
