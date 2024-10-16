import React from 'react';

import { NavSidebar } from '../interface';
import SidebarButton from './SidebarButton';

import './Sidebar.scss';

interface GSidebarProps {
    sidebar?: Array<NavSidebar>;
}

export default function Sidebar({ sidebar }: GSidebarProps) {

    const menu = sidebar?.reduce((acc: NavSidebar['items'], item) => {
        item.items.map((subItem) => acc.push(subItem));
        return acc;
    }, []);


    return (
        <aside className="g-sidebar">
            <div className="g-sidebar-container">
                {
                    menu?.map((item) => (
                        <SidebarButton
                            key={item.key}
                            path={item.path}
                            icon={item.icon}
                            label={item.label}
                            onRedirect={item?.onRedirect}
                        />
                    ))
                }
            </div>
        </aside>
    );
}