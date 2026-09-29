const reasons = [
  {
    icon: "🕰️",
    title: "24/7 Support",
    text: "Learn from a friendly learning environment with continuous support."
  },
  {
    icon: "🙍",
    title: "Top Guide",
    text: "Learn from highly experienced teachers and professionals."
  },
  {
    icon: "📅",
    title: "Best Course",
    text: "Learn practical skills from carefully designed courses."
  }
];

const Reasons = () => {
  return (
    <section className="reasons" id="about">

      <h2>3 Reasons To Choose Us</h2>

      <div className="reason-grid">

        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>

            <div className="reason-icon">
              {reason.icon}
            </div>

            <h3>{reason.title}</h3>

            <p>{reason.text}</p>

            <a href="#about">
              Read More →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Reasons;