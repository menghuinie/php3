import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Contact from "./Contact";
import Home from "./Home";
import Blogs from "./Blogs";
import NoPage from "./NoPage";

import LogoApp from '@/Components/LogoApp';
import IconHeart5 from '@/Components/IconHeart5';
import IconShop8 from '@/Components/IconShop8';
import IconBook8 from '@/Components/IconBook8';
import IconVideo8 from '@/Components/IconVideo8';

import Header1 from '@/Components/Header1';
import Footer from '@/Components/Footer';

export default function Welcome(props) {
    return (
        <>
            <LogoApp />

            <Head title="Welcome" />

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">


                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                    &nbsp;&nbsp;&nbsp;
                    <Header1 />
                </div>

                <Footer />

                <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                    &nbsp;&nbsp;&nbsp;Laravel v{props.laravelVersion} (PHP v{props.phpVersion})
                </div>

            </div>
        </>
    )
};
