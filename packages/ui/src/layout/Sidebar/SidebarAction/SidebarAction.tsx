import React from 'react';

import { Button, Dropdown, Icon } from '@geek/ds';

import { Menu } from '../../interface';

import './SidebarAction.scss';

interface HeaderSidebarActionProps {
    icon?: React.ReactNode;
    path?: string;
    label: string;
    items?: Menu['items'];
    counter?: number;
    onRedirect?: () => void;
}

export default function SidebarAction({
                                                icon,
                                                label,
                                                items,
                                                counter,
                                                onRedirect
                                            }: HeaderSidebarActionProps) {

    const type =  !items?.length ? 'button' : 'dropdown';
    return (
        <li className={`header-sidebar__${type}`}>
            {
                type !== 'button'
                    ? (
                        <Dropdown label={label} type="button" context="primary" appearance="sidebar">
                            {
                                items?.map((item) => (
                                    <Button
                                        key={item.key}
                                        context="primary"
                                        onClick={item.onRedirect}
                                        appearance="sidebar"
                                        iconPosition="left">
                                        {item.label}
                                    </Button>
                                ))
                            }
                        </Dropdown>
                    )
                    : (
                        <Button
                            icon={icon && (<Icon className="header-sidebar__button--link-icon" icon={icon}/>)}
                            context="primary"
                            onClick={onRedirect}
                            appearance="sidebar"
                            iconPosition="left"
                            notificationCounter={counter}>
                        {label}
                        </Button>
                    )
            }

        </li>
    );
}
