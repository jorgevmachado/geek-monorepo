import type { Meta, StoryObj } from '@storybook/react';

import GImage from './';

const meta = {
    title: 'Atoms/Image',
    component: GImage,
    argTypes: {
        fit: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'cover' },
            },
            options: ['cover', 'contain'],
            control: { type: 'radio' },
        },
        lazyLoad: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        fallback: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        fetchPriority: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'auto' },
            },
            options: ['high', 'low', 'auto'],
            control: { type: 'radio' },
        },
    }
} satisfies Meta<typeof GImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://w7.pngwing.com/pngs/173/127/png-transparent-geek-logo-graphy-others-photography-artwork-sales-thumbnail.png',
    },
};