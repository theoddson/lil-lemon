import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import Reserve from "./Pages/Reserve";
import App from "./App"

test('Renders the BookingForm heading', () => {

    render(<BookingForm availableTimes={{times:['12:00', '13:00']}}/>);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
    
})