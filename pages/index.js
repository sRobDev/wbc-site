import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../components/layout.module.css';
import Team from '../components/team';
import Connect from '../components/connect';
import { faQuestionCircle, faUserFriends, faPlug, faAddressBook, faFileAudio, faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Wheatland Bible Church</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <img src="/images/laramiepeak.jpg" className={`${styles.headerImage}`}></img>
          <h2 className={styles.imageText}><span>Welcome to </span><br/> <span>Wheatland Bible Church!</span></h2>
        </header>
        <main>
          <div className={styles.contentSection}>
            {/* <Link href="/about">
              <a className={styles.homeLink}>
                <FontAwesomeIcon className={styles.faIcon} icon={faQuestionCircle}/>
                About us!
              </a>
            </Link> */}
            <Link href="/ourteam">
              <a className={styles.homeLink}>
                <FontAwesomeIcon className={styles.faIcon} icon={faUserFriends}/>
                Our Team!
              </a>
            </Link>
            <Link href="/connect">
              <a className={styles.homeLink}>
                <FontAwesomeIcon className={styles.faIcon} icon={faPlug}/>
                Connect
              </a>
            </Link>
            {/* <Link href="/contact">
              <a className={styles.homeLink}>
                <FontAwesomeIcon className={styles.faIcon} icon={faAddressBook}/>
                Contact Us!
              </a>
            </Link>
            <Link href="/audio">
              <a className={styles.homeLink}>
                <FontAwesomeIcon className={styles.faIcon} icon={faFileAudio}/>
                Audio Sermons
              </a>
            </Link>
            <Link href="/video">
              <a className={styles.homeLink}>
                <FontAwesomeIcon className={styles.faIcon} icon={faFileVideo}/>
                Video Sermons
              </a>
            </Link> */}
          </div>
          <Team />
          <Connect />
        </main>

        <footer>
        
        </footer>

      
      
    </Layout>
  )
}
