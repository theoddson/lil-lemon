import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import Reserve from "./Pages/Reserve";
import App from "./App"

const availableTimes = ['12:00', '13:00'];
const today = new Date().toISOString().split('T')[0];
const dispatch = jest.fn();
const submitBooking = jest.fn();

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();

})





describe("Booking Form", () => {
  test("checking for errors", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={availableTimes}/>)

    const partyInput = screen.getByLabelText(/Number of guests/)
    fireEvent.change(partyInput, {target: {value: ''}});
    fireEvent.blur(partyInput);
    const submitBtn = screen.getByRole('button');

    expect(submitBtn).toBeDisabled();

  })
})
