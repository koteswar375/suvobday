import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

const Header = (props) => {
    
    return (
        <div className="header white row center-align">
                <Link to="/" className="col s12 m6 l1 offset-l10">Home</Link>
                <Link to="/contact" className="col s12 m6 l1">Contact</Link>
        </div>
    )
};

export default Header;