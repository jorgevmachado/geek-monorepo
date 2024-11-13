import * as React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import { EGender, ERole, EStatus } from '@geek/business';

import Sidebar from './';

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
        onLogout: () => console.log('logout'),
        showMobileMenu: false,
        handleToggleMenu: () => console.log('handle toggle menu')
    },
    title: 'Layout/Sidebar',
    argTypes: {
        user: {
            table: {
                type: { summary: 'IUser' },
                defaultValue: { summary: 'undefined' }
            },
            control: { type: 'object' }
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
        },
        showMobileMenu: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        handleToggleMenu: {
            option: 'handleToggleMenu',
            description: 'handleToggleMenu event',
        }
    },
    component: Sidebar,
    decorators: [(Story) => <div style={{ height: '50vh' }}><Story/></div>]
    
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Sidebar {...args}/>
    )
};