import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import Modal from './Modal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: 'ASTANANO',
      tagline: 'Natural Nanotechnology for Aquatic Feed',
      sections: [
        {
          title: 'Innovation for Healthy Shrimp & Fish',
          items: [
            'Nano-sized Astaxanthin from Haematococcus pluvialis',
            'Better absorption, strong immunity, and high disease resistance',
            'Enhances natural color, growth, and stress tolerance'
          ]
        },
        {
          title: 'Safe & Natural',
          items: [
            '100% feed-grade natural extract',
            'No chemical additives',
            'Safe for farmers, aquatic animals, and consumers'
          ]
        },
        {
          title: 'Proven Results',
          items: [
            'Easy to mix into feed',
            'Visible improvement in 110 days',
            'Harvest yield: 15 shrimp per kg with vibrant color and healthy growth'
          ]
        }
      ]
    },
    {
      name: 'HYDRO HERBS',
      tagline: 'Disease Control Liquid',
      sections: [
        {
          title: 'Benefits of HYDRO HERBS',
          items: [
            'Prevent and reduce problems such as White Feces Syndrome in shrimp, slow shrimp growth caused by Enterocytozoon hepatopenaei (EHP) microsporidian infection, and bacteria causing Acute Hepatopancreatic Necrosis Disease (EMS/AHPND)',
            'Reduce inflammation in the digestive tract of aquatic animals',
            'Promote liver health in aquatic animals',
            'Reduce the use of chemicals and antibiotics, which are the main causes of stress in aquatic animals and lead to a decrease in immune response',
            'Possess antioxidant properties that can reduce stress and contribute to the good growth of animals',
            'Promote safe and chemical-free growth of aquatic animals'
          ]
        },
        {
          title: 'Usage of HYDRO HERBS',
          text: 'Mix 5-10 cc of HYDRO HERBS per 1 kilogram of feed (shake the bottle before use)'
        },
        {
          title: 'Components of HYDRO HERBS',
          items: [
            'Garlic Extract',
            'Galanga Extract',
            'Andrographis Extract',
            'Turmeric Extract'
          ]
        }
      ]
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-header">
                <h3>{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
              </div>
              <div className="product-content">
                {product.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4>{section.title}</h4>
                    {section.items && (
                      <ul>
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.text && <p>{section.text}</p>}
                  </div>
                ))}
                <button
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    marginTop: '1rem',
                    background: 'var(--primary-teal)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FaInfoCircle /> Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="product-note">
          <p><strong>How Our Products Work:</strong> This product uses beneficial bacteria that grow inside the shrimp gut and in water. They fight bad bacteria, help in digestion, and improve immunity—naturally. Like curd for humans. In 21 days, you'll see firmer shells, clean gut lines, and better water smell.</p>
          <ul>
            <li>It works with their existing feed/water protocol</li>
            <li>It reduces antibiotic dependency (especially for export quality)</li>
          </ul>
        </div>
      </div>
      {selectedProduct && (
        <Modal
          title={selectedProduct.name}
          onClose={() => setSelectedProduct(null)}
        >
          <div>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--primary-teal)' }}>
              {selectedProduct.tagline}
            </p>
            {selectedProduct.sections.map((section, index) => (
              <div key={index} style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--primary-teal)', marginBottom: '1rem' }}>
                  {section.title}
                </h4>
                {section.items && (
                  <ul style={{ marginLeft: '1.5rem' }}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginBottom: '0.5rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.text && <p>{section.text}</p>}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Products;

