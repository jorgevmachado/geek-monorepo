import React from 'react';

import { MdOutlineSpaceDashboard } from 'react-icons/md';

import { Menu } from '../interface';

import GAction from '../../components/GAction';

import './Sidebar.scss';

interface GSidebarProps {
    sidebar?: Menu['items'];
}

export default function Sidebar({ sidebar }: GSidebarProps) {

    // TODO VOLTAR NO FUTURO PARA CORRIGIR O shouldActiveButton
    const shouldActiveButton = false;

    return (
        <aside className="sidebar">
            <div className="sidebar__container">
                {
                    sidebar?.map((group) => (
                        <div key={group.key} className="sidebar__container--group">
                            <h4 className="sidebar__container--group-title">{group.label}</h4>
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