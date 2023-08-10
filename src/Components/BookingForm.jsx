import React, {useState} from "react";

function BookingForm(props) {

    const todayDate = new Date().toISOString().split('T')[0];
    //console.log('Min Date' + todayDate)
    const [booking, setBooking] = useState({
        date: todayDate,
        time: props.availableTimes[0],
        partySize: 1,
        occasion: 'Dining'
    })

    //Form Validation, checking if fields all are valid
    const isDateValid = () => booking.date !== '' && booking.date >= todayDate;
    const isTimeValid = () => booking.time !== '';
    const isNumberOfGuestsValid = () => booking.partySize !== ''  && booking.partySize > 0;
    const isOccasionValid = () => booking.occasion !== '';
    
    
    const validateFields = () =>
      isDateValid()
      && isTimeValid()
      && isNumberOfGuestsValid()
      && isOccasionValid();

      let errorTime =  !validateFields();
      console.log('error Time?: ' + errorTime)


    //console.log('Booking: ' +  booking.date + ' , Today: ' + todayDate)
    
    //console.log('FORM VALID OR NAH?? ' + validateFields())

    const listItems = props.availableTimes?.map((number, i) =>
        <option key={i}>{number}</option>
    );

        //console.log('Passed times: ' + props.availableTimes)
        //console.log('Date: ' + booking.date + ', ' + 'Time: ' + booking.time)

        const handleSubmit = (e) => {
            e.preventDefault();
            props.submitBooking({ ...booking});
        }

    return (
        <form className="booking-form gap-24" onSubmit={handleSubmit}>

            <div className="input">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"
                    value={booking.date}
                    min={todayDate}
                    required={true}
                    onChange={e => {
                        setBooking({
                            ...booking,
                            date: e.target.value
                        });
                        props.dispatch(e.target.value);
                    }}

                />
            </div>


            <div className="input">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" className="input-field"
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

            <div className="input">
                <label htmlFor="partySize">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="partySize"
                    value={booking.partySize}
                    onChange={e => {
                        setBooking({
                            ...booking,
                            partySize: e.target.value
                        });
                    }}
                />
            </div>

            <div className="input">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"  className="input-field"
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
           {errorTime && <div className="error-message">
                Whoops, please fix the errors above.
            </div>}

            <button aria-label="Close" className="button button-full-width" type="submit" disabled={!validateFields()}>Make Your reservation</button>
        </form>
    );
  }
  export default BookingForm;