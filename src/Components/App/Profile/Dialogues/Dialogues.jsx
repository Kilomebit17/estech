import React from 'react'
import DialoguesCss from './Dialogues.module.css'
import DialoguesUsers from './DialoguesUsers/DialoguesUsers'
const Dialogues = (props) => {
    let data = [
        {name:'Маша', id:0},
        {name:'Катя', id:1},
        {name:'Света', id:2},
        {name:'Марта', id:3},
        {name:'Оля', id:4}
    ]   
    return (
        <div className={DialoguesCss.content}>
            <DialoguesUsers title={data[0].name} id={data[0].id}/>
            <DialoguesUsers title={data[1].name} id={data[1].id}/>
            <DialoguesUsers title={data[2].name} id={data[2].id}/>
            <DialoguesUsers title={data[3].name} id={data[3].id}/>
            <DialoguesUsers title={data[4].name} id={data[4].id}/>
        </div>
    )
}
export default Dialogues;