import React from 'react'
import music from './images/quaver.svg'
import SendMusicCss from './SendMusic.module.css'

const SendMusic = () => {
    return <img src={music} alt="music-icon" className={SendMusicCss.img}/>
}

export default SendMusic; 