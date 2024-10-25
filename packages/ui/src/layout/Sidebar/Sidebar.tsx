import React from 'react';

import { IoClose } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

import GAction from '../../components/GAction';
import GIcon from '../../components/GIcon';

import { Menu, type User } from '../interface';

import Profile from '../Profile';

import GroupSidebar from './GroupSidebar';
import SidebarAction from './SidebarAction';

import './Sidebar.scss';

interface GSidebarProps {
    type: 'desktop' | 'mobile';
    user: User;
    menu?: Array<Menu>;
    onLogout?: () => void;
    showMobileMenu?: boolean;
    handleToggleMenu?: () => void;
}

export default function Sidebar({ type, user, menu, onLogout, showMobileMenu, handleToggleMenu }: GSidebarProps) {

    const navbar = menu?.find((group) => group.key === 'navbar')?.items;
    const sidebar = menu?.find((item) => item.key === 'sidebar')?.items;

    const groupProfile = sidebar?.find((item) => item.key === 'profile');

    const profileSidebar = groupProfile?.items?.find((item) => item.key === 'profile');

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



    const filteredSidebar = sidebar?.filter((item) => item.key !== 'profile');

    // TODO VOLTAR NO FUTURO PARA CORRIGIR O shouldActiveButton
    const shouldActiveButton = false;

    return type === 'desktop' ? (
        <aside className="sidebar__desktop">
            <div className="sidebar__desktop--container">
                {
                    sidebar?.map((group) => (
                        <div key={group.key} className="sidebar__desktop--container-group">
                            <h4 className="sidebar__desktop--container-group__title">{group.label}</h4>
                            {
                                group?.items?.map((item) => (
                                    <GAction
                                        key={item.key}
                                        icon={item.icon || <MdOutlineSpaceDashboard />}
                                        type="button"
                                        context="primary"
                                        onClick={item?.onRedirect}
                                        selected={shouldActiveButton}
                                        notificationCounter={item.counter}
                                        appearance="sidebar"
                                        iconPosition="left">
                                        {item.label}
                                    </GAction>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </aside>
    ) : (
        <aside className={`sidebar__mobile ${showMobileMenu ? 'sidebar__mobile--show' : ''}`}>
            <div className="sidebar__mobile--container">
                <Profile user={user} profileMenu={profileMenu}>
                    <header className="sidebar__mobile--container-profile">
                        <div className="sidebar__mobile--container-profile__close">
                            <GIcon onClick={handleToggleMenu} icon={<IoClose size={30}/>}/>
                        </div>
                    </header>
                </Profile>
                {
                    filteredSidebar?.map((item) => (
                        <GroupSidebar key={item.key} group={item}/>
                    ))
                }
                <GAction
                    icon={<IoMdExit/>}
                    context="primary"
                    onClick={onLogout}
                    appearance="sidebar"
                    iconPosition="left"
                    iconClassName="sidebar__mobile--container-logout">
                    Sair
                </GAction>

                <hr className="sidebar__mobile--container-divider"/>

                <ul className="header-container__sidebar--content-navbar">
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