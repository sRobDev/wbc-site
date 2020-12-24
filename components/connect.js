import styles from './connect.module.css';
export default function Connect({page}) {
  return (
    <div className={`${page ? styles.pageContainer : styles.connectScrollContainer}`}>
      <div className={styles.content}>
        <h2>Worship Service</h2>
        <p>Please join us for our worship service every Sunday morning at 10:45.</p>
      </div>
      <div className={styles.content}>
        <h2>Sunday School</h2>
        <p>Sunday School starts at 9:30 a.m. for all ages</p>
      </div>
      <div className={styles.content}>
        <h2>Pioneers for Christ</h2>
        <p>Pioneers For Christ meets every Wednesday night from mid September thru mid April. PFC is for children that are age 4 (by September 15, 2019) through 6th grade. Dinner is served from 5:30 to 5:50 and PFC is over by 7:30. Come and learn about Jesus and the Bible, play games, do crafts, enjoy music and make new friends!</p>
      </div>
      <div className={styles.content}>
        <h2>Youth Ministry</h2>
        <p>Youth Group is every Wednesday night from 6-8 p.m. for 7th through 12th graders. Bible study for youth boys is every other Monday night out at the Bush's house from 6-8 p.m. Please contact Pastor Danny for more information, 331-5819 or to confirm if we are meeting, or keep an eye on Facebook.</p>
      </div>
      <div className={styles.content}>
        <h2>Women's Ministry</h2>
        <p>*Please call the church office about several different Bible Studies that are going on this fall. *Ladies Sunday School every Sunday at WBC at 9:30. *Ladies Bible Study is 9:00-11:00 on Thursday mornings. *There is an adult Bible Study on Sunday nights in the Fellowship Hall from 6-7 p.m. Please contact Pastor Jason or Pastor Danny if your are interested.</p>
      </div>
      <div className={styles.content}>
        <h2>Men's Ministry</h2>
        <p>Prayer Breakfast- 2nd & 4th Saturdays, 7:00 a.m., meet at Tasty Treats on South St. Bible Study- Every Tuesday morning at 6:00 a.m., located at WBC. Adult Bible Study every Sunday night from 6-7 p.m. Please call Pastor Jason or Pastor Danny if you are interested.</p>
      </div>
      <div className={styles.content}>
        <h2>Young Couples Bible Study</h2>
        <p>We are doing a study on "The Act of Marriage" the second and fourth Tuesdays of the month from 6:30-8:00. We will break for the holidays, but will resume in January 2020.</p>
      </div>
    </div>
  )
}