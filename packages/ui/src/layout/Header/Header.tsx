import React from 'react';

import { FaHamburger } from 'react-icons/fa';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Image from '../../components/Image';
import Link from '../../components/Link';

import { type Menu } from '../interface';

import './Header.scss';

interface HeaderProps {
    logo: string;
    navbar?: Menu['items'];
    handleToggleMenu?: () => void;
}

export default function Header({ logo, navbar, handleToggleMenu }: HeaderProps) {

    return (
        <header className="header-container">
            <div className="header-container__brand">
                <Button
                    icon={<FaHamburger/>}
                    onClick={handleToggleMenu}
                    context="primary"
                    className="header-container__brand--button"
                    aria-label="sidebar"
                    appearance="iconButton"/>
                <div className="header-container__brand--logo" onClick={() => window.open('/', '_self', 'noopener')}>
                    <Image src={logo} alt="Logo" title="Logo" />
                </div>
            </div>
            <nav className="header-container__nav">
                <ul className="header-container__nav--list">
                    {navbar?.map((item) => (
                        <li
                            key={item.key}
                            className={`header-container__nav--list-item ${item.items?.length ? 'header-container__nav--list-dropdown' : ''}`}>
                            {!item.items?.length ? (
                                <Link type="link" context="primary" appearance="menu" onClick={item?.onRedirect}>
                                    {item.label}
                                </Link>
                            ) : (
                                <Dropdown label={item.label} type="link" context="primary" appearance="navbar">
                                    {item?.items?.map((subItem) => (
                                        <Link
                                            key={subItem.key}
                                            type="link"
                                            context="primary"
                                            iconColor="primary-100"
                                            onClick={subItem?.onRedirect}
                                            appearance="menu">
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </Dropdown>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}