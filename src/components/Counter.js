import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.removeOne = this.removeOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count : 0
        }

    }
    componentDidMount(){
        const counter = localStorage.getItem('count')
        const count = parseInt(counter, 10)
        try {
            if(!isNaN(count)){
                this.setState(() => ( {count} ))
            }
        } catch (error) {

        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const counter = parseInt(this.state.count, 10)
            localStorage.setItem('count', counter)
        }
    }
    addOne() {
        this.setState((prevState) => ( { count : prevState.count + 1} ))
    }
    removeOne(){
        this.setState((prevState) => ( {count: prevState.count - 1} ))
    }
    resetAll(){
        this.setState(() => ( {count: 0} ))
    }
render(){
    return(
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick = {this.addOne}>+1</button>
        <button onClick = {this.removeOne}>-1</button>
        <button onClick = {this.resetAll}>reset</button>
      </div>
    )
}
}
// Counter.defaultProps = {
//     count: 0
// }

export default Counter