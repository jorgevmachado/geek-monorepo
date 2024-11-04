import { ERole, IUser } from '@geek/business/user';
import { EStatus } from '@geek/business/status';
import { type Menu } from '@geek/ui';

export function onLogout() {
    console.log('Logout');
}

export const USER: IUser = {
    id: 'xpto',
    cpf: '00256337160',
    name: 'Jorge Luiz Vieira da Silva Machado',
    email: 'jorge.vmachado@gmail.com',
    role: ERole.ADMIN,
    status: EStatus.ACTIVE,
    createdAt: new Date('2024-01-01'),
    updatedAt:  new Date('2024-01-01'),
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
    user: IUser;
    menu: Array<Menu>;
    onLogout: () => void;
}

export const CONFIG: IConfig = {
    logo: LOGO,
    user: USER,
    menu: MENU,
    onLogout,
};