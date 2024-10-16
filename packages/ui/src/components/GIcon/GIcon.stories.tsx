import type { Meta, StoryObj } from '@storybook/react';

import { OColors } from '../../interfaces';

import GIcon from './GIcon';

const meta = {
    title: 'Atoms/GIcon',
    component: GIcon,
    argTypes: {
        icon: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'react' },
            },
        },
        size: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '1em' },
            },
        },
        color: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral-28' }
            },
            options: OColors,
            control: { type: 'select' },

        },
    }
} satisfies Meta<typeof GIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'react',
        size: '1em',
        color: 'neutral-28',
    },
};