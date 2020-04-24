import React from "react"

import './Avatar.css'

function Avatar (props) {
    return (
        <img className={props.classname} src={props.src} alt=""/>
    )
}

export default Avatar