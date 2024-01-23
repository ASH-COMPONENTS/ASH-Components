import styles from './page.module.css'
import Tracks from '../components/trackes/Tracks';

const Landing = () => {
    return (
        <div className={styles.homePage} id='homePage'>
        <div className="container">
            <div className={styles.textContent}>
            <h1 className={styles.title}>welom to AS<span className={styles.spaces}>H--f </span>oundation for education </h1>
            <p className={styles.description}>
                You can get a lot of types of Software fields such as front end, back end and fullstack and you can get offline courses.
            </p>

            <div className='tracks' style={{display: 'flex'}}>
                <Tracks
                trackName={'javaScript'}
                trackManyInfo={'made to make web site more dinamic and show information from clint side and server side, show all info'}
                LinkTrack={'/about'}
                linkName={'go to learn'}
                />
                <Tracks
                trackName={'typeScript'}
                trackManyInfo={'this is the javascript with data type syntax'}
                LinkTrack={'/'}
                linkName={'go to learn'}
                />
                <Tracks
                trackName={'nodeJs'}
                trackManyInfo={'this is a javascript run time workig in server side "backEnd"'}
                LinkTrack={'/'}
                linkName={'go to learn'}
                />
            </div>

            </div>
        </div>
        </div>
    )
}

export default Landing;