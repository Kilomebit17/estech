import React from 'react'
import HeaderCloseCss from './AddThisUser.module.css'
import close from './add-friend.png'

const AddThisUser = () => {
    return <img src={close} alt="close button" className={HeaderCloseCss.img} />
}
export default AddThisUser;