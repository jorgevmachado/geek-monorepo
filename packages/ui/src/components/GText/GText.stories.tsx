import type { Meta, StoryObj } from '@storybook/react';

import { OColors, OVariant, OWeight } from '../../interfaces';

import GText from './GText';

const meta = {
    title: 'Atoms/GText',
    component: GText,
    argTypes: {
        tag: {
            type: {
                name: 'string',
            },
            table: {
                defaultValue: { summary: 'p' },
            },
            control: {
                type: 'text',
            },
            description: 'Tag HTML element example: p, h1, h2, h3, h4, h5, h6',
        },
        color: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral-darker' }
            },
            options: OColors,
            control: { type: 'select' },

        },
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'select' },

        },
        variant: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'body-regular' },
            },
            options: OVariant,
            control: { type: 'select' },
        },
        children: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Hello, World!' },
            },
        }
    }
} satisfies Meta<typeof GText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tag: 'h1',
        children: 'Hello, World!',
    },
};

export const FirstWordItalic: Story = {
    args: {
        tag: 'p',
        children: '_Hello_, World!',
    }
};

export const FirstWordBold: Story = {
    args: {
        tag: 'p',
        children: '*Hello*, World!',
    }
};

export const NextLine: Story = {
    args: {
        tag: 'h1',
        children: 'Hello,++ World!',
    }
};
