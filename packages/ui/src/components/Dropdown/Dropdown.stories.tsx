import React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import { OContext, OType, TContext } from '../../interfaces';

import Button, { TAppearance } from '../Button';

import { OAppearance } from './interface';

import Dropdown from './';

const meta = {
    args: {
        type: 'button',
        label: 'label',
        isOpen: false,
        context: 'neutral',
        disabled: false,
        activator: undefined,
        appearance: 'standard',
    },
    title: 'Atoms/Dropdown',
    argTypes: {
        type: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'button' },
            },
            options: OType,
            control: { type: 'select' },
        },
        label: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'label' },
            },
            control: { type: 'text' }
        },
        isOpen: {
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
        disabled: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        onChange: {
            action: 'onChange',
            description: 'onChange event',
        },
        appearance: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'standard' },
            },
            options: OAppearance,
        },
        onClickOutside: {
            option: 'ClickOutside',
            description: 'onClickOutside event',
        }
    },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const Buttons = ({ context = 'primary', appearance = 'standard' }: {context?: TContext, appearance?: TAppearance}) => {
    return (
        <>
            <Button
                context={context}
                iconColor={`${context}-100`}
                appearance={appearance}>
                BUTTON 1
            </Button>
            <Button
                context="primary"
                iconColor={`${context}-100`}
                appearance={appearance}>
                BUTTON 2
            </Button>
            <Button
                context="primary"
                iconColor={`${context}-100`}
                appearance={appearance}>
                BUTTON 2
            </Button>
        </>
    );
};

export const Default: Story = {
    render: (args) => (
        <Dropdown {...args}>
            <Buttons/>
        </Dropdown>
    )
};

export const DropdownsButtons: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const DropdownsLink: Story = {
    args: {
        type: 'link'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const Navbar: Story = {
    args: {
        appearance: 'navbar'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const Sidebar: Story = {
    args: {
        appearance: 'sidebar'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};