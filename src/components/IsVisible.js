import React, { Component } from 'react';

class IsVisible extends Component {
    constructor(props) {
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    toggleVisibility(){
        this.setState((prevState) => {
            return{
                visibility : !prevState.visibility
            }


        })

    }
    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
              {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
              <div>
                <p>Hey. These are some details you can now see!</p>
              </div>
            )}
          </div>
        )
    }

}

export default IsVisible