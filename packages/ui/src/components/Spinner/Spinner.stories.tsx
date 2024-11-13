import Spinner from './Spinner';

import { Meta, type StoryObj } from '@storybook/react';

import { OContext } from '../../interfaces';

const meta = {
    args: {
        size: 32,
        context: 'primary'
    },
    title: 'Atoms/Spinner',
    argTypes: {
        size: {
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '32' },
            },
            control: { type: 'range', min: 16, max: 300 }
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
    },
    component: Spinner
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const Info: Story = {
    args: {
        size: 42,
        context: 'info',
    }
};

export const Error: Story = {
    args: {
        size: 52,
        context: 'error',
    }
};

export const Neutral: Story = {
    args: {
        size: 62,
        context: 'neutral',
    }
};

export const Primary: Story = {
    args: {
        size: 72,
    }
};


export const Secondary: Story = {
    args: {
        size: 82,
        context: 'secondary',
    }
};

export const Success: Story = {
    args: {
        size: 92,
        context: 'success',
    }
};

export const Attention: Story = {
    args: {
        size: 92,
        context: 'attention',
    }
};
