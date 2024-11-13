import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Text from '../Text';

import Alert from './';
import { OAlert } from '../../interfaces';

const meta = {
    args: {
        type: 'success',
        children: 'Hello, World!',
    },
    title: 'Atoms/Alert',
    argTypes: {
        type: {
            options: OAlert,
            control: { type: 'select' },
        },
    },
    component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: 'Success Alert!' }
};

export const Info: Story = {
    args: {
        type: 'info',
        children: 'Info Alert!',
    }
};

export const Lamp: Story = {
    args: {
        type: 'lamp',
        children: 'Lamp Alert!',
    }
};

export const Warning: Story = {
    args: {
        type: 'warning',
        children: 'Warning Alert!',
    }
};

export const Error: Story = {
    args: {
        type: 'error',
        children: 'Error Alert!',
        onClose: () => alert('Closed!'),
        hasCloseButton: true,
    }
};

export const WithLink: Story = {
    args: {
        type: 'success',
        children: 'Success Alert!',
        link: {
            text: 'Click me!',
            clickAction: () => alert('Clicked!')
        }
    }
};

export const WithLinkAndManyLine: Story = {
    args: {
        type: 'success',
        link: {
            text: 'Click me!',
            clickAction: () => alert('Clicked!')
        },
        children: (
            <div>
                <Text>This is a message.</Text>
                <Text>With many lines.</Text>
            </div>
        ),
        onClose: () => alert('Closed!'),
        hasCloseButton: true,
    }
};