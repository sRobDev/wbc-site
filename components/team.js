import styles from './team.module.css';

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <img src="images/team/pastor.jpg" className={styles.cardPicture} alt="Pastor Jason and Family"></img>
        <div className={styles.cardMeta}>
          <h2 className={styles.cardHeader}>
            Pastor Jason Iacavetto 
          </h2>
          <span className={styles.cardBio}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga autem, consequuntur aspernatur ducimus vero eaque voluptatem necessitatibus harum! Est voluptatum placeat corporis saepe soluta illo quaerat error, tempora repellendus dolorum!
          </span>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <img src="images/team/youthpastor.jpg" className={styles.cardPicture} alt="Pastor Jason and Family"></img>
        <div className={styles.cardMeta}>
          <h2 className={styles.cardHeader}>
            Youth Pastor Danny Fredericks
          </h2>
          <span className={styles.cardBio}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga autem, consequuntur aspernatur ducimus vero eaque voluptatem necessitatibus harum! Est voluptatum placeat corporis saepe soluta illo quaerat error, tempora repellendus dolorum!
          </span>
        </div>
      </div>
    </div>
  )
}