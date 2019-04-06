import React from 'react'

const Task = (props) => (

        <div className="option">
        <p className="option__text">{props.count}.{props.optionText}</p>
        <button onClick={(e) => {
            props.handleDeleteOptionSingular(props.optionText)}}
            className="button button--link"
        >Remove</button>
     </div>
    )


export default Task;