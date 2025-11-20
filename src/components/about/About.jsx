import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Boundary Breakers</h2>
          <p className={styles.subtitle}>
            Where passion meets excellence in cricket training
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>Our Mission</h3>
            <p className={styles.description}>
              At Boundary Breakers, we are dedicated to nurturing cricket talent and helping
              players of all levels reach their full potential. Our comprehensive training programs
              combine technical expertise, physical conditioning, and mental preparation to create
              well-rounded athletes.
            </p>
            <p className={styles.description}>
              With state-of-the-art facilities and experienced coaches, we provide a supportive
              environment where every player can thrive and break through their boundaries.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Trained Players</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Expert Coaches</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏏</div>
              <h4>Expert Coaching</h4>
              <p>Learn from experienced coaches with international experience</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏟️</div>
              <h4>World-Class Facilities</h4>
              <p>Train in state-of-the-art facilities with modern equipment</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h4>Performance Analytics</h4>
              <p>Track your progress with advanced analytics and feedback</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h4>Personalized Training</h4>
              <p>Customized programs tailored to your individual needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

