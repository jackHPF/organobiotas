const CaseStudy = () => {
  const steps = [
    {
      number: 1,
      title: 'Understand the Farm',
      items: [
        'Stocking density, pond size',
        'Identify current issues: white gut? slow growth? water color?',
        'Water testing (ammonia, nitrite, pH) if possible'
      ]
    },
    {
      number: 2,
      title: 'Demo the Product',
      items: [
        'Open a Bottle and smell it',
        'Explain it contains live bacteria that multiply in the pond',
        'It\'s natural, no withdrawal period'
      ]
    },
    {
      number: 3,
      title: 'Explaining Benefits',
      items: [
        'Show: Not magic—works with your regular protocol',
        'Shrimp gut changes',
        'Sludge reduction',
        'Feed Conversion Ratio (FCR) improvement'
      ]
    },
    {
      number: 4,
      title: 'Recommend Usage',
      items: [
        'Use 5ml per kg, for 25 days and later reduce to 3ml and 1ml',
        'Mix with water, apply evenly'
      ]
    }
  ];

  return (
    <section id="case-study" className="case-study">
      <div className="container">
        <h2>Case Study: Bhimavaram Farmer Success</h2>
        <div className="case-study-header">
          <p className="outcome-highlight">Outcome in just 25 days: Clean gut, Firm shell and Better growth</p>
        </div>
        <div className="case-study-content">
          <div className="process-steps">
            {steps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <ul>
                  {step.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="case-study-location">
            <p><strong>Location:</strong> <a href="https://maps.app.goo.gl/BPqxSMoNSsUWVW2D6?g_st=ipc" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

