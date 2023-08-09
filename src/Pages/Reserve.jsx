import React, {useReducer, useState, useEffect} from "react";
import Nav from '../Components/Navigation'
import BookingForm from "../Components/BookingForm";
import {fetchAPI, submitAPI} from '../api'
import { useNavigate } from "react-router-dom";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : [availableTimes];
};



console.log('TEST' + updateTimes(['1:00','2:00'], '2023-07-18'))
console.log('A ' + updateTimes([], '2023-07-18'))
console.log('B ' + updateTimes([], '2023-07-19'))

const initializeTimes = (initialTimes) =>{
  return(
    [...initialTimes, ...fetchAPI(new Date())]
  );

}





function Reserve() {
  const [availableTimes,dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  const navigate = useNavigate();
  
  const submitBooking = formData => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmed");
    console.log('hmm: ' + formData.occasion)
  }; 

  console.log('Is this an array? ' + Array.isArray(availableTimes))
    return (
      <>
        <Nav></Nav>
        <BookingForm  dispatch={dispatch} availableTimes={availableTimes} submitBooking={submitBooking}/>
      </>
    );
  }
  export default Reserve;