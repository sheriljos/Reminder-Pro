//Let us import ADD_REMINDER constant
import { ADD_REMINDER } from '../constants';

//To begin we have one reducer with name 'reminder'
//It will be another anonymous arrow function
//It will have two parameters
//1. state parameter preinitialized to an empty array
//2.action

//Let us define the reminder function
const reminder = (action) => {
    return{
        text: action.text,
        id:Math.random()
    }
}

const reminders = (state=[], action) => {
    //initialize the reminder variable to null
    let reminders = null;
    //later on we will update the reminders variable to return the state
    //The action returns the type
    //We can use the action.type to modify our remiders state.
    //So we use a switch statement on the action.type
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            //In case of ADD_REMINDER reminders variable is an array. Using spread operator, we spread our state. 
            //Spread oprerator allows us to copy the state of one array into another array.
            //para1--->current spread state. para2---->new reminder with our action
            console.log('reminders as state', reminders);
            return reminders;
        default:
            return state;
            //by default we return the state from above     
    }
}

//We need to export our reduser so that other models can see it.
export default  reminders;