import React from 'react';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import Room from "./components/Room"

// import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Practice from './practice';
// import Practice from "./practice";

function App() {
  return (
    <>
    {/* <Practice/> */}
    {/* <Practice name="pramit">
      <img src="./images/room-1.jpeg"/>
      <h1>hiiibro</h1>

    </Practice>
    <Practice name="priya"/>
    <Practice name="anjali"/> */}
    <Navbar/> 
    {/* <Practice/> */}
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component={Error}/>
    </Switch>

  
          
       
    </>
    
  );
}

export default App;
