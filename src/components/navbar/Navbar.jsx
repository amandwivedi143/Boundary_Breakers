import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <h1>BoundaryBreakers</h1>
      </div>

      <ul className={`${styles.list} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("coaches")}>Coaches</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <div className={styles.actions}>
        <button className={styles.btn} onClick={() => scrollToSection("contact")}>
          Book Now
        </button>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
