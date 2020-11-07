import React from 'react'
import HeaderImgCss from './HeaderImg.module.css'
import Img from '../images/2131.PNG'
const HeaderImg = () => {
    return (
        <div className={HeaderImgCss}>
            <img src={Img} alt="pict" className={HeaderImgCss.titleImg}/>
        </div>
    )
}
export default HeaderImg;