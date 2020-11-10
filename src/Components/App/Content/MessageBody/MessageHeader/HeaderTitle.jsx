import React from 'react'
import HeaderTitleCss from './HeaderTitle.module.css'
const HeaderTitle = (props) => {
    return (
        <div className={HeaderTitleCss.title}>{props.title}</div>
    )
}
export default HeaderTitle;