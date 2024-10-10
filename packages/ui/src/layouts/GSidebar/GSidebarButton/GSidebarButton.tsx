import './GSidebarButton.scss';
import GIcon from '../../../components/GIcon';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

interface GSidebarButtonProps {
    rel?: string;
    href?: string;
    icon?: React.ReactNode;
    label: string;
    target?: string;
}

export default function GSidebarButton({
    rel = 'noopener',
    href,
    label,
    icon = <MdOutlineSpaceDashboard />,
    target = '_self'
}: GSidebarButtonProps) {
    return (
        <button className="g-sidebar-button">
            <div className="g-sidebar-button__title">
                <GIcon icon={icon} color="primary-100" className="g-sidebar-button__title--icon" />
                {label}
            </div>
        </button>
    );
}