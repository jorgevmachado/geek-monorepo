import React from 'react';

import { Default } from '@geek/ui';

import { CONFIG } from '@/layout/config';

interface PageProps {
    children:  React.ReactNode;
}
export default function Page({ children }: PageProps) {
    
    return (
        <Default {...CONFIG}>
            {children}
        </Default>
    );

}