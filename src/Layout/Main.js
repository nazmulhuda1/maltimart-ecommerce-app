import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shard/Footer';
import Header from '../pages/Shard/Header';
import Helmet from '../pages/Shard/Helmet';

const Main = () => {
    return (
        <Helmet title={"Home"}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Helmet>
    );
};

export default Main;