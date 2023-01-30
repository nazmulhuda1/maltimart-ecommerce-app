import React, { useEffect, useRef } from 'react';
import './Header.css';
import { motion } from "framer-motion";
import logo from '../../assets/images/eco-logo.png';
import { Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';
import userImg from '../../assets/images/user-icon.png';
import { useSelector } from 'react-redux';
const navLink = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/shop',
        display: 'Shop'
    },
    {
        path: '/cart',
        display: 'Cart'
    },
]
const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null)

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1>MultiMart</h1>
                            </div>
                        </div>
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {
                                    navLink.map((item, index) => (
                                        <li className="nav_link" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_actiove' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>

                        <div className="nav_icon">
                            <span className='fav_icon'>
                                <i class="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span className='cart_icon'>
                                <i class="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <motion.img whileTap={{ scale: 1.5 }} src={userImg} alt="" />
                            <div className="mobile_menu">
                                <span onClick={menuToggle} ><i class="ri-menu-line"></i></span>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;