import styles from "./Footer.module.css"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>BoundaryBreakers</h3>
            <p className={styles.footerDescription}>
              Breaking boundaries, building champions. Your journey to cricket excellence starts here.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>📘</a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>🐦</a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>📷</a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>▶️</a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><button onClick={() => scrollToSection("about")}>About Us</button></li>
              <li><button onClick={() => scrollToSection("services")}>Services</button></li>
              <li><button onClick={() => scrollToSection("coaches")}>Coaches</button></li>
              <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              <li>Batting Training</li>
              <li>Bowling Coaching</li>
              <li>Fielding Skills</li>
              <li>Fitness Programs</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <p>📍 123 Cricket Avenue, Sports City</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@boundarybreakers.com</p>
              <p>🕐 Mon-Sat: 6AM - 9PM</p>
            </div>
            <button className={styles.contactBtn} onClick={() => scrollToSection("contact")}>
              Book a Session
            </button>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Boundary Breakers. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

