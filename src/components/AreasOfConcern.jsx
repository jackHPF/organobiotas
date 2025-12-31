const AreasOfConcern = () => {
  return (
    <section id="solutions" className="areas-concern">
      <div className="container">
        <div className="section-header">
          <h2>Areas of Concern & Key Applications</h2>
        </div>
        <div className="column-right">
          <ul className="concern-list">
            <li>
              <span className="icon">⚠️</span>
              <div>
                <strong>High Mortality Rates in the first few weeks of culture</strong>
              </div>
            </li>
            <li>
              <span className="icon">🦠</span>
              <div>
                <strong>Sudden Pond Infections causing complete livestock wipeout</strong>
                <em>(Ongoing studies to identify patterns and frequency of occurrences)</em>
              </div>
            </li>
            <li>
              <span className="icon">🌡️</span>
              <div>
                <strong>Stress in Aquatic Animals due to climatic variations</strong>
              </div>
            </li>
            <li>
              <span className="icon">🛡️</span>
              <div>
                <strong>Early Immunity Building post-hatchery stage (PL 8/10/12) before transfer to grow-out tanks</strong>
              </div>
            </li>
            <li>
              <span className="icon">🌱</span>
              <div>
                <strong>Organic Probiotics</strong>
                <ul className="sub-list">
                  <li>Boost digestion and immunity</li>
                  <li>Improve feed conversion and weight gain ratio</li>
                </ul>
              </div>
            </li>
            <li>
              <span className="icon">🌿</span>
              <div>
                <strong>Proactive Disease Control</strong>
                <ul className="sub-list">
                  <li>Use of organic and herbal solutions for disease prevention</li>
                </ul>
              </div>
            </li>
            <li>
              <span className="icon">📊</span>
              <div>
                <strong>Critical Parameter Monitoring</strong>
                <ul className="sub-list">
                  <li>Standard Operating Procedures (SOPs) for regular reporting and corrective actions</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AreasOfConcern;
