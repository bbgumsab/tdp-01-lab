import logo from "./logo.svg";
import photo from "./CJDS.png";
import "./App.css";
import JapFoodNav from "./components/JapFoodNav";
import JapFoodBooking from "./components/JapFoodBooking";
import JapFoodAboutUs from "./components/JapFoodAboutUs";
import DisplayMessage from "./components/DisplayMessage";
import SumOfTwo from "./components/SumOfTwo";
import BorderedImage from "./components/BorderedImage";
import japFood from "./components/images/food/japanese-food-1.jpg";
import NumberBox from "./components/NumberBox";
import AlertBox from "./components/AlertBox";
import TickleBox from "./components/TickleBox";
import RandomUser from "./components/RandomUser";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <img src={photo} className="App-logo" alt="logo" />  */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <>
    //   <JapFoodNav home="Home" about="About Us" menu="Our Menu" contact="Contact Us"/>
    //   <JapFoodBooking />
    //   <JapFoodAboutUs />
    // </>

    <>
      <DisplayMessage message="Hello there!" />
      <SumOfTwo int1={1} int2={2} />
      <BorderedImage img={japFood} />
      <NumberBox initialValue={5} />
      <AlertBox />
      <TickleBox />
      <RandomUser />
    </>
  );
}

export default App;
