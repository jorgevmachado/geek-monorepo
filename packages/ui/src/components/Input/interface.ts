import React from 'react';

type InputPropsItem = Pick<
    React.HTMLProps<Element>,
    'onBlur' |
    'onInput' |
    'onFocus' |
    'onChange' |
    'onKeyDown' |
    'onMouseDown'
>;

type HostProps = Omit<React.HTMLProps<HTMLDivElement>, keyof InputPropsItem>;

export interface InputProps extends InputPropsItem, HostProps {
    tip?: string;
    type?: string;
    addon?: string;
    value?: string;
    label?: string;
    variant?: 'regular' | 'large';
    disabled?: boolean;
    multiline?: boolean;
    isInvalid?: boolean;
    autoFocus?: boolean;
    dataCyName?: string;
    helperText?: React.ReactNode;
    iconContext?: 'primary' | 'secondary' | 'neutral';
    floatingLabel?: boolean;
    invalidMessage?: string;
    hasFloatingSlots?: boolean;
}