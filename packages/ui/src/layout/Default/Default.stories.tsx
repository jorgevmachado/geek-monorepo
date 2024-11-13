import * as React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Default from './';

import { EGender, ERole, EStatus } from '@geek/business';

const meta = {
    args: {
        user: {
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
        },
        menu:[
            {
            key: 'navbar',
            items: [
                {
                    key: 'about',
                    label: 'Sobre',
                    path: '/about',
                    onRedirect: () => console.log('about')
                },
                {
                    key: 'help',
                    label: 'Ajuda',
                    path: '/help',
                    onRedirect: () => console.log('help')
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
                onRedirect: () => console.log('profile')
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
                onRedirect: () => console.log('logout')
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