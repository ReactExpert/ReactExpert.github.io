import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.css';

class Jumbotron extends Component {
    render () {
        return (
     
            <div className="jumbotron">
                <div className="container">
                    <h5 className="display-3"><b>Doming consetur conclsionemque <br /> vis ex, te duo odio acumsan.</b></h5>
                    <div className="searchform">
                        <input type="text" className="search" placeholder="Search for anything..." name="search"></input>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Get Bits
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/">Action</Link>
                            <Link className="dropdown-item" to="/">Another action</Link>
                            <Link className="dropdown-item" to="/">Something else here</Link>
                            </div>
                        </div>
                        <form class="form-inline my-2 my-md-0">
                            <input type="text" className="formname" placeholder="Galary AB.." name="name" />
                            <Link className="btn btn-primary btn-lg submit" to="/" role="button"><i class="fas fa-search"></i></Link> 
                        </form>
                    </div>
                </div>
            </div>
    
        );
    }
}

export default Jumbotron;