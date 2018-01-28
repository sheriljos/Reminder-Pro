//Import the ADD_REMINDER constant
import { ADD_REMINDER } from '../constants';

//ACTION CREATOR
//Call the function addReminder and declare it as a constant
//Its gonna be an anonymous arrow function.
//It has one parameter, text we are gonna pass 
export const addReminder = (text) => {
    //action goes here---->JS object
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('The addReminder is',action ); //for debugging purpose
    return action    
}