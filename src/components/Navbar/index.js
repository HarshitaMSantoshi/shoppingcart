import React from 'react';
import style from './style.css';

const Navbar = () => {
    return (
        <nav className={style.navbarContainer}>
            <ul className={style.navbarList}>
                <li className={style.navbarListItem}>Items</li>
                <li className={style.navbarListItem}>Cart</li>
            </ul>
        </nav>
    );
}

export default Navbar