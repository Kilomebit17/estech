import React from 'react'
import DialoguesCss from './Dialogues.module.css'
import DialoguesUsers from './DialoguesUsers/DialoguesUsers'
const Dialogues = (props) => {
    const dialog = props.messagesPeople.map(dialog => <DialoguesUsers key={dialog.id} title={dialog.name} id={dialog.id} usersPhoto={dialog.usersPhoto}/>)
    return (
        <div className={DialoguesCss.content}>
            {dialog}
        </div>
    )
}
export default Dialogues;