import { type Menu } from '@geek/ui';

import { EGender, ERole, EStatus } from '@geek/business/api';
import { User } from '@geek/business/auth';
import { cookies } from '@geek/services/cookies';

export function onLogout() {
    cookies.removeGeekAccessToken();
}

export const USER: User = {
    id: 'xpto',
    cpf: '00256337160',
    role: ERole.ADMIN,
    name: 'Jorge Luiz Vieira da Silva Machado',
    email: 'jorge.vmachado@gmail.com',
    gender: EGender.MALE,
    status: EStatus.ACTIVE,
    whatsUp: '21999999999',
    createdAt: new Date('2024-01-01'),
    updatedAt:  new Date('2024-01-01'),
    dateOfBirth: new Date('1990-01-01'),
};

export const MENU: Array<Menu> = [
    {
        key: 'navbar',
        items: [
            {
                key: 'about',
                label: 'Sobre',
                path: '/about',
                onRedirect: () => {
                    window.open('/about', '_self', 'noopener');
                }
            },
            {
                key: 'help',
                label: 'Ajuda',
                path: '/help',
                onRedirect: () => {
                    window.open('/help', '_self', 'noopener');
                },
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
                        onRedirect: () => {
                            window.open('/profile', '_self', 'noopener');
                        }
                    },
                ],
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

export const LOGO: string = '/logo/logo.svg';

interface IConfig {
    logo: string;
    user: User;
    menu: Array<Menu>;
    onLogout: () => void;
}

export const CONFIG: IConfig = {
    logo: LOGO,
    user: USER,
    menu: MENU,
    onLogout,
};