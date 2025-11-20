import styles from "./Hero.module.css"
import kohliImg from "../../assets/top50kohli.jpg"

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Break Boundaries, <span className={styles.highlight}>Master Cricket</span>
          </h1>
          <p className={styles.subtitle}>
            Join Boundary Breakers and elevate your cricket game with world-class coaching,
            state-of-the-art facilities, and personalized training programs designed for champions.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryBtn}
              onClick={() => scrollToSection("contact")}
            >
              Start Your Journey
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={kohliImg} alt="Cricket Champion" className={styles.heroImage} />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.arrow}></div>
      </div>
    </section>
  )
}

export default Hero

