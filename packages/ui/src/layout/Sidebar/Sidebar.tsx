import React from 'react';

import { IoClose } from 'react-icons/io5';

import type { User } from '@geek/business/auth';

import { Button, Icon } from '@geek/ds';

import { Menu } from '../interface';

import Profile from '../Profile';

import GroupSidebar from './GroupSidebar';
import SidebarAction from './SidebarAction';

import './Sidebar.scss';

interface SidebarProps {
    user?: User;
    menu?: Array<Menu>;
    onLogout?: () => void;
    showMobileMenu?: boolean;
    handleToggleMenu?: () => void;
}

export default function Sidebar({ user, menu, onLogout, showMobileMenu, handleToggleMenu }: SidebarProps) {

    const navbar = menu?.find((group) => group.key === 'navbar')?.items;
    const sidebar = menu?.find((item) => item.key === 'sidebar')?.items;

    const groupProfile = sidebar?.find((item) => item.key === 'profile');

    const profileSidebar = groupProfile?.items?.find((item) => item.key === 'profile');

    const groupLogout = sidebar?.find((item) => item.key === 'logout');

    const logoutSidebar = groupLogout?.items?.find((item) => item.key === 'logout');

    const profileMenu: Menu['items'][number] = !profileSidebar
        ? {
            key: 'profile',
            path: '/meus-dados',
            label: 'Meus dados',
            onRedirect: () => {
                window.open('/meus-dados', '_self', 'noopener');
            }
        }
        : profileSidebar;

    const logoutMenu: Menu['items'][number] = !logoutSidebar
        ? {
            icon: 'exit',
            key: 'logout',
            label: 'Sair',
            path: '/anuncio/cadastrar/',
            onRedirect: onLogout
        }
        :  logoutSidebar;

    const filteredSidebar = sidebar?.filter((item) => item.key !== 'profile' && item.key !== 'logout');

    // TODO VOLTAR NO FUTURO PARA CORRIGIR O shouldActiveButton
    const shouldActiveButton = false;

    return (
        <aside className={`sidebar ${showMobileMenu ? 'sidebar__show' : ''}`}>
            <div className="sidebar__container">
                <div className="sidebar__container--profile">
                    <Profile user={user} profileMenu={profileMenu}>
                        <header className="sidebar__container--profile-header">
                            <div className="sidebar__container--profile-header__close">
                                <Icon onClick={handleToggleMenu} icon={<IoClose size={30}/>}/>
                            </div>
                        </header>
                    </Profile>
                </div>
                <div className="sidebar__container--list">
                    {
                        sidebar?.map((group) => (
                            <div key={group.key} className="sidebar__container--list-group">
                                {group.label !== '' &&
                                    <h4 className="sidebar__container--list-group__title">{group.label}</h4>}
                                {
                                    group?.items?.map((item) => (
                                        <Button
                                            key={item.key}
                                            icon={item.icon || 'dashboard'}
                                            type="button"
                                            context="primary"
                                            onClick={item?.onRedirect}
                                            selected={shouldActiveButton}
                                            notificationCounter={item.counter}
                                            appearance="sidebar"
                                            iconPosition="left">
                                            {item.label}
                                        </Button>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="sidebar__container--filtered">
                    {
                        filteredSidebar?.map((item) => (
                            <GroupSidebar key={item.key} group={item}/>
                        ))
                    }
                </div>
                <Button
                    icon="exit"
                    context="primary"
                    onClick={logoutMenu.onRedirect}
                    className="sidebar__container--logout"
                    appearance="sidebar"
                    iconPosition="left"
                    iconClassName="sidebar__container--logout-icon">
                    {logoutMenu.label}
                </Button>
                <hr className="sidebar__container--divider"/>
                <ul className="sidebar__container--navbar">
                    {
                        navbar?.map((item) => (
                            <SidebarAction
                                key={item.key}
                                label={item.label}
                                items={item.items}
                                onRedirect={item?.onRedirect}
                            />
                        ))
                    }
                </ul>
            </div>
        </aside>
    );
}