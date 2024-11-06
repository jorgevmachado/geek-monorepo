import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button, { OAppearance } from './';
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
        fluid: false,
        focus: false,
        weight: 'regular',
        rounded: false,
        context: 'neutral',
        selected: false,
        disabled: false,
        iconColor: 'neutral-28',
        appearance: 'standard',
        iconPosition: 'left',
        iconClassName: undefined,
        notificationCounter: undefined,
    },
    title: 'Atoms/Button',
    component: Button,
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
        fluid: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        focus: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'radio' }
        },
        rounded: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        selected: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        disabled: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Exemplo',
    }
};

export const Primary: Story = {
    args: {
        context: 'primary',
        children: 'Primary',
    }
};

export const Secondary: Story = {
    args: {
        context: 'secondary',
        children: 'Secondary',
    }
};

export const Info: Story = {
    args: {
        context: 'info',
        children: 'Info',
    }
};

export const Error: Story = {
    args: {
        context: 'error',
        children: 'Error',
    }
};

export const Attention: Story = {
    args: {
        context: 'attention',
        children: 'Attention',
    }
};

export const IconOnly: Story = {
    args: {
      icon: 'react',
      context: 'primary',
      iconColor: 'neutral-70',
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
            <Button {...args} size="small" aria-label="small"></Button>
            <Button {...args} size="regular" aria-label="regular"></Button>
            <Button {...args} size="large" aria-label="large"></Button>
        </div>
    )
}

export const Rounded: Story = {
    args: {
        rounded: true,
        context: 'secondary',
        children: 'Rounded',
    }
};

export const Sidebar: Story = {
    args: {
        appearance: 'sidebar',
    },
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'column', gap: '8px'}}>
            <Button {...args}>Neutral</Button>
            <Button {...args} context="primary">Primary</Button>
            <Button {...args} context="secondary">Secondary</Button>
            <Button {...args} context="info">Info</Button>
            <Button {...args} context="attention">Attention</Button>
        </div>
    )
}

export const Outline: Story = {
    args: {
        appearance: 'outline',
    },
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'column', gap: '8px'}}>
            <Button {...args}>Neutral</Button>
            <Button {...args} context="primary">Primary</Button>
            <Button {...args} context="secondary">Secondary</Button>
            <Button {...args} context="info">Info</Button>
            <Button {...args} context="attention">Attention</Button>
        </div>
    )
}

export const Standard: Story = {
    args: {
        appearance: 'standard',
    },
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'column', gap: '8px'}}>
            <Button {...args}>Neutral</Button>
            <Button {...args} context="primary">Primary</Button>
            <Button {...args} context="secondary">Secondary</Button>
            <Button {...args} context="info">Info</Button>
            <Button {...args} context="attention">Attention</Button>
        </div>
    )
}

export const Borderless: Story = {
    args: {
        appearance: 'borderless',
    },
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'column', gap: '8px'}}>
            <Button {...args}>Neutral</Button>
            <Button {...args} context="primary">Primary</Button>
            <Button {...args} context="secondary">Secondary</Button>
            <Button {...args} context="info">Info</Button>
            <Button {...args} context="attention">Attention</Button>
        </div>
    )
}

export const IconButton: Story = {
    args: {
        appearance: 'iconButton',
    },
    render: (args) => (
        <div style={{display: 'flex',  flexDirection: 'row', gap: '8px'}}>
            <Button {...args}>Neutral</Button>
            <Button {...args} context="primary">Primary</Button>
            <Button {...args} context="secondary">Secondary</Button>
            <Button {...args} context="info">Info</Button>
            <Button {...args} context="attention">Attention</Button>
        </div>
    )
}

export const Fluid: Story = {
    args: {
        fluid: true,
        children: 'Fluid',
    }
}