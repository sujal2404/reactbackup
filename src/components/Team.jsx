import "./Team.css";

function Team() {
  const team = [
    {
      name: "John Anderson",
      role: "Senior Property Consultant",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Sarah Williams",
      role: "Real Estate Advisor",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Michael Brown",
      role: "Property Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <section className="team">

      <div className="team-heading">
        <p className="section-subtitle">OUR TEAM</p>

        <h2>Meet Our Expert Team</h2>

        <p>
          Our experienced professionals are here to help
          you find the perfect property.
        </p>
      </div>

      <div className="team-grid">

        {team.map((member, index) => (
          <div className="team-card" key={index}>

            <img
              src={member.image}
              alt={member.name}
            />

            <div className="team-info">

              <h3>{member.name}</h3>

              <p>{member.role}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Team;