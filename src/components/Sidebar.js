import React from 'react';
import '../styles/Sidebar.css';
import { elastic as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                O MNIE
            </a>
            <a className="menu-item" href="/offer">
                OFERTA
            </a>
            <a className="menu-item" href="/">
                HISTORIE
            </a>
            <a className="menu-item" href="/desserts">
                KOTAKT
            </a>
        </Menu>

    );
};