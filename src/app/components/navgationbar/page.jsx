"use client" // use client silde rein
import Link from 'next/link';
import styles from './page.module.css';
import { MdOutlineExpandMore } from "react-icons/md";

const Nav = () => {
    return (
        <div className={styles.navgationBar}>
            <div className='container' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={styles.nav}>
                    <h3 className={styles.brand} >ASH-EDUCATION</h3>
                    <nav className={styles.links}>
                        <Link href={'/'} className={styles.link}>home</Link>
                        <Link href={'/about'} className={styles.link}>about-us</Link>
                        <div id={styles.allCources} >
                            <Link href={'/'} className={styles.link} id={styles.toggle} >
                                cources
                            </Link>
                                <div className={styles.tracks}>
                                    <h3> {">"}main tracks</h3>
                                    <Link href={'/about'} className={styles.link2}>ui / ux</Link>
                                    <Link href={'/JavaScript'} className={styles.link2}>java script</Link>
                                    <Link href={'/about'} className={styles.link2}>tyep script</Link>
                                    <Link href={'/about'} className={styles.link2}>python</Link>
                                    <Link href={'/about'} className={styles.link2}>soft skills</Link>
                                </div>
                        </div>
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