import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="main-wrapper">
            <Header></Header>
            <div className="no-bottom no-top" id="content">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;