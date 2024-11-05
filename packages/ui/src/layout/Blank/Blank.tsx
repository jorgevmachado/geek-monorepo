import React from 'react';

import './Blank.scss';

interface BlankProps {
    children: React.ReactNode;
}
export default function Blank({ children }: BlankProps) {
    return <div className="blank">{children}</div>;
}