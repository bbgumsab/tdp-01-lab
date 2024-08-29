import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Greeting from './Greeting';
import JapFoodNav from './components/JapFoodNav';
import JapFoodBooking from './components/JapFoodBooking';
import JapFoodAboutUs from './components/JapFoodAboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div className="App">
      <Greeting name="UOBxTDP" />
    </div> */}
    {/* <App /> */}
    <JapFoodNav home="Home" about="About Us" menu="Our Menu" contact="Contact Us"/>
    <JapFoodBooking />
    <JapFoodAboutUs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
