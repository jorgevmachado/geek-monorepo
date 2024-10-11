import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { useState } from 'react';

import { GIcon } from '../../../../components';
import { Navbar } from '../../../interface';

import './HeaderSidebarAction.scss';

interface DropdownProps {
    label: string;
    children: React.ReactNode;
}

function Dropdown({ label, children }: DropdownProps) {
    const [isDropdownOpen, setIsMenuOpen] = useState(false);
    const icon = isDropdownOpen ? <MdOutlineArrowDropUp size={28} /> : <MdOutlineArrowDropDown size={28} />;

    const handleOpenDropdown = () => { setIsMenuOpen(!isDropdownOpen); };

    return (
        <>
            <div className="header-sidebar__dropdown--container" onClick={handleOpenDropdown}>
                {label}
                <GIcon icon={icon} color="primary-100"/>
            </div>
            <ul className="header-sidebar__dropdown--container-content">
                { isDropdownOpen && children }
            </ul>
        </>

    );
}


interface ButtonProps {
    icon?: React.ReactNode;
    label: string;
    counter?: number;
    onRedirect?: () => void;
}

function Button({ icon, label, counter, onRedirect }: ButtonProps) {
    return (
        <button className="header-sidebar__button--link" onClick={onRedirect}>
            <div>
                {
                    icon && (<GIcon className="header-sidebar__button--link-icon" icon={icon}/>)
                }
                {label}
            </div>
            {
                counter && (
                    <div className="header-sidebar__button--link-counter">
                        {counter > 9 ? '9+' : counter}
                    </div>
                )
            }
        </button>
    );
}


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
                        <Dropdown label={label}>
                            {
                                items?.map((item) => (
                                    <Button key={item.key} label={item.label} onRedirect={item.onRedirect}/>
                                ))
                            }
                        </Dropdown>
                    )
                    : ( <Button icon={icon} label={label} counter={counter} onRedirect={onRedirect}/> )
            }

        </li>
    );
}
