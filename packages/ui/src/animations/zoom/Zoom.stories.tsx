import React, { useState } from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import  Button from '../../components/Button';

import Zoom from './Zoom';

const meta = {
    args: {
        enter: true,
        delay: 0,
        timeout: .2,
        children: <><h1>TESTE</h1></>
    },
    title: 'Animations/Zoom',
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
    },
    component: Zoom,
} satisfies Meta<typeof Zoom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        
        return (
            <>
                <Zoom {...args} enter={show}>
                    <Button>TESTE</Button>
                </Zoom>
                <Button onClick={handleToggle}>TOGGLE</Button>
            </>
        );
    }
};

export const ListTemplate: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const names = ['John', 'Paul', 'George', 'Ringo'];

        const handleToggle = () => { setShow(!show); };

        return (
            <>
                {
                    names.map((name, index) => (
                        <Zoom {...args} key={index} enter={show} delay={index * 500} children={name}/>
                    ))
                }
                <Button onClick={handleToggle}>TOGGLE</Button>
            </>
        );
    }
};