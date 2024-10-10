export interface GSidebarItemProps {
    key: string;
    icon?: React.ReactNode;
    label: string;
    path: string;
    href?: string;
    rel?: string;
    target?: string;
    onRedirect?: () => void;
}