import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header">
                <nav className="nav-div">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#visit">Visit Places</a>
                        </li>
                        <li >
                            <a href="#place">Place</a>
                        </li>
                        <li >
                            <a href="#booking">Booking</a>
                        </li>
                        <li >
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <div className="text-center banner">
                        <h1>
                            Welcome All To <br />
                            <span>World Heritage Places</span>
                        </h1>
                        <h5>
                            Discover a place to spend your vaction
                        </h5>
                        <p>This large format full-colorful websites features the World Heritage sites and brief explanations of the World Heritage Convention and the World Heritage conservation.We will provide you the best service and security ever</p>
                    </div>
                    <div className="anchor-tag">
                        <h2>The Budget You Need: $1500</h2>
                    </div>
                </div>
            </div>
            <div className="text-left container card-details">
                <h2>Discover a place to spend your vaction</h2>
                <h4>World Heritage List</h4>
            </div>
        </>
    );
};

export default Header;