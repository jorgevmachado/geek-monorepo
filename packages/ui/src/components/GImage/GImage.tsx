import './GImage.scss';
import { ReactEventHandler, useCallback, useState } from 'react';
import { CiCamera } from 'react-icons/ci';

import GIcon from '../GIcon';

interface GImageProps extends React.ImgHTMLAttributes<Element> {
    readonly fit?: 'cover' | 'contain';
    readonly lazyload?: boolean;
    readonly fallback?: boolean;
    readonly className?: string;
    readonly fetchpriority?: 'high' | 'low' | 'auto';
}

export default function GImage( {
    alt,
    fit,
    className,
    lazyload = false,
    fallback = false,
    onError: onErrorCallback,
    loading,
    fetchpriority,
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
            <div className="l-image--fallback" title={alt}>
                <GIcon icon={<CiCamera/>} />
            </div>
        );
    }

    return (
        <img
            {...props}
            onError={onError}
            fetchPriority={fetchpriority}
            loading={loading ?? (lazyload ? 'lazy' : undefined)}
            className={`${className} g-image ${fit ? `g-image__fit-${fit}` : ''}`}
            alt={alt}/>
    );
}