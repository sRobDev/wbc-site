import Link from 'next/link';
import styles from './navbar.module.css'
export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <a className={styles.navLink}>Home</a>
      </Link>
      {/* <Link href="/about">
        <a className={styles.navLink}>About</a>
      </Link> */}
      <Link href="/ourteam">
        <a className={styles.navLink}>Our Team</a>
      </Link>
      <Link href="/connect">
        <a className={styles.navLink}>Connect</a>
      </Link>
    </nav>
  )
}