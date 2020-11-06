import React from 'react'
import CouplesCss from './Couples.module.css'

const Couples = (props) => {
    return (
        <div className={CouplesCss.Couples}>
            <div className={CouplesCss.Couples__title}>{props.title}</div>
        </div>
    )
}
export default Couples