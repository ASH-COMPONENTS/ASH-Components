import React from 'react'
import Tracks from '../components/trackes/Tracks';

const TracksBoxses = () => {
    return (
        <div className='tracks' style={{display: 'flex', justifyContent: 'space-between' ,alignItems: 'center'}}>
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
    )
}

export default TracksBoxses;