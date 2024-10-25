import React from 'react';

export interface User {
    name: string;
    email: string;
    picture?: string;
}

interface MenuItem {
    key: string;
    icon?: React.ReactNode;
    path?: string;
    label: string;
    counter?: number;
    items?: Array<MenuItem>;
    onRedirect?: () => void;
}

export interface Menu {
    key: 'navbar' | 'sidebar';
    items: Array<MenuItem>
}