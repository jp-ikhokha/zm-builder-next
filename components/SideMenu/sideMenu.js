import styles from './sideMenu.module.scss'
import Link from 'next/link'

const SideMenu = ({ menuIsOpen, menuLinks }) => {
  return (
    <aside
      className={`${styles.sideMenuContainer} ${menuIsOpen && 'isActive'} `}
    >
      <style jsx>{`
        aside.isActive {
          transform: translateX(0%);
        }
      `}</style>

      <nav className={styles.sideNavItems}>
        {menuLinks.map((menuItem, index) => (
          <Link href={menuItem.data.menuItemUrl} key={index}>
            <a className={styles.menuItem}>{menuItem.data.menuItemLabel}</a>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default SideMenu
