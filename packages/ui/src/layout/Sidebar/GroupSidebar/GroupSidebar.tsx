import React from 'react';

import { Menu } from '../../interface';

import SidebarAction from '../SidebarAction';

import './GroupSidebar.scss';

interface ListSidebarButtonProps {
    group: Menu['items'][number];
}

export default function GroupSidebar({ group }: ListSidebarButtonProps) {
    return (
        <div className="group-sidebar">
            <h4 className="group-sidebar__title">{group.label}</h4>
            {
                group?.items?.map((item) => (
                    <SidebarAction
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