import './App.css';

import Nav from './Components/Navigation'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/Home'
import BookingPage from './Pages/Reserve'

function App() {
  return (
    <>
    <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
