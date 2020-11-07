import React from 'react'
import SendGifCss from './SendGif.module.css'
import img from './images/gif.svg'

const SendGif = () => {
    return <img src={img} alt="gif-icon" className={SendGifCss.img}/>
}
export default SendGif; 