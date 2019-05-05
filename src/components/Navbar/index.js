import React from 'react';
import style from './style.css';

const Navbar = props => {
    const {
        activeTab,
        onTabChange
    } = props;

    return (
        <nav className={style.navbarContainer}>
            <ul className={style.navbarList}>
                <li className={`${style.navbarListItem} ${activeTab === 0 ? style.navbarItemActive : ""}`}>
                    <a onClick={()=>onTabChange(0)}>Items</a>
                </li>
                <li className={`${style.navbarListItem} ${activeTab === 1 ? style.navbarItemActive : ""}`}>
                    <a onClick={()=>onTabChange(1)}>Cart</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;