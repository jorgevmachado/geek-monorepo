import React, { useState } from 'react';

import { Meta, type StoryObj } from '@storybook/react';

import Modal, { ModalProps } from './Modal';
import Button from '../Button';
import { OContext } from '../../interfaces';

const meta = {
    args: {
        title: 'Title Modal',
        isOpen: false,
        spacing: 'md',
        context: 'primary',
        onClose: () => {},
        children: <h1>MODAL BODY</h1>,
        closeOnEsc: false,
        closeOnOutsideClick: false,
        removeBackgroundScroll: false,
    },
    title: 'Atoms/Modal',
    argTypes: {
        title: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Title Modal' },
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
        spacing: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: ['md', 'lg'],
            control: { type: 'radio' },
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        onClose: {},
        closeOnEsc: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        closeOnOutsideClick: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        removeBackgroundScroll: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
    },
    component: Modal,
    decorators: [(Story) => <div style={{ height: '50vh' }}><Story/></div>]
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalComponent = (args: ModalProps)=> {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>OPEN MODAL</Button>
            <Modal {...args} onClose={() => setIsOpen(false)} isOpen={isOpen}>
                {args.children}
            </Modal>
        </>
    );
};

const ArrayChildren = (length: number)=> {
    return Array
        .from({ length }, (_, index) => index + 1)
        .map((item) => <div key={item}>CARD {item}</div>);
};

export const Default: Story = {
    args: {},
    render: (args) => (
        <ModalComponent {...args} children={args.children}/>
    )
};

export const WithScroll: Story = {
    args: {
        removeBackgroundScroll: true,
    },
    render: (args) => (
        <div style={{ height: '60vh' }}>
            <ModalComponent {...args} children={ArrayChildren(25)}/>
        </div>
    )
};