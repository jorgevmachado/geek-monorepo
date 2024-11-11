import React from 'react';

import Default from '@geek/ui/layout/Default';

import { CONFIG } from '@/layout/config';
import { User } from '@geek/business';

interface PageProps {
    user: User;
    children:  React.ReactNode;
}
export default function Page({ user, children }: PageProps) {

    return (
        <Default {...CONFIG}>
            {children}
            {user.name}
        </Default>
    );

}