import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";



class Header extends Component {


    render() {
        return (
            <div className="nav-wrapper">
                <div data-target="mobile-demo" className="sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></div>
                <div className="header row center-align hide-on-med-and-down">
                    <Link to="/suvobday" className="col s12 m6 l1 offset-l10 white-text">Home</Link>
                    <Link to="/contact" className="col s12 m6 l1 white-text">Contact</Link>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <Link to="/suvobday" className="col s12 m6 l1 offset-l10">Home</Link>
                    <Link to="/contact" className="col s12 m6 l1">Contact</Link>
                </ul>
            </div>
        )
    }
};

export default Header;