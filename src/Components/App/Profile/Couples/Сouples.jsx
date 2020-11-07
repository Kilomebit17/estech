import React from 'react'
import CouplesCss from './Couples.module.css'
import { NavLink } from 'react-router-dom'

const Couples = () => {
    return (
        <div className={CouplesCss.Couples}>
            <div className={CouplesCss.Couples__title}>
                <NavLink to="/couples" activeClassName={CouplesCss.active}>Пары</NavLink>
            </div>
        </div>
    )
}
export default Couples