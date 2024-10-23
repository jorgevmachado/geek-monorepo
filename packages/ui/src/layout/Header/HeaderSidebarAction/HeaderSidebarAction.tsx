import React from 'react';

import { GAction, GDropdown, GIcon } from '../../../components';
import { Navbar } from '../../interface';

import './HeaderSidebarAction.scss';

interface HeaderSidebarActionProps {
    icon?: React.ReactNode;
    path?: string;
    type?: 'button' | 'dropdown';
    label: string;
    items?: Array<Navbar>;
    counter?: number;
    onRedirect?: () => void;
}

export default function HeaderSidebarAction({
                                                icon,
                                                type = 'button',
                                                label,
                                                items,
                                                counter,
                                                onRedirect
                                            }: HeaderSidebarActionProps) {
    return (
        <li className={`header-sidebar__${type}`}>
            {
                type !== 'button'
                    ? (
                        <GDropdown label={label} type="button" context="primary" appearance="sidebar">
                            {
                                items?.map((item) => (
                                    <GAction
                                        key={item.key}
                                        context="primary"
                                        onClick={item.onRedirect}
                                        appearance="sidebar"
                                        iconPosition="left">
                                        {item.label}
                                    </GAction>
                                ))
                            }
                        </GDropdown>
                    )
                    : (
                        <GAction
                            icon={icon && (<GIcon className="header-sidebar__button--link-icon" icon={icon}/>)}
                            context="primary"
                            onClick={onRedirect}
                            appearance="sidebar"
                            iconPosition="left"
                            notificationCounter={counter}>
                        {label}
                        </GAction>
                    )
            }

        </li>
    );
}
