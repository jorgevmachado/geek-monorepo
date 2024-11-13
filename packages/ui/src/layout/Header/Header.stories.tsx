import * as React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
    args: {
        navbar: [
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
        ],
        handleToggleMenu: () => console.log('handle toggle menu')
    },
    title: 'Layout/Header',
    argTypes: {
        logo: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' }
            },
            control: { type: 'text' }
        },
        navbar: {
            table: {
                type: { summary: 'navbar' },
                defaultValue: { summary: '[]' }
            },
            control: { type: 'object' }
        },
        handleToggleMenu: {
            option: 'handleToggleMenu',
            description: 'handleToggleMenu event',
        }
    },
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Header {...args}/>
    )
};