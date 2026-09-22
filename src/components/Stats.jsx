import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "150+",
      label: "Properties Listed"
    },
    {
      number: "1,200+",
      label: "Happy Clients"
    },
    {
      number: "50+",
      label: "Expert Agents"
    },
    {
      number: "10+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="stats">

      <div className="stats-container">

        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>

            <h2>{stat.number}</h2>

            <p>{stat.label}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;