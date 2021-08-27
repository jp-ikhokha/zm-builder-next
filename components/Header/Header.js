import styles from './header.module.scss'

const Header = ({ children }) => (
  <header className={styles.headerContainer}>{children}</header>
)

export default Header
