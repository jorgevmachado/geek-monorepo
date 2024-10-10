import './GSidebarButton.scss';
import GIcon from '../../../components/GIcon';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

interface GSidebarButtonProps {
    icon?: React.ReactNode;
    label: string;
    onRedirect?: () => void;
}

export default function GSidebarButton({
    label,
    icon = <MdOutlineSpaceDashboard />,
    onRedirect,
}: GSidebarButtonProps) {
    return (
        <button className="g-sidebar-button" onClick={onRedirect}>
            <div className="g-sidebar-button__title">
                <GIcon icon={icon} color="primary-100" className="g-sidebar-button__title--icon" />
                {label}
            </div>
        </button>
    );
}