import React, { useEffect, useRef, useState } from 'react';

import './GDropdown.scss';

interface DropdownProps {
    isOpen?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    children: React.ReactNode;
    activator: React.ReactNode;
    onClickOutside?: (value: boolean) => void;
}

export default function GDropdown( { isOpen, disabled, onChange, children, activator, onClickOutside }: DropdownProps ) {
    function useOutsideClick(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    onClickOutside && onClickOutside(true);
                    setIsOpenModel(false);
                    onChange && onChange(isOpenModel);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);

    useEffect(() => {
        if (isOpen !== undefined) {
            setIsOpenModel(isOpen);
        }
    }, [isOpen]);

    useOutsideClick(wrapperRef);

    const [isOpenModel, setIsOpenModel] = useState(false);

    const handleIsOpen = () => {
        if (isOpen !== undefined) {
            return isOpen;
        }
        return isOpenModel;
    };

    const handleClick = () => {
        if (disabled) {
            return;
        }
        if (isOpen === undefined) {
            setIsOpenModel(!isOpenModel);
        }

        if (onChange) {
            onChange(!isOpenModel);
        }
    };

    return (
        <div className="g-dropdown">
            <div className="g-dropdown__trigger" onClick={handleClick}>
                {activator}
            </div>
            {handleIsOpen() && (
                <div className="g-dropdown__content" tabIndex={-1}>
                    {children}
                </div>
            )}

        </div>
    );
}