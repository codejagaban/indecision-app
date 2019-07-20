import React, { Component } from 'react'

class AddOption extends Component {
    state = {
        error: undefined
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error =   this.props.handleAddOption(option);
        this.setState(() => ( {error} ))
        //resets the form
        if(!error) {
        e.currentTarget.reset();
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
               <form className="add-option" onSubmit={this.handleSubmitForm}>
           <input type="text" name="option" className="add-option__input    " />
           <button className="button" >Add Option</button>
       </form>
       </div>
        )
    }
}
export default AddOption;
