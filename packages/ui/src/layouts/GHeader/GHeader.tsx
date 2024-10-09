import { FaHamburger } from 'react-icons/fa';
import GHeaderButton from './GHeaderButton';
import GHeaderDropdown from './GHeaderDropdown';
import GIcon from '../../components/GIcon';

import type { GHeaderNavBarProps } from './interface';

import './GHeader.scss';

interface HeaderProps {
    logo: string;
    navbar?: Array<GHeaderNavBarProps>;
}

export default function GHeader({ logo, navbar }: HeaderProps) {
    return (
        <header className="header-container">
            <div className="header-container__brand">
                <button className="header-container__brand--button">
                    <GIcon icon={<FaHamburger/>} color="primary-100" />
                </button>
                <div className="header-container__brand--logo">
                    <img alt="Logo" src={logo} title="Logo" />
                </div>
            </div>
            <nav className="header-container__nav">
                <ul className="header-container__nav--list">
                    {navbar?.map((item) => (
                        <li className={`header-container__nav--list-item ${item.type === 'dropdown' ? 'header-container__nav--list-dropdown' : ''}`} key={item.key}>
                            {item.type === 'button' ? (
                                <GHeaderButton label={item.label} href={item?.href} />
                            ) : (
                                <GHeaderDropdown label={item.label}>
                                    {item?.items?.map((subItem) => (
                                        <GHeaderButton key={subItem.label} label={subItem.label} href={subItem?.href} />
                                    ))}
                                </GHeaderDropdown>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}