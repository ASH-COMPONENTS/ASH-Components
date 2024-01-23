import styles from './page.module.css'


const Landing = () => {
    return (
        <div className={styles.homePage} id='homePage'>
        <div className="container">
            <div className={styles.textContent}>
            <h1 className={styles.title}>welom to AS<span className={styles.spaces}>H--f </span>oundation for education </h1>
            <p className={styles.description}>
                You can get a lot of types of Software fields such as front end, back end and fullstack and you can get offline courses.
            </p>


            </div>
        </div>
        </div>
    )
}

export default Landing;