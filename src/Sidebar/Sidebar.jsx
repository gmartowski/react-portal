import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.less';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <NavLink to="/" strict exact activeStyle={{ color: '#A78D65' }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about/123456" strict exact activeStyle={{ color: '#A78D65' }}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" strict exact activeStyle={{ color: '#A78D65' }}>Contact</NavLink>
                </li>
            </ul>
        </aside>
    );
};
