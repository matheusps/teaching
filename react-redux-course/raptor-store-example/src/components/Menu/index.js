import React from 'react';
import CartBtn from '../CartBtn';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Menu = ( { itens }) => (
    <section className="menu">
        <img className="logo" src={logo} alt="App Logo" />
        <nav>
            <NavLink to='/dinos'> Dinosaurs </NavLink>
            <NavLink to='/about'> About </NavLink>
        </nav>
        <CartBtn itens={itens} />
    </section>
);

export default Menu;