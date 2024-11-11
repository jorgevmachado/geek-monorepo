import React, { useEffect, useState } from 'react';

import Default from '@geek/ui/layout/Default';

import { User } from '@geek/business';

import { authService } from '@/shared/core';

import { cookies } from '@geek/services';
import { router } from 'next/client';
import type { Menu } from '@geek/ui/layout/';

interface PageProps {
    token: string;
    children:  React.ReactNode;
}
export default function Page({ token, children }: PageProps) {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (token) {
            authService.me()
                .then((user) => setUser(user))
                .catch(() => {
                    cookies.removeGeekAccessToken();
                    router.push('/auth/login');
                });
        }
    }, [token]);

    const onLogout = () => {
        cookies.removeGeekAccessToken();
        router.push('/auth/login');
    };

    const MENU: Array<Menu> = [
        {
            key: 'navbar',
            items: [
                {
                    key: 'about',
                    label: 'Sobre',
                    path: '/about',
                    onRedirect: () => router.push('/about')
                },
                {
                    key: 'help',
                    label: 'Ajuda',
                    path: '/help',
                    onRedirect: () => router.push('/help'),
                }
            ]
        },
        {
            key: 'sidebar',
            items: [
                {
                    key: 'profile',
                    label: 'Perfil',
                    items: [
                        {
                            key: 'profile',
                            icon: 'user',
                            label: 'Meus dados',
                            path: '/profile',
                            onRedirect: () => router.push('/profile')
                        },
                    ]
                },
                {
                    key: 'logout',
                    label: '',
                    items: [
                        {
                            icon: 'exit',
                            key: 'logout',
                            label: 'Sair',
                            path: '/logout',
                            onRedirect: onLogout
                        }
                    ]
                }
            ]
        },
    ];

    return user ? (
        <Default
            logo="/logo/logo.svg"
            user={user}
            menu={MENU}
            onLogout={onLogout}>
            {children}
        </Default>
    ) : null;

}