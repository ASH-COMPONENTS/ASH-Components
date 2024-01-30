import React from 'react'
import Tracks from '../components/trackes/Tracks';
import style from './globals.css'
import jsLogo from '../assets/js.png';
import tsLogo from '../assets/ts.png';
import Node from '../assets/Node.webp';
import react from '../assets/react.png';
import MainBTN from '../components/btns/mainBTN';

const TracksBoxses = () => {
    return (
        <div>
            <MainBTN mainTitle={'tracks'} />
            <div className='boxes'>
                <Tracks
                    trackName={'javaScript'}
                    trackManyInfo={'made to make web site more dinamic and show information from clint side and server side, show all info'}
                    LinkTrack={'/about'}
                    linkName={'go to learn'}
                    logo={jsLogo}
                />
                <Tracks
                    trackName={'typeScript'}
                    trackManyInfo={'this is the javascript with data type syntax'}
                    LinkTrack={'/'}
                    linkName={'go to learn'}
                    logo={tsLogo}
                />
                <Tracks
                    trackName={'react'}
                    trackManyInfo={'react is a library for web and native user interfaces.. build in javaScript '}
                    LinkTrack={'/'}
                    linkName={'go to learn'}
                    logo={react}
                />
                <Tracks
                    trackName={'nodeJs'}
                    trackManyInfo={'this is a javascript run time workig in server side "backEnd"'}
                    LinkTrack={'/'}
                    linkName={'go to learn'}
                    logo={Node}
                />
            </div>
        </div>
    )
}

export default TracksBoxses;