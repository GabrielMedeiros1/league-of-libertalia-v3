import React from 'react';
import './NavBar.css';

const NavBar = ({ onSettingsClick }) => { // receives the role as a prop
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    League<br />
                    <span className="brand-subtitle">of Libertalia</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#" style={{ marginLeft: '35px' }}>Champion Select</a>
                        <a className="nav-link" href="#" style={{ marginLeft: '35px' }}>OP.GG</a>
                        <a className="nav-link" href="#" onClick={onSettingsClick} aria-label="Configurações" style={{ marginLeft: '35px' }}>
                            <i className="fa fa-cog"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
