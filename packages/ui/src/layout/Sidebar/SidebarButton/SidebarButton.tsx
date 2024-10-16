import React from 'react';

import { MdOutlineSpaceDashboard } from 'react-icons/md';

import GIcon from '../../../components/GIcon';

import './SidebarButton.scss';

interface GSidebarButtonProps {
    icon?: React.ReactNode;
    path: string;
    label: string;
    onRedirect?: () => void;
}

export default function SidebarButton({
    label,
    icon = <MdOutlineSpaceDashboard />,
    path,
    onRedirect,
}: GSidebarButtonProps) {

    const shouldActiveButton = location.pathname.includes(path);

    return (
        <button
            onClick={onRedirect}
            className={`g-sidebar-button ${shouldActiveButton ? 'g-sidebar-button__active' : ''}`}
        >
            <div className="g-sidebar-button__title">
                <GIcon icon={icon} color="primary-100" className="g-sidebar-button__title--icon" />
                {label}
            </div>
        </button>
    );
}