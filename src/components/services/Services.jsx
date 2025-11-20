import styles from "./Services.module.css"

const Services = () => {
  const services = [
    {
      icon: "🎯",
      title: "Batting Mastery",
      description: "Perfect your technique with personalized batting sessions focusing on stance, timing, and shot selection.",
      features: ["Video Analysis", "Net Practice", "Match Simulation"]
    },
    {
      icon: "⚡",
      title: "Bowling Excellence",
      description: "Develop pace, accuracy, and variations with expert guidance on bowling mechanics and strategy.",
      features: ["Speed Training", "Line & Length", "Variation Development"]
    },
    {
      icon: "🧤",
      title: "Fielding Skills",
      description: "Enhance your agility, catching, and throwing with intensive fielding drills and exercises.",
      features: ["Agility Training", "Catching Drills", "Throwing Accuracy"]
    },
    {
      icon: "💪",
      title: "Fitness & Conditioning",
      description: "Build strength, endurance, and flexibility with cricket-specific fitness programs.",
      features: ["Strength Training", "Cardio Workouts", "Flexibility Sessions"]
    },
    {
      icon: "🧠",
      title: "Mental Coaching",
      description: "Develop mental toughness, focus, and match awareness with professional sports psychology.",
      features: ["Mindset Training", "Pressure Handling", "Visualization"]
    },
    {
      icon: "🏆",
      title: "Match Preparation",
      description: "Get ready for matches with comprehensive preparation including strategy and game plans.",
      features: ["Tactical Analysis", "Opposition Study", "Match Planning"]
    }
  ]

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive training programs for every aspect of cricket
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

