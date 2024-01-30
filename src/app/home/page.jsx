import styles from './page.module.css'
import './globals.css'
import Link from 'next/link';
import 'animate.css';

const Landing = () => {
    return (
        <div className={styles.homePage} id='homePage'>
        <div className="container">
            <div className={styles.textContent}>
                <h1 className={'animate__backInDown'}>welome to <span className={styles.name}>ASH</span>-foundation for education.</h1>
                <p className={styles.description}>
                    You can get a lot of types of Software fields such as front end, back end and fullstack and you can get offline courses.
                </p>
            </div>
            <div className={styles.buttons}>
                <Link href={'/about'} className={styles.btn} id='free'>free courses</Link>
                <Link href={'/'} className={styles.btn} id='pay'>Paid courses</Link>
                <Link href={'/'} className={styles.btn} id='pay'>need a coach</Link>
                <Link href={'/'} className={styles.btn} id='pay'>Need a consultation</Link>
            </div>
        </div>
        </div>
    )
}

export default Landing;