import React from 'react';

import { NavSidebar } from '../../interface';

import HeaderSidebarAction from '../HeaderSidebarAction';

import './GroupSidebar.scss';

interface ListSidebarButtonProps {
    group: NavSidebar;
}

export default function GroupSidebar({ group }: ListSidebarButtonProps) {
    return (
        <div className="group-sidebar">
            <h4 className="group-sidebar__title">{group.label}</h4>
            {
                group.items.map((item) => (
                    <HeaderSidebarAction
                        key={item.key}
                        icon={item.icon}
                        path={item.path}
                        label={item.label}
                        counter={item.counter}
                        onRedirect={item.onRedirect}/>
                ))
            }
        </div>
    );
}