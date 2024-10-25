import React from 'react';

import { GAction, GDropdown, GIcon } from '../../../components';
import { Menu } from '../../interface';

import './HeaderSidebarAction.scss';

interface HeaderSidebarActionProps {
    icon?: React.ReactNode;
    path?: string;
    label: string;
    items?: Menu['items'];
    counter?: number;
    onRedirect?: () => void;
}

export default function HeaderSidebarAction({
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
