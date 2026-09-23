import { useState, useEffect } from "react";
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";

function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/team");
        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }
        const data = await response.json();
        setTeam(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Could not load team members.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5 py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2 text-muted">Loading team members...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5 py-5 text-danger">
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5 pt-3">
      <div className="team-heading text-center mb-4">
        <p className="text-uppercase text-primary fw-bold mb-1">OUR TEAM</p>
        <h2>Meet Our Expert Team</h2>
        <p className="text-muted">
          Our experienced professionals are here to help you find the perfect property.
        </p>
      </div>

      <Row xs={1} md={3} className="g-4">
        {team.length > 0 ? (
          team.map((member) => (
            <Col key={member._id}>
              <Card className="h-100 border-0 shadow-sm align-items-center pt-3">
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                    backgroundColor: "ThreeDFace"
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="h5 mb-1">{member.name}</Card.Title>
                  <Card.Text className="text-muted small">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12} className="text-center">
            <p className="text-muted">No team members found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Team;