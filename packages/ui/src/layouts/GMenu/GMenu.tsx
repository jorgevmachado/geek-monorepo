import GProfile from './GProfile';


import './GMenu.scss';
import GIcon from '../../components/GIcon';
import { IoClose } from 'react-icons/io5';


interface GMenuProps {
    isOpen: boolean;
    onToggleMenu: () => void;
}

export default function GMenu({ isOpen, onToggleMenu }: GMenuProps) {
    return (
        <div className={`g-menu ${isOpen ? 'g-menu__show' : ''}`}>
            <div className="g-menu__content">
                <GProfile user={{ name: 'John', email: 'john@mail.com' }}>
                    <header className="g-menu__content--header">
                        <div className="g-menu__content--header-close-icon">
                            <GIcon onClick={onToggleMenu} icon={<IoClose size={30} />}/>
                        </div>
                    </header>
                </GProfile>
            </div>
        </div>
    );
}