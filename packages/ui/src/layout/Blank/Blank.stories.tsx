import React from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Blank from './';

const meta = {
    args: {
        children: <div><h1>CONTENT</h1></div>
    },
    title: 'Layout/Blank',
    component: Blank,

} satisfies Meta<typeof Blank>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Blank {...args}/>
    )
};