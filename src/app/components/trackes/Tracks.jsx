import Link from 'next/link';
import style from './page.module.css'
import {Roboto} from '@next/font/google'
import Image from 'next/image';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '500', '700', '900']
})

const Tracks = (props) => {
    return (
        <div className={roboto.className}>
            <div className={style.trackBox}>
                <div className={style.header}>
                    <Image src={props.logo} width={30} height={30} alt={'logo track'} />
                    <h3 className={style.name} >{props.trackName}</h3>
                </div>
                <div>
                    <h3 className={style.trackInfo}>{props.trackManyInfo}</h3>
                    <Link className={style.LinkTrack} href={props.LinkTrack}>{props.linkName}</Link>
                </div>
        </div>
        </div>
    )
}

export default Tracks;