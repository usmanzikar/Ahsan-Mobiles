import React, { useState } from 'react';
import Carde from './Carde';
import Data from './Data';

const Brands = () => {

  const[items,setItems]= useState(Data);

  const filterItem = (catItem) =>{
   const updatedItems = Data.filter((curEle) => {
        return curEle.category === catItem;
   });
   setItems(updatedItems);
  }

    return (
        <>
        <hr/>
        <h1 className='otherbrand-heading'>Other Available Brands</h1>
        <hr/>
    <div className="menu-tab d-flex justify-content-center">
      <button className='btn btn-warning m-5' onClick={()=> filterItem('iphones')}>Iphones</button>
      <button className='btn btn-warning m-5'onClick={()=> filterItem('aquas')}>Aquas </button>
      <button className='btn btn-warning m-5'onClick={()=> filterItem('googlepixel')}>Google Pixels</button>
      <button className='btn btn-warning m-5' onClick={()=> filterItem('samsung')}>Samsung</button>
      <button className='btn btn-warning m-5' onClick={()=> setItems(Data)}>All</button>
    </div>
          {items.map((val1) => {
        return (
          <Carde
            img={val1.img}
            title={val1.title}
            brand={val1.brand}
            disc={val1.disc}
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
        </>
    );
}

export default Brands;
