import React, {useReducer, useState} from "react";
import Nav from '../Components/Navigation'
import BookingForm from "../Components/BookingForm";
import logo from  '../images/ll-logo.png'



const reducer = (state,action) => {
  if(action.type == 'update_times') return {times: ['388:00']};
  return state;
}



function Reserve() {
  const initialState = {times:['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']};
  const [state,dispatch] = useReducer(reducer,initialState);
  
  const updateTimes = () => {
    dispatch({type: 'update_times'})
  }
    
    return (
      <>

        <Nav></Nav>
        <input className="button" value="Testing Dispatch" onClick={() => dispatch({type: 'update_times'})} />
        <BookingForm  updateTimes={dispatch} availableTimes={state}/>
        
      </>
    );
  }
  export default Reserve;