import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';
import JobCatagore from '../component/Catagore';

const MainLayout = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>


        </div>
    );
};

export default MainLayout;