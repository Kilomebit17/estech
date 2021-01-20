import React from 'react'
import { NavLink } from 'react-router-dom'
import p from './People.module.css'
const People = (props) => {
    return (
        <div className={p.content}>
        <NavLink to={'/profile/' + props.id}>
            {/*<img src={props.photoUrl} alt="peoples pictures" className={p.img}/>*/}
            <div className={p.textBlock}>
                <div className={p.title}>{props.title}</div>
            </div>
        </NavLink>
            <button className={p.send}>Написать сообщение</button>
                {
                    props.followStatus ?
                        <button
                            disabled={props.followingInProgress.includes(props.id)}
                            onClick={() => {props.unFollowThunkCreator(props.id)}}
                            className={p.follow}>Вы подписаны
                        </button>
                        :
                        <button
                            disabled={props.followingInProgress.includes(props.id)}
                            onClick={() => {props.followThunkCreator(props.id)}}
                            className={p.follow}>Подписаться
                        </button>
                }
        </div>
    )
}
export default People;