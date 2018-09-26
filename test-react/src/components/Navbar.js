import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Myphoto from '../images/photo.png';
import Logo from '../images/Logo.png';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="/navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img class="Logo" src={Logo} alt="Generic placeholder img" width="150" height="40"></img>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Organizations <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/influencers">Influencers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/goals">Goals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                        </ul>
                        <div className="navbar-nav ml-auto">
                            <Link className="btn btn-primary btn-lg" to="/" role="button">Join</Link>
                            <img class="rounded-circle" src={Myphoto} alt="Generic placeholder img" width="40" height="40"></img>
                        </div>
                    </div>

                </div>
            </nav>
        );
    }
}


export default Navbar;