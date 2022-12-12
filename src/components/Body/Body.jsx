import React from 'react';
import Home from './Home/Home';
import OnePlus from './oneplus/OnePlus';
import Brands from './All-Brands/Brands';
import TopOffers from './Offer/TopOffers';
// import Signin from './Sign Page/Signin';

const Body = () => {
    return (
        <>
         <section id ='/'>
                <Home/>
         </section>
         <section id='offers'>
             <TopOffers/>
         </section>   
         <section id='oneplus'>
             <OnePlus/>
         </section>
         <section id='brands'>
             <Brands/>
         </section>
         {/* <section id='sign'>
             <Signin/>
         </section> */}
               </>
    )
}

export default Body
