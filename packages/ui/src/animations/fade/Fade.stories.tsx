import React, { useState } from 'react';

import Fade from './Fade';

import { Meta, type StoryObj } from '@storybook/react';

import Button from '../../components/Button';

const meta = {
    args: {
        enter: true,
        delay: 0,
        timeout: .2,
        children: <><h1>TESTE</h1></>
    },
    title: 'Animations/Fade',
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
    component: Fade,
} satisfies Meta<typeof  Fade>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        const handleToggle = () => { setShow(!show); };
        return (
            <>
                <Fade {...args} enter={show} children={args.children}/>
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
                        <Fade key={index}  {...args} enter={show} children={name} delay={index * 500}/>
                    ))
                }
                <Button onClick={handleToggle}>TOGGLE</Button>
            </>
        );
    }
};