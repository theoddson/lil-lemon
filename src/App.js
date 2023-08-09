import './App.css';

import Nav from './Components/Navigation'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/Home'
import BookingPage from './Pages/Reserve'
import ConfirmationPage from './Pages/Confirmation'

function App() {
  return (
    <>
    <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmationPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
