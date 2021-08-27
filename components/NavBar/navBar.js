import Hamburger from '@components/Hamburger/hamburger'
import styles from './navbar.module.scss'

const Navbar = ({ menuIsOpen, toggleMenu }) => (
  <nav className={styles.navbarContainer}>
    <div className={styles.siteLogo}>Site Logo</div>
    <Hamburger
      className={styles.mainMenuBtn}
      toggleMenu={toggleMenu}
      menuIsOpen={menuIsOpen}
    />
  </nav>
)

export default Navbar
