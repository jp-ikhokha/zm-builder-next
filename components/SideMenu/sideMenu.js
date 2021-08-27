import styles from './sideMenu.module.scss'
import Link from 'next/link'

const SideMenu = ( {menuIsOpen} ) => {
    return (
        <aside className={ `${styles.sideMenuContainer} ${menuIsOpen && 'isActive'} `}>
            <style jsx>{`
    	        aside.isActive{
                    transform: translateX(0%);
                }
            `}</style>

            <nav className={styles.sideNavItems}>
                <Link href="#">
                    <a className={styles.menuItem}>About</a>
                </Link>
                <Link href="#">
                    <a className={styles.menuItem}>Courses</a>
                </Link>
                <Link href="#">
                    <a className={styles.menuItem}>Video</a>
                </Link>
                <Link href="#">
                    <a className={styles.menuItem}>Contact</a>
                </Link>
            </nav>
        </aside>
    )
}

export default SideMenu