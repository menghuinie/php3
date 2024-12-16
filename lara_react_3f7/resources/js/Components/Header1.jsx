import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import NoPage from "../Pages/NoPage";
import Register from "../Pages/Auth/Register";

import LogoApp from '@/Components/LogoApp';
import IconHeart5 from '@/Components/IconHeart5';
import IconShop8 from '@/Components/IconShop8';
import IconBook8 from '@/Components/IconBook8';
import IconVideo8 from '@/Components/IconVideo8';

export default function Header1({ props }) {
    return (
        <>
            {' '}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="home" element={<Home />} />
                        <Route path="register" element={<Register />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}



