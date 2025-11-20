import styles from "./Coaches.module.css"

const Coaches = () => {
  const coaches = [
    {
      name: "Rahul Sharma",
      role: "Head Coach - Batting",
      experience: "15+ Years",
      specialization: "Former International Player",
      achievements: "Coached 100+ players to professional level"
    },
    {
      name: "Priya Patel",
      role: "Bowling Coach",
      experience: "12+ Years",
      specialization: "Fast Bowling Expert",
      achievements: "Developed 5 national team bowlers"
    },
    {
      name: "Amit Kumar",
      role: "Fielding Coach",
      experience: "10+ Years",
      specialization: "Fitness & Agility",
      achievements: "State-level fielding specialist"
    },
    {
      name: "Sneha Reddy",
      role: "Mental Conditioning Coach",
      experience: "8+ Years",
      specialization: "Sports Psychology",
      achievements: "Certified sports psychologist"
    }
  ]

  return (
    <section className={styles.coaches} id="coaches">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Coaches</h2>
          <p className={styles.subtitle}>
            Learn from the best in the business
          </p>
        </div>

        <div className={styles.coachesGrid}>
          {coaches.map((coach, index) => (
            <div key={index} className={styles.coachCard}>
              <div className={styles.coachAvatar}>
                <div className={styles.avatarPlaceholder}>
                  {coach.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
              <div className={styles.coachInfo}>
                <h3 className={styles.coachName}>{coach.name}</h3>
                <p className={styles.coachRole}>{coach.role}</p>
                <div className={styles.coachDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Experience:</span>
                    <span className={styles.detailValue}>{coach.experience}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Specialization:</span>
                    <span className={styles.detailValue}>{coach.specialization}</span>
                  </div>
                  <div className={styles.achievement}>
                    {coach.achievements}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coaches

