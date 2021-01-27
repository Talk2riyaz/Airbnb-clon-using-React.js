import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.css";
import logo1 from '../../img/hotel-1.jpg';
import logo2 from '../../img/hotel-2.jpg';
import logo3 from '../../img/hotel-8.jpg';
import logo4 from '../../img/hotel-4.jpg';
import logo5 from '../../img/hotel-5.jpg';
import logo6 from '../../img/hotel-6.jpg';


const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className='home-section'>
            <Card
                src={logo1}
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src={logo2}
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src={logo3}
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home-section'>
            <Card
                src={logo4}
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src={logo5}
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src={logo6}
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>



    </div>
  );
};

export default Home;
