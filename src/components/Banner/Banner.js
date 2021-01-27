import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Search from "../Search/Search";
import "./Banner.css";

const Banner = () => {
  
    const [showSearch, setShowSearch] = useState(false);


  return (
    <div className="banner">
        <div className="banner-search">
            {showSearch && <Search/>}
         <Button onClick={() => setShowSearch(!showSearch)} className="searchButton" variant="outlined"> 
           {showSearch ? "Hide": "Search Dates"}
         </Button>
        </div>
      <div className="banner-info">
        <h2>Get out and stretch your imagination</h2>
        <h5>
            Plan a dfferent kind of getaway to uncover the hidden 
            gems near you 
        </h5>
    
        <Button variant="outlined"> Explore Nearby </Button>
      </div>
    </div>
  );
};

export default Banner;
