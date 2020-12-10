import React from 'react'
import p from './People.module.css'
const People = (props) => {
    return (
        <div className={p.content}>
            <div className={p.img}></div>
            <div className={p.title}>{props.title}</div>
        </div>
    )
}
export default People;