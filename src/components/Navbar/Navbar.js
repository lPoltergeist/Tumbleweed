import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Nav, NavContainer, NavMenu } from './style'

import { FaBars, FaDiceD20 } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { GiRevolver, GiScrollQuill, GiWinchesterRifle } from 'react-icons/gi'

import Logo from '../../assets/logo.png'

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const CloseMenuOnClick = () => setIsOpen(false);

    const IconSize = '20';
    const IconColor = '#DE0303';

    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
        if (size.width > 768 && IsOpen) {
            setIsOpen(false);
        }
    }, [size.width, IsOpen]);


    return (

        <Nav>

            <NavContainer>

                <img src={Logo} alt="tumbleweed" />

                <FaBars className="MenuBars" size={32} color="red" onClick={() => setIsOpen(true)} />

                <NavMenu>
                    <ul>
                        <li><AiOutlineHome size={IconSize} color={IconColor} /><Link onClick={CloseMenuOnClick} to="/">Home</Link></li>
                        <li><GiScrollQuill size={IconSize} color={IconColor} /><Link onClick={CloseMenuOnClick} to="/ficha">Ficha</Link></li>
                        <li><GiRevolver size={IconSize} color={IconColor} /><Link onClick={CloseMenuOnClick} to="/combate">Combate</Link></li>
                    </ul>
                </NavMenu>

                {IsOpen &&
                    <>
                        <div onClick={() => setIsOpen(false)} className="menu-overlay"></div>

                        <div className="menu-items">
                            <img src={Logo} alt="sidebar_logo" />
                            <ul>
                                <li><AiOutlineHome size={IconSize} color={IconColor} /><Link onClick={CloseMenuOnClick} to="/">Home</Link></li>
                                <li><GiScrollQuill size={IconSize} color={IconColor} /><Link onClick={CloseMenuOnClick} to="/ficha">Ficha</Link></li>
                                <li><GiRevolver size={IconSize} color={IconColor} /><Link onClick={CloseMenuOnClick} to="/combate">Combate</Link></li>
                            </ul>
                        </div>
                    </>
                }

            </NavContainer>

        </Nav>


    )
}

export default Navbar


