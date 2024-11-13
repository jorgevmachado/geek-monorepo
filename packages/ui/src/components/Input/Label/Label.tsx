import React from 'react';

import Text from '../../Text';

import './Label.scss';

interface LabelProps extends React.HTMLProps<HTMLDivElement> {
    tip?: string;
    label?: string;
    componentId?: string;
}

export default function Label({
tip,
label,
componentId,
className,
...props    
}: LabelProps) {
    const tag = componentId ? 'label' : 'legend';
    return (
        <div className={`label ${className}`} {...props}>
            {
                label && (
                    <Text tag={tag} htmlFor={componentId} className="label__text">
                        {label}
                    </Text>
                )
            }
            {
                tip && (
                    <Text tag="span" color="neutral-28" className="label__tip" variant="small">
                        {tip}
                    </Text>
                )
            }
        </div>
    );
}