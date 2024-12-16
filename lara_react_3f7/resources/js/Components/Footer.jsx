import React from 'react';
import IconHeart5 from '@/Components/IconHeart5';

export default function Footer({ props }) {
    return (
        <>
            <div className="text-center text-sm text-gray-500 sm:text-left">
                <div className="flex items-center">
                    <IconHeart5 />
                    <a href="https://laravel.bigcartel.com" className="ml-1 underline">
                        Sponsor
                    </a>
                </div>
            </div>
        </>
    );
}
