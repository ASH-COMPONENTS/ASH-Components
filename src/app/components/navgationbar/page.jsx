import Link from 'next/link';
import styles from './page.module.css';

const Nav = () => {
    return (
        <div className={styles.navgationBar}>
            <div className='container' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={styles.nav}>
                    <h3 className={styles.brand} >ASH-EDUCATION</h3>
                    <nav className={styles.links}>
                        <Link href={'/'} className={styles.link}>home</Link>
                        <Link href={'/about'} className={styles.link}>about-us</Link>
                        <Link href={'/'} className={styles.link}>
                            cources
                            <div className={styles.tracks}>
                                
                            </div>
                        </Link>
                        
                    </nav>
                </div>
                    <div className={styles.contactUs}>
                        <Link href={''}><button className={styles.contact}>Contact Us</button></Link>
                    </div>
            </div>
        </div>
    )
}

export default Nav