import { Meta, StoryObj } from '@storybook/react';

import { OContext } from '../../interfaces/colors';
import { OIconPosition } from '../../interfaces/icons';
import { OType } from '../../interfaces/actions';
import { OWeight } from '../../interfaces/fonts';

import { OAppearance } from './interface';
import { OSize,  } from './interface';

import GAction from './GAction';

const meta = {
    title: 'Atoms/GAction',
    component: GAction,
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
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'radio' },
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
} satisfies Meta<typeof GAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        context: 'neutral',
        children: 'Button',
    }
};

export const Primary: Story = {
    args: {
        context: 'primary',
        children: 'Primary'
    }
};

export const Secondary: Story = {
    args: {
        context: 'secondary',
        children: 'Secondary'
    }
};

export const Info: Story = {
    args: {
        context: 'info',
        children: 'Info'
    }
};

export const Error: Story = {
    args: {
        context: 'error',
        children: 'Error'
    }
};

export const Attention: Story = {
    args: {
        context: 'attention',
        children: 'Attention'
    }
};

export const PrimaryLink: Story = {
    args: {
        type: 'link',
        context: 'primary',
        children: 'Link'
    }
};

export const PrimaryLinkNavbar: Story = {
    args: {
        type: 'link',
        context: 'primary',
        children: 'Link Navbar',
        appearance: 'navbar',
    }
};

export const PrimaryLinkDropdown: Story = {
    args: {
        type: 'link',
        context: 'primary',
        children: 'Link Dropdown',
        appearance: 'dropdown',
    }
};

export const PrimaryButtonSelect: Story = {
    args: {
        type: 'button',
        context: 'primary',
        children: 'Select',
        appearance: 'select',
    }
};