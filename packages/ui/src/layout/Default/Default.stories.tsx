import React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Default from './';
import { ERole } from '@geek/business/user';
import { EStatus } from '@geek/business/status';
import { onLogout } from 'react-next/src/layout/config';

const meta = {
    args: {
        user: {
    id: 'xpto',
        cpf: '00256337160',
        name: 'Jorge Luiz Vieira da Silva Machado',
        email: 'jorge.vmachado@gmail.com',
        role: ERole.ADMIN,
        status: EStatus.ACTIVE,
        createdAt: new Date('2024-01-01'),
        updatedAt:  new Date('2024-01-01'),
},
        menu:[
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
        ],
        children: <div><h1>Content</h1></div>,
        onLogout: () => console.log('logout')
    },
    title: 'Layout/Default',
    argTypes: {
        user: {
            table: {
                type: { summary: 'IUser' },
                defaultValue: { summary: 'undefined' }
            },
            control: { type: 'object' }
        },
        logo: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' }
            },
            control: { type: 'text' }
        },
        menu: {
            table: {
                type: { summary: 'Menu' },
                defaultValue: { summary: 'undefined' }
            },
            control: { type: 'object' }
        },
        onLogout: {
            option: 'Logout',
            description: 'onLogout event',
        }
    },
    component: Default,
    decorators: [(Story) => <div style={{ height: '100vh' }}><Story/></div>]
} satisfies Meta<typeof Default>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLayout: Story = {
    render: (args) => (
        <Default {...args} children={args.children}/>
    )
};