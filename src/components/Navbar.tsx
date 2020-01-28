import React from "react";
import {NavLink} from 'react-router-dom'


export const Navbar: React.FC = () => {
    return <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">

            <div className='container' >
                <div className="navbar-brand">Game of Life</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link" exact>Игра</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/about'} className="nav-link" href="#">Информация</NavLink>
                    </li>

                </ul>
            </div>

        </nav>

}