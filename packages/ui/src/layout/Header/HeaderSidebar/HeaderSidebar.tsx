import React from 'react';

import { IoClose } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';

import GIcon from '../../../components/GIcon';

import { NavSidebar, Navbar, User } from '../../interface';

import GroupSidebar from './GroupSidebar';
import HeaderSidebarAction from './HeaderSidebarAction';
import Profile from './Profile';


import './HeaderSidebar.scss';


interface HeaderSidebarProps {
    user: User;
    isOpen: boolean;
    navbar?: Array<Navbar>;
    sidebar?: Array<NavSidebar>;
    onLogout: () => void;
    onToggleMenu: () => void;
}

export default function HeaderSidebar({ user, isOpen, navbar, sidebar, onLogout, onToggleMenu }: HeaderSidebarProps) {

    const groupOne = sidebar?.find((item) => item.key === 'profile');
    
    const profileSidebar = groupOne?.items.find((item) => item.key === 'profile');

    const profileMenu: NavSidebar['items'][number] = !profileSidebar
        ? {
            key: 'profile',
            label: 'Meus dados',
            path: '/meus-dados',
            onRedirect: () => {
                window.open('/meus-dados', '_self', 'noopener');
            }
        }
        : profileSidebar;

    const filteredSidebar = sidebar?.filter((item) => item.key !== 'profile');
    return (
        <div className={`header-sidebar ${isOpen ? 'header-sidebar__show' : ''}`}>
            <div className="header-sidebar__content">
                <Profile user={user} profileMenu={profileMenu}>
                    <header className="header-sidebar__content--header">
                        <div className="header-sidebar__content--header-close-icon">
                            <GIcon onClick={onToggleMenu} icon={<IoClose size={30}/>}/>
                        </div>
                    </header>
                </Profile>
                {
                    filteredSidebar?.map((item) => (
                        <GroupSidebar key={item.key} group={item}/>
                    ))
                }
                <HeaderSidebarAction icon={<IoMdExit/>} label="Sair" onRedirect={onLogout}/>

                <hr className="header-sidebar__content--divider"/>

                <ul className="header-sidebar__content--navbar">
                    {
                        navbar?.map((item) => (
                            <HeaderSidebarAction
                                key={item.key}
                                type={item.type}
                                label={item.label}
                                items={item.items}
                                onRedirect={item?.onRedirect}
                            />
                        ))
                    }
                </ul>


            </div>
        </div>
    );
}