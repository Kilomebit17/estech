import React from 'react'
import HeaderImgCss from './HeaderImg.module.css'
// import Img from '../images/2131.PNG'
const HeaderImg = () => {
    return (
        <div className={HeaderImgCss}>
            <img src='https://i.pinimg.com/originals/7a/17/e6/7a17e60149d84f76fed3e5ef42a0a0fc.jpg' alt="pict" className={HeaderImgCss.titleImg} />
        </div>
    )
}
export default HeaderImg;