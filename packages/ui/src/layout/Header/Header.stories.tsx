import React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Header from './Header';


const meta = {
    args: {
        navbar: [
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