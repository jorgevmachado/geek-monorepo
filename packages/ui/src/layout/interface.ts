interface Navigation {
    key: string;
    label: string;
    path: string;
    onRedirect?: () => void;
}
export interface Navbar extends Navigation {
    type: 'button' | 'dropdown';
    items?: Array<Navbar>;
}

interface NavSidebarItem extends Navigation {
    icon?: React.ReactNode;
    counter?: number;
}

export interface NavSidebar {
    key: string;
    label?: string;
    items: Array<NavSidebarItem>;
}

export interface User {
    name: string;
    email: string;
    picture?: string;
}