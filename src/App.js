import React from 'react';
import './Header.css'; // Assume CSS is already written

function Header() {
    return (
        <header>
            <div className="logo">ArtHirely</div>
            <nav>
                <ul>
                    <li>For You</li>
                    <li>Discover</li>
                    <li>Hire</li>
                    <li>Contacts</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <div className="actions">
                <button className="login">Log In</button>
                <button className="signup">Sign Up</button>
            </div>
        </header>
    );
}

export default Header;
