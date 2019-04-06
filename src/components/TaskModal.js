import React from 'react';
import Modal from 'react-modal'

const TaskModal = (props) => (
<Modal
isOpen={!!props.selectedOption}
onRequestClose={props.handleClearSelectedOption}
closeTimeoutMS={200}
className="modal"
contentLabel="Selected Option">
<h1>Selected Option</h1>
{props.selectedOption && <p>{props.selectedOption}</p>}
<button onClick={props.handleClearSelectedOption}
        className="button"
>Okay</button>
</Modal>
)
export default TaskModal;
