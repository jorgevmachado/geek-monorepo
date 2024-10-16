import React from 'react';

import './HeaderButton.scss';

interface HeaderButtonProps {
    label: string;
    onRedirect?: () => void;
}

export default function HeaderButton({ label, onRedirect }: HeaderButtonProps) {
    return (
        <a className="header-button" onClick={onRedirect}  data-testid="header-button">
        {label}
        </a>
    );
};