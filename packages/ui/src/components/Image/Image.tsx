import React, { ReactEventHandler, useCallback, useState } from 'react';
import { CiCamera } from 'react-icons/ci';

import Icon from '../Icon';

import './Image.scss';

interface ImageProps extends React.ImgHTMLAttributes<Element> {
    readonly fit?: 'cover' | 'contain';
    readonly lazyLoad?: boolean;
    readonly fallback?: boolean;
    readonly fetchPriority?: 'high' | 'low' | 'auto';
}

export default function Image({
    fit,
    lazyLoad = false,
    fallback = true,
    onError: onErrorCallback,
    fetchPriority,
    ...props
}: ImageProps) {
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
            <div className="image__fallback" title={props.alt}>
                <Icon className="image__fallback--icon" icon={<CiCamera size={20}/>} />
            </div>
        );
    }

    return (
        <img
            {...props}
            onError={onError}
            fetchPriority={fetchPriority}
            loading={props.loading ?? (lazyLoad ? 'lazy' : undefined)}
            className={`${props.className} g-image ${fit ? `image__fit-${fit}` : ''}`}
            alt={props.alt}/>
    );
}