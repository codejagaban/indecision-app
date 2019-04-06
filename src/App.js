import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import TaskModal from './components/TaskModal';
import './App.scss';

class App extends Component {
            state = {
              options : [],
              selectedOption: undefined
            }

              // DELETES ALL OPTIONS
        handleDeleteOption = () => {
          this.setState(() => ( { options : [] }))
        }
        // DELETE A SINGLE OPTION
        handleDeleteOptionSingular = (optionToRemove) => {
          this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !== option)
          }))
        }
        handlePick = () => {
          const randomNum = Math.floor(Math.random() * this.state.options.length);
          const option = this.state.options[randomNum];
          this.setState(() => ( {selectedOption: option } ))

        }

        handleAddOption = (option) => {
          if(!option) {
            return `Enter A valid value to add item`;
          }else if(this.state.options.indexOf(option) > -1) {
            return `This option Already Exist`
          }
          this.setState((prevState => ( {options: prevState.options.concat([option])})))


        }
        handleClearSelectedOption = (e) => {
          e.preventDefault();
          this.setState(() => ( {selectedOption: undefined} ))
          console.log('you clicked me!')

        }


        componentDidMount(prevProps, prevState) {
          const json = localStorage.getItem('options')
          const options = JSON.parse(json)
          try {
            if(options) {
              this.setState(() =>( {options} ))
            }

          } catch (e) {

          }
          console.log('Fetching data for React app ...');

        }
        componentDidUpdate(prevProps, prevState){
          if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
          }
          console.log('Saving data for React app')

        }
        componentWillUnmount(){

        }


  render() {
    const subTitle = `Puts your life in the hands of a computer`;
    return (
       <div >
      <Header subTitle= {subTitle}/>

      <div className="container">

  <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />

          <div className="widget">
          <Options handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptionSingular={this.handleDeleteOptionSingular}
          options={this.state.options}/>
    <AddOption handleAddOption={this.handleAddOption} />
          </div>
      <TaskModal selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}/>
                </div>


       </div>
    );
  }
}
    //DEFAULT PROPS
    // App.defaultProps = {
    //   options : []

    // }

export default App;
