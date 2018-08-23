import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.less';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <NavLink to="/" exact activeStyle={{ color: 'green' }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about/123456" exact activeStyle={{ color: 'green' }}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeStyle={{ color: 'green' }}>Contact</NavLink>
                </li>
            </ul>
        </aside>
    );
};
