import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
};

export default App;
