import Link from 'next/link';
import styles from './page.module.css';

const Nav = () => {
    return (
        <div className={styles.navgationBar}>
            <h3 className={styles.brand} >ASH-EDUCATION</h3>
            <nav className={styles.links}>
                <Link href={'/'} className={styles.link}>home</Link>
                <Link href={'/about'} className={styles.link}>about-us</Link>
                <Link href={'/'} className={styles.link}>services</Link>
            </nav>
        </div>
    )
}

export default Nav