import React, { ReactEventHandler, useCallback, useState } from 'react';
import { CiCamera } from 'react-icons/ci';

import Icon from '../Icon';

import './GImage.scss';

interface GImageProps extends React.ImgHTMLAttributes<Element> {
    readonly fit?: 'cover' | 'contain';
    readonly lazyLoad?: boolean;
    readonly fallback?: boolean;
    readonly fetchPriority?: 'high' | 'low' | 'auto';
}

export default function GImage( {
    fit,
    lazyLoad = false,
    fallback = true,
    onError: onErrorCallback,
    fetchPriority,
    ...props
}: GImageProps) {
    const [isInvalid, setIsInvalid] = useState(false);

    const onError = useCallback<ReactEventHandler<HTMLImageElement>>(
        (event) => {
            setIsInvalid(true);
            return onErrorCallback?.(event);
        },
        [setIsInvalid, onErrorCallback]
    );

    if (isInvalid && fallback) {
        return (
            <div className="g-image__fallback" title={props.alt}>
                <Icon className="g-image__fallback--icon" icon={<CiCamera size={20}/>} />
            </div>
        );
    }

    return (
        <img
            {...props}
            onError={onError}
            fetchPriority={fetchPriority}
            loading={props.loading ?? (lazyLoad ? 'lazy' : undefined)}
            className={`${props.className} g-image ${fit ? `g-image__fit-${fit}` : ''}`}
            alt={props.alt}/>
    );
}