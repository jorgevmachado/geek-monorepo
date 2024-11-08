import React, { useState } from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Button from '../../components/Button';

import Slide from './Slide';

const meta = {
    args: {
        enter: true,
        delay: 50,
        timeout: .2,
        children: <><h1>TESTE</h1></>,
        direction: 'right',
    },
    title: 'Animations/Slide',
    argTypes: {
        enter: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' }
            },
            control: { type: 'boolean' },
        },
        delay: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '0' }
            },
            control: { type: 'number' },
        },
        timeout: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '.2' }
            },
            control: { type: 'number' },
        },
        direction: {
            name: 'direction',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'right' }
            },
            options: ['top', 'right', 'bottom', 'left'],
            control: { type: 'radio' },
            description: 'Direction of the animation.',
        },
    },
    component: Slide,
} satisfies Meta<typeof  Slide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        return (
            <>
                <Slide {...args} enter={show} children={args.children}/>
                <Button onClick={handleToggle}>RIGHT</Button>
            </>
        );
    }
};

export const Right: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        return (
            <>
                <Slide {...args} enter={show} direction="right" children={args.children}/>
                <Button onClick={handleToggle}>RIGHT</Button>
            </>
        );
    }
};


export const Left: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        return (
            <>
                <Slide {...args} enter={show} direction="left" children={args.children}/>
                <Button onClick={handleToggle}>LEFT</Button>
            </>
        );
    }
};

export const Top: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        return (
            <>
                <Slide {...args} enter={show} direction="top" children={args.children}/>
                <Button onClick={handleToggle}>TOP</Button>
            </>
        );
    }
};

export const Bottom: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        return (
            <>
                <Slide {...args} enter={show} direction="bottom" children={args.children}/>
                <Button onClick={handleToggle}>BOTTOM</Button>
            </>
        );
    }
};