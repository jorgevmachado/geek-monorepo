import type { Meta, StoryObj } from '@storybook/react';

import { OColors, OIcon } from '../../interfaces';

import Icon from './Icon';

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        icon: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'react' },
            },
            options: OIcon,
            control: { type: 'select' },
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
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'react',
        size: '1em',
        color: 'neutral-28',
    },
};