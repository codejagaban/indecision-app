import React from 'react';
import Task from './Task';

const Options =(props) => (
                <div>
                <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                className="button button--link"
                 onClick={props.handleDeleteOption}>Remove All</button>
                 </div>

                {
                        props.options.map((option, index) =>
                        <Task key={option}
                         optionText={option}
                         count={index + 1}
                         handleDeleteOptionSingular={props.handleDeleteOptionSingular}

                          /> )
                }


                {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}

                </div>
                )

export default Options;
