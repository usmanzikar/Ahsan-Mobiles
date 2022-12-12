import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Body from './Body/Body';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <>
        <div>
            <NavBar/>
        </div>
            <div>
                <Body/>
            </div>
            <section id='contact'>
                <Footer/>
            </section>
            
        </>
    );
}

export default Home;
