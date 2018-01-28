# Reminder-Pro
This is a reminder app using REACT and REDUX. Through this project I am attempting to learn Redux integrating with React.
************************************************************************************************************************
#REDUX

#Basic Principle of Redux
* We have a huge STORE holding our application STATE
* STORE is global OBJECT which holds the application state
* It allows the STATE to be UPDATED by the dispatched action.

#Redux Action
* Plane JS object
* It must have a TYPE property----> Type property tells which kind of ACTION is performed
* It some times have the payload key --->holds data
* other key - necessary info

We can't just create this JS object and expect something to happen.
No!!!!!!
We need what redux calls an action creator.

{
    type: 'ADD_REMINDER',
    payload:
    key:
}

#Action Creator
* Action creator is more like a fuction.
* It returns JS action itself.

function (){
    return{
        type: 'ADD_REMINDER',
        payload:
        key:
    }
}

# To boil it down
----Action : JS Object--------
----Action Creator : Function that returns Action(JS object)------

