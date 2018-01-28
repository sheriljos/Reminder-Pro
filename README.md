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

# Store and Reducers
We need to think about initializing the actual STORE.
Right now, we have an ACTION CREATOR for adding reminder. 
We don't have any idea what the STATE is.
What we need to do is to set up a PROVIDER component from React Redux that were passed down at STORE throughout our entire application.

....> navigate to index.js and import { Provider } from react-redux;
Now, adding a provider is simple.
Write the app tag withiin the provider tag
<Provider>
    <App />
</Provider>
Now we have an error
    Warning: Failed prop type: The prop `store` is marked as required in `Provider`, but its value is `undefined`.
    in Provider (at index.js:7)
Now, lets create a store.
Afer creating store pass the store to provider
Now it gives the error
    Uncaught Error: Expected the reducer to be a function.

So what is a REDUCER
If in redux, all the application state exist as a store,
what reducers do is
they simply take the state in action and return to state
So reducers modify the state in a pure state.
There is a huge rule for the reducer.
You must never change the state direcly.
So we take the state and return the entirely new instance of it.

Lets create reducers folder in the src folder
Then declare an index.js file
Lets create the reducer there.

######The Three Steps to Redux##########

1. Add a constant to the constants file. Something like `const GREAT_COURSE = ‘GREAT_COURSE
2. Add an action creator to the actions folder. Return an action JavaScript object with a type of the constant you created.
3. Add a reducer to the reducers folder that handles this action creator

Regardless, we all love something: engineering, development, or entrepreneurship. But the one constant is that we all take action in order to succeed. Otherwise, our lives would be reduced to ‘normalcy.

*************************************************************************************************************************
############Let's boil it down########
*************************************************************************************************************************
                            Create Action (Constant.js)
                                        |
                                        |
                            Create Action Creator (actions/index.js)----->function which return JS object
                                        |
                                        |
                            Create Reducer(reducer/index.js)--------> returns the updated state
*************************************************************************************************************************
We need to add STATE and state change to the components
After creating the state, we need to connect our component to our sSTORE and the ACTION CREATOR
state--->store---->action creator

For that we need to take advantage of reducx CONNECT function.
The connect function works by hooking up two functions to react component
1.map state props function 2. mapDispatchToProps()

mapDispatchToProps() binds the actionCreator to the dispatch function.
Its is made possible with the connect feature

