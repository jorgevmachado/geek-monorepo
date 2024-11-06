import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Link, { OAppearance } from './';
import {
    OColors,
    OContext,
    OIcon,
    OIconPosition,
    OSize,
    OWeight,
} from '../../interfaces';

const meta = {
    args: {
        icon: undefined,
        size: 'regular',
        weight: 'regular',
        context: 'neutral',
        children: 'Exemplo',
        iconColor: 'neutral-28',
        appearance: 'standard',
        iconPosition: 'left',
        iconClassName: undefined,
        notificationCounter: undefined,
    },
    title: 'Atoms/Link',
    component: Link,
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
                defaultValue: { summary: 'regular' },
            },
            options: OSize,
            control: { type: 'radio' }
        },
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'radio' }
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        iconColor: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral-100' },
            },
            options: OColors,
            control: { type: 'select' },
        },
        appearance: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'standard' },
            },
            options: OAppearance,
            control: { type: 'select' },
        },
        iconPosition: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
            },
            options: OIconPosition,
            control: { type: 'radio' }
        },
        iconClassName: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        notificationCounter: {
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
            control: { type: 'number' },
        },
    }
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Links: Story = {
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'column', gap: '8px'}}>
            <Link {...args}>Neutral</Link>
            <Link {...args} context="primary">Primary</Link>
            <Link {...args} context="secondary">Secondary</Link>
            <Link {...args} context="info">Info</Link>
            <Link {...args} context="attention">Attention</Link>
            <Link {...args} context="error">Error</Link>
        </div>
    )
};

export const Menu: Story = {
    args: {
        appearance: 'menu',
    },
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'column', gap: '8px'}}>
            <Link {...args}>Neutral</Link>
            <Link {...args} context="primary">Primary</Link>
            <Link {...args} context="secondary">Secondary</Link>
            <Link {...args} context="info">Info</Link>
            <Link {...args} context="attention">Attention</Link>
            <Link {...args} context="error">Error</Link>
        </div>
    )
};

export const WithIconLeft: Story = {
    args: {
        icon: 'react',
        context: 'primary',
        children: 'With Icon Left',
    }
}

export const WithIconRight: Story = {
    args: {
        icon: 'react',
        context: 'primary',
        children: 'With Icon Right',
        iconPosition: 'right'
    }
}

export const WithNotificationCount: Story = {
    args: {
        context: 'primary',
        children: 'With Notification Count',
        notificationCounter: 9,
    }
}