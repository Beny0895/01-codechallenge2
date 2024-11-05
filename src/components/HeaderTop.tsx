"use client"
import React, { useState } from "react"
 
export default function HeaderTop() {
    const [isClick, setisClick] = useState(false);
    const toggleHeader = ():void => {
        setisClick(!isClick)
    };

    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-slate-700 bg-opacity-50 py-4 px-8 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <img className="w-16" src="https://i.pinimg.com/280x280_RS/89/49/4a/89494a29a32f5c0044b91c144d45f4e7.jpg"/>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-white hover:bg-green-500 hover:text-black hover:text-bold rounded-lg p-2 font-serif font-bold">Home</a>
                            <a href="/programs" className="text-white hover:bg-green-500 hover:text-black rounded-lg p-2 font-serif font-bold">Programs</a>
                            <a href="/about-us" className="text-white hover:bg-green-500 hover:text-black rounded-lg p-2 font-serif font-bold">About Us</a>
                            <a href="/our-teams" className="text-white hover:bg-green-500 hover:text-black rounded-lg p-2 font-serif font-bold">Out Teams</a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-white
                        hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleHeader}
                        >

                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

