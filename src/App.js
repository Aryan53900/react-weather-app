//import logo from './logo.svg';
//import './App.css';
import Search from "./component/search/search";
import CurrentWeather from "./component/current-weather/current-weather";
import Forecast from "./component/forecast-weather.js";

function App() {
   const onhandleSeachchange =(searchData)=>{
    console.log(searchData);
   }
  return (
    <div className="container">
  <Search onSearchchange={onhandleSeachchange}/>
  <CurrentWeather/>
  <Forecast/>
    </div>
  );
}

export default App;
