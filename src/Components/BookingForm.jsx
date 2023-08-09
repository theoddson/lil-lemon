import React, {useState} from "react";



function BookingForm(props) {

    

    const [booking, setBooking] = useState({
        date: '2023-07-08',
        time: props.availableTimes[0],
        partySize: 1,
        occasion: 'Dining'
    })

    
   
    

    const listItems = props.availableTimes?.map((number, i) =>
        <option key={i}>{number}</option>
        );

        console.log('Passed times: ' + props.availableTimes)
        console.log('Date: ' + booking.date + ', ' + 'Time: ' + booking.time) 
        
        const handleSubmit = (e) => {
            e.preventDefault();
            props.submitBooking({ ...booking});
        }

    return (
        <form className="booking-form gap-24" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" 
                    value={booking.date} 
                    onChange={e => { 
                        setBooking({ 
                            ...booking, 
                            date: e.target.value 
                        }); 
                        props.dispatch(e.target.value);
                    }}
                
                />
            </div>


            <div>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time "
                    value={booking.time} 
                    onChange={e => { 
                        setBooking({ 
                            ...booking, 
                            time: e.target.value 
                        }); 
                    }}
                
                >
                    {listItems}
                </select>
            </div>

            <div>
                <label htmlFor="partySize">Number of guests</label>
                <input 
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    value={booking.partySize} 
                    onChange={e => { 
                        setBooking({ 
                            ...booking, 
                            partySize: e.target.value 
                        }); 
                    }}
                />
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    value={booking.occasion} 
                    onChange={e => { 
                        setBooking({ 
                            ...booking, 
                            occasion: e.target.value 
                        }); 
                    }}
                    
                >
                    <option>Dining</option>
                   <option>Birthday</option>
                   <option>Anniversary</option>
                </select>
            </div>

            <input className="button" type="submit" value="Make Your reservation" />
        </form>
    );
  }
  export default BookingForm;