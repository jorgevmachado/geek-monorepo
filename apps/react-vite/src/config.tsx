import { type Menu } from '@geek/ui';

const logo = '/logo/logo.svg';

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
    user: undefined,
    menu,
    onLogout
};