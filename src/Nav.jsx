import React from 'react';
import './nav.css';
import Carusel from './Carousel';
import Card from './Card';
import Login from './login';
import magazin from './img/mega-store.webp';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="continer">
            <nav>
                <div className="nav">
                    <div className="navbar">
                        <div className="nomi">
                            <img src={magazin} alt="" />
                            <h1>O‘nlayn magazin</h1>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Mahsulotlar izlash' />
                            <i className="fa-solid fa-search"></i>
                        </div>
                        <div className="kirish">
                            <Link to={"/login"} style={{ textDecoration: 'none' }}>
                                    <button>
                                        <i className="fa-solid fa-user"></i> Kirish
                                    </button>
                                </Link>
                        </div>
                        <div className="saralanganlar">
                            <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <button>
                                    <i className="fa-solid fa-heart"></i> Saralanganlar
                                </button>
                            </Link>
                        </div>
                        <div className="savat">
                            <Link to="/savat" style={{ textDecoration: 'none' }}>
                                <button>
                                    <i className="fa-solid fa-shopping-cart"></i> Savat
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Carusel />
            <Card />
        </div>
    );
}

export default Nav;
