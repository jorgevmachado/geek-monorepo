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

export interface NavSidebar extends Navigation {
    icon?: React.ReactNode;
}

export interface User {
    name: string;
    email: string;
    picture?: string;
}