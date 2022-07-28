import React from 'react';
import NavigationBar from './components/NavigationBar';
import TimeStamp from './components/TimeStamp';
import BuyMainDiv from './components/BuyMainDiv';
import "./App.css"
import Pict from "./components/imgs/rider.png"

function App() {
  return (
    <div >
      <div style={{backgroundColor: "black" , height:"50%"}}>
        <NavigationBar />
        <img src={Pict} alt="not Found" style={{ height: "54%", width: "31%" ,marginLeft:"68%", marginTop :"2%"}} />
        {<TimeStamp />}
      </div>
      <div id='abhay'>
        {<BuyMainDiv />}
      </div>
    </div>
  );
}

export default App;
