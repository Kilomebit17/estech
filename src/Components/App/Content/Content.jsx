import React from 'react'
import MSContent from './MessageBody/MSContent'
import ContentCss from './Content.module.css'
const Content = () => {
    return (
            <div className={ContentCss.content}>
                <MSContent />
            </div>
    )
}
export default Content;