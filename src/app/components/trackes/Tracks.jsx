import Link from 'next/link';
import style from './page.module.css'

const Tracks = (props) => {
    return (
        <>
            <div className={style.trackBox} >
                <h3 className={style.name} >{props.trackName}</h3>
                <div>
                    <h3 className={style.trackInfo}>{props.trackManyInfo}</h3>
                    <Link className={style.LinkTrack} href={props.LinkTrack}>{props.linkName}</Link>
                </div>
        </div>
        </>
    )
}

export default Tracks;