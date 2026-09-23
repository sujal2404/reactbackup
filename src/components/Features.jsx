import "./Features.css";
import { Container, Row, Col } from 'react-bootstrap';

function Features() {
  const features = [
    {
      icon: "🏠",
      title: "Wide Range of Properties",
      description: "Explore homes that fit your lifestyle and budget."
    },
    {
      icon: "💰",
      title: "Best Deals",
      description: "Find competitive prices and valuable opportunities."
    },
    {
      icon: "🤝",
      title: "Expert Guidance",
      description: "Get support from experienced real estate professionals."
    },
    {
      icon: "🔑",
      title: "Hassle-Free Process",
      description: "Enjoy a smooth and simple property-buying experience."
    }
  ];

  return (
    <section className="features-section">
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2 className="section-title">Everything You Need to Find Your Home</h2>
          </Col>
        </Row>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <div className="feature-card h-100 p-4 text-center">
                <div className="feature-card-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;