import React from 'react';

export type TRadius = 'none' | 'small' | 'regular' | 'large' | 'rounded' | 'circle';

export const ORadius: Array<TRadius> = ['none' , 'small' , 'regular' , 'large' , 'rounded' , 'circle'];

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    radius?: TRadius;
    height?: string;
    freeWidth?: string;
    freeHeight?: string;
}

