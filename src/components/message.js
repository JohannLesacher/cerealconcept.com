import React from 'react'

const Message = ({type, titre, text, hide}) => (
  <div className={"notification is-"+type}>
    <button className="delete" onClick={hide}></button>
    {text}
  </div>
)

export default Message
