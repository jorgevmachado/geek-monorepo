import React from 'react';

import { joinClass } from '../../utils';

import { SkeletonProps } from './interface';

import './Skeleton.scss';

export default function Skeleton({
    width = '40',
    radius = 'none',
    height = '40',
    freeWidth,
    freeHeight,
    ...props
}: SkeletonProps) {
    
    const classList = joinClass([
        `skeleton__radius--${radius}`,
        props.className
    ]);
    
    return (
        <div 
            {...props}
            style={{ width: freeWidth, height: freeHeight }}
            className="skeleton"
            data-testid="skeleton">
            <div
                style={{
                    width: freeWidth || `${width}px`,
                    height: freeHeight || `${height}px`,
                }}
                className={classList}>
                
            </div>
        </div>
    );
}