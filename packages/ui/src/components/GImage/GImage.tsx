import React, { ReactEventHandler, useCallback, useState } from 'react';
import { CiCamera } from 'react-icons/ci';

import GIcon from '../GIcon';

import './GImage.scss';

interface GImageProps extends React.ImgHTMLAttributes<Element> {
    readonly fit?: 'cover' | 'contain';
    readonly lazyLoad?: boolean;
    readonly fallback?: boolean;
    readonly className?: string;
    readonly fetchPriority?: 'high' | 'low' | 'auto';
}

export default function GImage( {
    alt,
    fit,
    className,
    lazyLoad = false,
    fallback = true,
    onError: onErrorCallback,
    loading,
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
            <div className="g-image__fallback" title={alt}>
                <GIcon className="g-image__fallback--icon" icon={<CiCamera size={20}/>} />
            </div>
        );
    }

    return (
        <img
            {...props}
            onError={onError}
            fetchPriority={fetchPriority}
            loading={loading ?? (lazyLoad ? 'lazy' : undefined)}
            className={`${className} g-image ${fit ? `g-image__fit-${fit}` : ''}`}
            alt={alt}/>
    );
}