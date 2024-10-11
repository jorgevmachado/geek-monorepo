import './Sidebar.scss';

import { NavSidebar } from '../interface';

import SidebarButton from './SidebarButton';

interface GSidebarProps {
    sidebar?: Array<NavSidebar>;
}

export default function Sidebar({ sidebar }: GSidebarProps) {
    return (
        <aside className="g-sidebar">
            <div className="g-sidebar-container">
                {
                    sidebar?.map((item) => (
                        <SidebarButton
                            key={item.key}
                            path={item.path}
                            icon={item.icon}
                            label={item.label}
                            onRedirect={item?.onRedirect}
                        />
                    ))
                }
            </div>
        </aside>
    );
}