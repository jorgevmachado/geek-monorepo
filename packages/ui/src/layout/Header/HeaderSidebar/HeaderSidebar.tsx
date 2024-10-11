import { IoClose } from 'react-icons/io5';

import GIcon from '../../../components/GIcon';

import { NavSidebar, User } from '../../interface';

import Profile from './Profile';

import './HeaderSidebar.scss';

interface GMenuProps {
    user: User,
    isOpen: boolean,
    onToggleMenu: () => void,
    profileMenu: NavSidebar;
}

export default function HeaderSidebar({ user, isOpen, onToggleMenu, profileMenu }: GMenuProps) {
    return (
        <div className={`g-menu ${isOpen ? 'g-menu__show' : ''}`}>
            <div className="g-menu__content">
                <Profile user={user} profileMenu={profileMenu}>
                    <header className="g-menu__content--header">
                        <div className="g-menu__content--header-close-icon">
                            <GIcon onClick={onToggleMenu} icon={<IoClose size={30}/>}/>
                        </div>
                    </header>
                </Profile>
            </div>
        </div>
    );
}