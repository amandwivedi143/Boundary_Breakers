import styles from "./Section1.module.css"
import kohliImg from "../../assets/top50kohli.jpg"

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <img src={kohliImg} alt="kohli" />
    </div>
  )
}

export default Section1