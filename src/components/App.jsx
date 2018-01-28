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

    render(){
        console.log('this.props' , this.props);
        
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
                    <br/><br/>

                    <button type="button" className="btn btn-success" onClick={()=>this.addReminder()}>
                        Add Reminder
                    </button>

                </div>
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