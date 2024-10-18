import React from 'react';

import { MdOutlineSpaceDashboard } from 'react-icons/md';

import { NavSidebar } from '../interface';

import GAction from '../../components/GAction';

import './Sidebar.scss';

interface GSidebarProps {
    sidebar?: Array<NavSidebar>;
}

export default function Sidebar({ sidebar }: GSidebarProps) {

    const menu = sidebar?.reduce((acc: NavSidebar['items'], item) => {
        item.items.map((subItem) => acc.push(subItem));
        return acc;
    }, []);

    // TODO VOLTAR NO FUTURO PARA CORRIGIR O shouldActiveButton
    const shouldActiveButton = false;

    return (
        <aside className="g-sidebar">
            <div className="g-sidebar-container">
                {
                    menu?.map((item) => (
                        <GAction
                            key={item.key}
                            icon={item.icon || <MdOutlineSpaceDashboard />}
                            type="button"
                            context="primary"
                            onClick={item?.onRedirect}
                            selected={shouldActiveButton}
                            appearance="sidebar"
                            iconPosition="left">
                            {item.label}
                        </GAction>
                    ))
                }
            </div>
        </aside>
    );
}