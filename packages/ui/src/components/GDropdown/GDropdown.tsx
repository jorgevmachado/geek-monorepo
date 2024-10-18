import React, { useEffect, useState } from 'react';

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

import { TColors, TContext, TIconPosition, TType } from '../../interfaces';
import joinClass from '../../utils/joinClass';

import GAction from '../GAction';

import type { GDropdownProps } from './interface';

import './GDropdown.scss';

interface DropdownActivatorProps {
    type?: TType;
    label?: string;
    context?: TContext;
    iconPosition?: TIconPosition;
}

function DropdownActivator({
    type= 'button',
    label = 'open',
    context = 'neutral',
    iconPosition = 'right'
}: DropdownActivatorProps) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const icon = isDropdownOpen ? <MdOutlineArrowDropUp size={28} /> : <MdOutlineArrowDropDown size={28} />;
    const handleOpenDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className={`g-dropdown__activator--${type}`} >
            <GAction
                icon={icon}
                type={type}
                onClick={handleOpenDropdown}
                context={context}
                iconColor={`${context}-100` as TColors}
                appearance="dropdown"
                iconPosition={iconPosition}>
                { label }
            </GAction>
        </div>
    );
}



export default function GDropdown( {
    type = 'button',
    label,
    context = 'neutral',
    isOpen,
    disabled,
    onChange,
    children,
    activator,
    appearance,
    onClickOutside
}: GDropdownProps ) {

    const [isOpenModel, setIsOpenModel] = useState(false);

    // function useOutsideClick(ref: any) {
    //     useEffect(() => {
    //         function handleClickOutside(event: any) {
    //             if (ref.current && !ref.current.contains(event.target)) {
    //                 onClickOutside && onClickOutside(true);
    //                 setIsOpenModel(false);
    //                 onChange && onChange(isOpenModel);
    //             }
    //         }
    //         document.addEventListener('mousedown', handleClickOutside);
    //         return () => {
    //             document.removeEventListener('mousedown', handleClickOutside);
    //         };
    //     }, [ref]);
    // }

    // const wrapperRef = useRef(null);

    useEffect(() => {
        if (isOpen !== undefined) {
            setIsOpenModel(isOpen);
        }
    }, [isOpen]);

    // useOutsideClick(wrapperRef);



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
                {
                    !activator
                        ? <DropdownActivator label={label} type={type} context={context}/>
                        : activator
                }
            </div>


            {handleIsOpen() && (
                <div className={joinClass([
                    'g-dropdown__content',
                    `g-dropdown__content--context-${context}`,
                    `g-dropdown__content--appearance-${appearance}`
                    ])} tabIndex={-1}>
                    {children}
                </div>
            )}

        </div>
    );
}