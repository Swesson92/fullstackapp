import React from 'react';
import './toolbar.css';
import {Link} from 'react-router-dom';
import Main from '../main';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-logo"><a href="/">Linn Didoff</a></div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <ul>
                <Link style={{ padding: '0 1rem'}} to="/archive">Archive</Link>
                <Link style={{ padding: '0 1rem'}} to="/pictures">Pictures</Link>
                <Link style={{ padding: '0 1rem'}} to="/about">About</Link>
                </ul>
            </div>
        </nav>
        <div>
        <Main />
    </div>
    </header>
);

export default toolbar;