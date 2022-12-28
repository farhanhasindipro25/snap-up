import React from 'react';
import Menubar from '../Pages/Shared/Menubar';
import { Outlet } from 'react-router-dom';
import { Footer } from 'flowbite-react';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;