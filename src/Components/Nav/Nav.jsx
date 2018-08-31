import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.less';

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" strict exact activeStyle={{ color: '#A78D65' }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about/123456" strict exact activeStyle={{ color: '#A78D65' }}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" strict exact activeStyle={{ color: '#A78D65' }}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};
