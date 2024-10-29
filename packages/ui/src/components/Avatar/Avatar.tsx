import React, { useState } from 'react';

import GImage from '../GImage';
import Text from '../Text';

import './Avatar.scss';

interface GAvatarProps extends React.HTMLAttributes<Element> {
    readonly src?: string;
    readonly size?: 'xlarge' | 'large' | 'medium' | 'small';
    readonly name: string;
    readonly initialsLength?: number;
    readonly hasNotification?: boolean;
}

const getNameInitials = (name: string, length: number): string => {
    function format(initialLetters: string[]) {
        return initialLetters
            .map((word) => word[0])
            .slice(0, length)
            .join('');
    }
    
    const initials = name
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s{2,}/, ' ')
        .toUpperCase()
        .split(' ');

    const filteredInitials = initials.filter((i) => i.length > 1);
    if (filteredInitials.length) {
        return format(filteredInitials);
    }

    return format(initials);
};

export default function Avatar({
    src,
    size = 'medium',
    name,
    initialsLength = 3,
    hasNotification,
    ...props
}: GAvatarProps) {

    const [isImageLoaded, setImageLoaded] = useState<boolean>(false);
    
    const rootClassList = `
                avatar
                ${hasNotification ? 'avatar__has-notification': ''}
                avatar__size--${size}
`;
    
    const imageClassList = `avatar__img ${isImageLoaded ? 'avatar__img--loaded' : ''}`;

    const onLoadImage = () => {
        setImageLoaded(true);
    };

    return (
        <div className={rootClassList} style={{ width: size, height: size }} {...props}>
            <div className="avatar__wrapper">
                {Boolean(src) && (
                    <GImage className={imageClassList} alt={name} src={src} onLoad={onLoadImage}/>
                )}
                {!isImageLoaded && (
                    <Text tag="span" color="neutral-28">
                        {getNameInitials(name, initialsLength)}
                    </Text>
                )}
            </div>
        </div>
    );
}