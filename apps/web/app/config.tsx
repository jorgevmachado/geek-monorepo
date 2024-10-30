import { ERole, EStatus, type IUser } from '@geek/business';
import { type Menu } from '@geek/ui';

const logo = '/logo/logo.svg';

const user: IUser = {
    id: 'xpto',
    cpf: '00256337160',
    name: 'Jorge Luiz Vieira da Silva Machado',
    email: 'jorge.vmachado@gmail.com',
    role: ERole.ADMIN,
    status: EStatus.ACTIVE,
    createdAt: new Date('2024-01-01'),
    updatedAt:  new Date('2024-01-01'),
};

const onLogout = () => {
    console.log('logout');
};

const menu: Array<Menu> = [
    {
        key: 'navbar',
        items: [
            {
                key: 'about',
                label: 'Sobre',
                path: '/about',
                onRedirect: () => {
                    window.open('/about', '_self', 'noopener');
                },
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
                key: 'pokemons',
                label: 'Pokemons',
                items: [
                    {
                        key: 'my-pokemons',
                        label: 'Meus Pokemons',
                        path: '/pokemons',
                        counter: 96,
                        onRedirect: () => {
                            window.open('/pokemons', '_self', 'noopener');
                        }
                    }
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

export const config = {
    logo,
    user,
    menu,
    onLogout
};