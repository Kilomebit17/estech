import React from 'react'
import style from './FormatControl.module.css'
export const TextArea = ({input,meta,...props}) => {
    const errActive = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea {...props} {...input} {...meta}/>
            </div>
            {errActive && <span className={style.spanError}>{meta.error}</span>}
        </div>
    )
};
export const Input = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? style.form : '')}>
                <input {...props} {...input} {...meta}/>
            </div>
            { hasError && <span className={style.spanError}>{meta.error}</span> }
        </div>
    )
};
