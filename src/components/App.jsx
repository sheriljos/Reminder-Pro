import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            text : ''
        }
    }

    addReminder(){
        console.log('This is', this);
        //we are passing text to the addReminder function
        this.props.addReminder(this.state.text);
        
    }

    renderReminders () {
        const reminders = this.props.reminders;
        // console.log('reminders', reminders);
        return(
            <ul className="list-group col-sm-4">
            {
                reminders.map(reminder=>{
                    return(
                        <li key={reminder.id} className="list-group-item">
                            <div>{reminder.text}</div>
                        </li>
                    )
                })
            }
            </ul>
        )
    }

    render(){       
        return(
            <div className="App">

                <div className="title">
                   <h1>Reminder Pro</h1> 
                </div>

                <div className="form-inline">

                    <div className="form-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Oh!! I should..."
                        onChange = {(event) => this.setState({text:event.target.value})}
                        />
                    </div>

                    <button type="button" className="btn btn-success" onClick={()=>this.addReminder()}>
                        Add Reminder
                    </button>

                </div>
                <br/>
                {/* Calling renderReminder function to display the reminders */}
                { this.renderReminders()}

            </div>
        )
    }
}

//Let us define mapStateToProps() here. State will be the argument
function mapStateToProps(state){
    console.log('state', state);
    return {
        reminders : state
    }  
}

//Connection the addReminder action creator to App component
export default connect(mapStateToProps, {addReminder})(App);