import React from 'react';
import '../styles/CategoryMenu.css';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ComputerIcon from '@material-ui/icons/Computer';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const CategoryMenu = () => {
    return (
        <div className="category-menu">
            <div className="menu-item">
                <div className="menu-icon">
                    <AccountBalanceIcon />
                </div>
                <div className="category-name">
                    Politics
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-icon">
                    <LocalMallIcon />
                </div>
                <div className="category-name">
                    Shopping
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-icon">
                    <ComputerIcon />
                </div>
                <div className="category-name">
                    Computers
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-icon">
                    <SportsBaseballIcon />
                </div>
                <div className="category-name">
                    Sports
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-icon">
                    <SportsEsportsIcon />
                </div>
                <div className="category-name">
                    Gaming
                </div>
            </div>
        </div>
    );
};

export default CategoryMenu;