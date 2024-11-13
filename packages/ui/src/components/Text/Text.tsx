import React from 'react';

import { TColors, TVariant, TWeight } from '../../interfaces';
import { joinClass } from '../../utils';

import { formatText, isReactNode, } from './config';
import { IFormattedText } from './interface';

import './Text.scss';

type TDisplay =  'ALL' | 'DESKTOP' | 'MOBILE';

interface FormatTextProps {
    readonly display?: TDisplay;
    readonly className?: string;
    readonly formattedText: IFormattedText;
}

function FormatText({ display, className, formattedText }: FormatTextProps) {
    if (!formattedText.replaced) {
        return <span key={display} className={className}>{formattedText.cleaned}</span>;
    }

    if (!display || display === 'ALL') {
        return <span key={display} className={className}>{formattedText.replaced}</span>;
    }

    return <span key={display}>fuck</span>;

}


interface TextProps extends React.HTMLProps<Element> {
    readonly tag?: string;
    readonly color?: TColors;
    readonly weight?: TWeight;
    readonly variant?: TVariant;
    readonly htmlFor?: string;
    readonly children: React.ReactNode | string;
}

export default function Text({
    tag = 'p',
    color = 'neutral-28',
    weight = 'regular',
    variant = 'regular',
    htmlFor,
    children,
    className,
    ...props
}: TextProps) {

    const CustomTag = tag as React.ElementType;

    const formattedText = isReactNode(children) ? null : formatText(children as string);
    return (
        <CustomTag
            className={joinClass([
                'text',
                `g-u-color-${color}`,
                `text__variant--${variant}`,
                `text__weight--${weight}`,
                `${className}`,
            ])}
            htmlFor={htmlFor}
            {...props}
        >
            { 
                !formattedText 
                    ? children 
                    : <FormatText formattedText={formattedText}/> 
            }
        </CustomTag>
    );
}