import React from "react";
import Data from "./Data";
import Top from "./Top";
import './top.css';
const TopOffers = () => {
  return (
    <div className='topoffer'>
    <h3 style={{textAlign:'center', fontSize:'3rem'}} className='flag'>All Flagship Used & New Mobiles</h3>
    <hr/>
       <h1 className='top-offers'>Top Offers</h1>
       <hr/>
      {Data.map((val1) => {
        return (
          <Top
            img={val1.img}
            title={val1.title}
            brand={val1.brand}
            link={val1.link}
            star1={val1.star1}
            star2={val1.star2}
            star3={val1.star3}
            star4={val1.star4}
            star5={val1.star5}
            condition={val1.condition}
            colors={val1.colors}
            battery={val1.battery}
            ram={val1.ram}
            display={val1.display}
            storage={val1.storage}
            price={val1.price}
          />
        );
      })}
    </div>
  );
};

export default TopOffers;
