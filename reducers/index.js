//a reducer is a JavaScript function that takes two parameters.
 //They are the current state of the application and an action.
  //A reducer is a pure function that calculates the next state based on the initial or previous state.
 //It always produces the same output if the state is unchanged.

 import { combineReducers } from 'redux'
 import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions/user'
 
 const user = (state = {}, action) => {
     switch (action.type) {
         case LOGIN:
             return action.payload
         case SIGNUP:
             return action.payload
         case UPDATE_EMAIL:
             return { ...state, email: action.payload }
         case UPDATE_PASSWORD:
             return { ...state, password: action.payload }
         default:
             return state
     }
 }
 
 const rootReducer = combineReducers({
     user
 })
 
 export default rootReducer