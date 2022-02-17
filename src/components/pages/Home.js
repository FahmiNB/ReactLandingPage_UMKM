import React from 'react';
import '../../App.css';
import MagicSection from '../MagicSection';
import Cards from '../Cards';
import Footer from '../Footer'



function Home (props) {
    return (
    <>
        <MagicSection />
        <Cards/>
        <Footer/>
    </>
    );
}

export default Home;