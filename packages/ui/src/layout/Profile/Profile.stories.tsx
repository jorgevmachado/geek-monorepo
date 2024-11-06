import React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import { ERole } from '@geek/business/user';
import { EStatus } from '@geek/business/status';

import { IoClose } from 'react-icons/io5';

import Icon from '../../components/Icon';

import Profile from './';

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
        children: <Icon icon={<IoClose size={30}/>}/>,
        profileMenu: {
            key: 'profile',
            path: '/meus-dados',
            label: 'Meus dados',
            onRedirect: () => console.log('profile')
        }
    },
    title: 'Layout/Profile',
    argTypes: {
        user: {
            table: {
                type: { summary: 'IUser' },
                defaultValue: { summary: 'undefined' }
            },
            control: { type: 'object' }
        },
        profileMenu: {
            table: {
                type: { summary: 'Menu' },
                defaultValue: { summary: '{}' }
            },
            control: { type: 'object' }
        }
    },
    component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Profile {...args} children={args.children} />
    )
};