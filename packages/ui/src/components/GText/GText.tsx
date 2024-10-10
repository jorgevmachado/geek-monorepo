import { HTMLAttributes } from 'react';

import { TColors, TVariant, TWeight } from '../../interfaces';

import './GText.scss';
import { formatText, isReactNode, } from './config';
import { IFormattedText } from './interface';

type TDisplay =  'ALL' | 'DESKTOP' | 'MOBILE';

interface FormatTextProps {
    display?: TDisplay;
    className?: string;
    formattedText: IFormattedText;
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


interface GTextProps extends HTMLAttributes<HTMLSpanElement> {
    tag?: string;
    color?: TColors;
    weight?: TWeight;
    variant?: TVariant;
    htmlFor?: string;
    children: React.ReactNode | string;
}

export default function GText({
    tag = 'p',
    color = 'neutral-28',
    weight = 'regular',
    variant = 'regular',
    htmlFor,
    children,
    className,
    ...props
}: GTextProps) {

    const CustomTag = tag as React.ElementType;
    const formattedText = isReactNode(children) ? null : formatText(children as string);
    return (
        <CustomTag
            className={`
                g-text
                g-u-color-${color}
                g-text__variant--${variant}
                g-text__weight--${weight}
                ${className}
            `}
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