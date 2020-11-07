import React from 'react'
import HeaderCloseCss from './HeaderClose.module.css'
import close from '../images/error.svg'

const HeaderClose = () => {
    return <img src={close} alt="close button" className={HeaderCloseCss.img} />
}
export default HeaderClose;