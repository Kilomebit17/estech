import React from 'react'
import DialoguesCss from './Dialogues.module.css'
import DialoguesUsers from './DialoguesUsers/DialoguesUsers'
const Dialogues = (props) => {
    let data = [
        { name: 'Маша', id: 0 },
        { name: 'Катя', id: 1 },
        { name: 'Света', id: 2 }
    ]
    const dialog = data.map(dialog => <DialoguesUsers title={dialog.name} id={dialog.id} />)
    return <div className={DialoguesCss.content}>{dialog}</div>
}
export default Dialogues;