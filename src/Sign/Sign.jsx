import React from 'react'
import S from './Sign.module.css'
const Sign = () => {
    return (
        <div className={S.signFlex}>
            <button className={S.signBtn}>Войдите</button>
            <span className={S.navSpan}></span>
        </div>
    )
}
export default Sign;