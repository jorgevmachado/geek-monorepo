'use client';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { useState } from 'react';

import GDropdown from '../../../components/GDropdown';
import GIcon from '../../../components/GIcon';

import './HeaderDropdown.scss';

interface HeaderDropdownProps {
    label: string;
    children: React.ReactNode;
}

export default function HeaderDropdown({ label, children }: HeaderDropdownProps) {
    const [isDropdownOpen, setIsMenuOpen] = useState(false);
    const icon = isDropdownOpen ? <MdOutlineArrowDropUp size={28} /> : <MdOutlineArrowDropDown size={28} />;

    const handleOpenDropdown = () => { setIsMenuOpen(!isDropdownOpen); };
    return (
        <GDropdown activator={
            <button className="header-dropdown__button" onClick={handleOpenDropdown}>
                {label}
                <GIcon icon={icon} color="primary-100" className="header-dropdown__button-icon" />
            </button>
        }>
            <div className="header-dropdown__content">
                { children }
            </div>
        </GDropdown>
    );
}