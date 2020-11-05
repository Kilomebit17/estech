import React from 'react'
import CouplesCss from './Couples.module.css'

const Couples = (props) => {
    return (
        <div className={CouplesCss.Couples}>
            <div className={CouplesCss.Couples__title}>Пары</div>
            <div className={CouplesCss.Couples__title}>Сообщения</div>
        </div>
    )
}
export default Couples