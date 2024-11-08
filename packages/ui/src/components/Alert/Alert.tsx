import React from 'react';

import { joinClass } from '../../utils';

import Icon from '../Icon';

import './Alert.scss';

interface AlertProps {
    type: 'info' | 'lamp' | 'error' | 'warning' | 'success';
    link?: {
        text: string;
        clickAction: () => void;
    };
    onClose?: () => void;
    children: React.ReactNode;
    hasCloseButton?: boolean;
}

export default function Alert({
    type,
    link,
    onClose,
    children,
    hasCloseButton
    }: AlertProps) {

    const classList = joinClass([
        'alert',
        `alert__type--${type}`,
        `${hasCloseButton ? 'alert__borderless' : ''}`
    ]);

  return (
    <div className={classList}>
        <Icon icon={type} className="alert__icon--type" />
        <div className="alert__content">
            {children}
            {
                link && (
                    <span className="alert__content--link" onClick={link.clickAction}>
                        {link.text}
                    </span>
                )
            }
        </div>
        {
            hasCloseButton && (
                <Icon icon="close" className="alert__icon--close" onClick={onClose} />
            )
        }
      
    </div>
  );
};
