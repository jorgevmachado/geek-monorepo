import React, { useEffect } from 'react';

import type { TContext } from '../../interfaces';
import { joinClass } from '../../utils';

import Icon from '../Icon';
import Text from '../Text';

import './Modal.scss';

export interface ModalProps {
    title?: string;
    isOpen: boolean;
    spacing?: 'md' | 'lg';
    context?: TContext;
    onClose(): void;
    children: React.ReactNode;
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    removeBackgroundScroll?: boolean;
}

export default function Modal({
    title,
    isOpen,
    spacing = 'md',
    context = 'primary',
    onClose,
    children,
    closeOnEsc,
    closeOnOutsideClick,
    removeBackgroundScroll,
    ...props
}: ModalProps) {
    
    const  onCloseFunction = () => {
        if (removeBackgroundScroll) {
            document.body.style.overflow = 'auto';
        }
        onClose();
    };
    
    useEffect(() => {
        if (removeBackgroundScroll && isOpen) {
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen]);

    useEffect(() => {
        if (closeOnEsc) {
            const keyDownHandler = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    onCloseFunction();
                }
            };

            window.addEventListener('keydown', keyDownHandler);

            return () => window.removeEventListener('keydown', keyDownHandler);
        }
    }, [closeOnEsc]);
    
    const classList = joinClass([
        'modal',
        'modal__fade-in',
        `modal__spacing--${spacing}`,
        `modal__context--${context}`
    ]);
    
    return isOpen ? (
        <>
            <div
                onClick={() => closeOnOutsideClick && onCloseFunction()}
                className="modal__backdrop modal__fade-in" 
            />
            <div className={classList} {...props}>
                <Icon 
                    icon="close"
                    onClick={onCloseFunction}
                    tabIndex={0} 
                    className="modal__close"
                    aria-label="close modal"
                    data-testid="on-close" />
                
                <Text tag="h2" weight="bold" variant="xlarge" tabIndex={0}>{title}</Text>
                
                <div tabIndex={0}>{children}</div>
            </div>
        </>
    ) : null;
}