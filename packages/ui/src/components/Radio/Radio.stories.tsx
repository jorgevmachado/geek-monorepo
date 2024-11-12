import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Radio, { RadioProps } from './';
import { OContext } from '../../interfaces';

const meta = {
    args: {
        value: 'one',
        error: false,
        large: false,
        context: 'primary',
        children: 'hello World',
        disabled: false,
        modelValue: 'one',
        dataTestId: undefined,
        onItemClick: undefined,
    },
    title: 'Atoms/Radio',
    argTypes: {
        value: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'one' },
            },
            control: { type: 'text' }
        },
        error: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        large: {
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
            options: OContext.filter((context) => context !== 'error'),
            control: { type: 'select' },
        },
        disabled: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        modelValue: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'one' },
            },
            control: { type: 'text' }
        },
        dataTestId: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'radio-test' },
            },
            control: { type: 'text' }
        },
        onItemClick: {
            option: 'onItemClick',
            description: 'onItemClick event',
        },
    },
    component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const RadioComponent = (args: Omit<RadioProps, 'children'>) => {
    const [model, setModel] = useState<number | string>('one');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <form>
                <Radio
                    {...args}
                    value="one"
                    modelValue={model}
                    onItemClick={(value) => setModel(value) }>
                    label 1
                </Radio>
                <Radio
                    {...args}
                    value="two"
                    modelValue={model}
                    onItemClick={(value) => setModel(value) }>
                    label 2
                </Radio>
                <Radio
                    {...args}
                    value="three"
                    modelValue={model}
                    onItemClick={(value) => setModel(value)}
                    disabled >
                    label 3
                </Radio>
                <Radio
                    {...args}
                    value="four"
                    error
                    modelValue={model}
                    onItemClick={(value) => setModel(value)}>
                    label 4
                </Radio>
            </form>
        </div>
    );
};

export const Default: Story = {
    args: { },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const Info: Story = {
    args: {
        context: 'info',
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const Neutral: Story = {
    args: {
        context: 'neutral',
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const Success: Story = {
    args: {
        context: 'success',
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const Secondary: Story = {
    args: {
        context: 'secondary',
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const Attention: Story = {
    args: {
        context: 'attention',
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const PrimaryLarge: Story = {
    args: {
        large: true,
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};

export const SecondaryLargeWithError: Story = {
    args: {
        large: true,
        context: 'secondary',
    },
    render: (args) => (
        <RadioComponent {...args} />
    )
};


