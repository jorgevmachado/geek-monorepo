import './GSidebar.scss';
import GSidebarButton from './GSidebarButton';
import { GSidebarItemProps } from './interface';

interface GSidebarProps {
    sidebar?: Array<GSidebarItemProps>;
}

export default function GSidebar({ sidebar }: GSidebarProps) {
    return (
        <aside className="g-sidebar">
            <div className="g-sidebar-container">
                {
                    sidebar?.map((item) => (
                        <GSidebarButton 
                            key={item.key}
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