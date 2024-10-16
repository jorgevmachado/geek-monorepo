import type { Meta, StoryObj } from '@storybook/react';

import { OAppearance, OContext, OIconPosition, OSize, OType } from './interface';

import GButton from './GButton';


const meta = {
    title: 'Atoms/GButton',
    component: GButton,
    argTypes: {
        icon: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'react' },
            },
        },
        type: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'button' },
            },
            options: OType,
            control: { type: 'radio' },
        },
        size: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OSize,
            control: { type: 'radio' },
        },
        fluid: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        rounded: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral' },
            },
            options: OContext,
            control: { type: 'radio' },
        },
        selected: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        children: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Button' },
            },
        },
        disabled: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        appearance: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'standard' },
            },
            options: OAppearance,
            control: { type: 'radio' },
        },
        iconPosition: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
            },
            options: OIconPosition,
            control: { type: 'radio' },
        },
    }
} satisfies Meta<typeof GButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default',
    },
};

export const Success: Story = {
    args: {
        context: 'success',
        size: 'large',
        children: 'Success',
    },
};

export const Error: Story = {
    args: {
        context: 'error',
        size: 'large',
        children: 'Error',
    },
};


export const Info: Story = {
    args: {
        context: 'info',
        size: 'large',
        children: 'Info',
    },
};

export const Outline: Story = {
    args: {
        size: 'large',
        context: 'neutral',
        appearance: 'outline',
        children: 'Outline',
    },
};

export const Link: Story = {
    args: {
        size: 'large',
        context: 'link',
        children: 'Link',
    },
};

export const Borderless: Story = {
    args: {
        size: 'large',
        context: 'secondary',
        children: 'Borderless',
        appearance: 'borderless',
    },
};

export const Select: Story = {
    args: {
        size: 'large',
        context: 'secondary',
        children: 'Select',
        appearance: 'select',
    },
};

export const IconButton: Story = {
    args: {
        size: 'large',
        context: 'info',
        children: 'iconButton',
        appearance: 'iconButton',
    },
};

export const ButtonWithIcon: Story = {
    args: {
        icon: 'react',
        size: 'large',
        context: 'primary',
        children: 'Button With Icon',
        appearance: 'standard',
    },
};