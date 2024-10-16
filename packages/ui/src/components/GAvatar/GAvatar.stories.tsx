import type { Meta, StoryObj } from '@storybook/react';

import GAvatar from './GAvatar';

const meta = {
    title: 'Atoms/GAvatar',
    component: GAvatar,
    argTypes: {
        src: {
            type: { name: 'string' },
            table: {
                defaultValue: { summary: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728950400&semt=ais_hybrid' },
            },
            control: {
                type: 'text',
            },
        },
        size: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' }
            },
            options: ['xlarge' , 'large' , 'medium' , 'small'],
            control: { type: 'select' },

        },
        name: {
            type: { name: 'string' },
            table: {
                defaultValue: { summary: 'Jorge Machado' },
            },
            control: {
                type: 'text',
            },
        },
        initialsLength: {
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '3' },
            },
            control: { type: 'number' },

        },
        hasNotification: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
    }
} satisfies Meta<typeof GAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728950400&semt=ais_hybrid',
        name: 'Jorge Machado',
    },
};

export const withOutImage: Story = {
    args: {
        name: 'Jorge Vieira Machado',
    },
};

export const withNotification: Story = {
    args: {
        name: 'Jorge Vieira Machado',
        hasNotification: true,
    },
};