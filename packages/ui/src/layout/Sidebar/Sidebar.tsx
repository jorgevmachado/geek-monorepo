import React from 'react';

import { MdOutlineSpaceDashboard } from 'react-icons/md';

import { Menu, type User } from '../interface';

import GAction from '../../components/GAction';

import './Sidebar.scss';

interface GSidebarProps {
    type: 'desktop' | 'mobile';
    user?: User;
    menu?: Array<Menu>;
}

export default function Sidebar({ type, user, menu }: GSidebarProps) {

    const sidebar = menu?.find((item) => item.key === 'sidebar')?.items;
    
    // TODO VOLTAR NO FUTURO PARA CORRIGIR O shouldActiveButton
    const shouldActiveButton = false;

    return (
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
    );
}