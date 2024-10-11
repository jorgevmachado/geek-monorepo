'use client';
import { Default } from '@geek/ui';

import { config } from '../config';

export default function MyProfile() {
    const { logo, user, navbar, sidebar, onLogout } = config;
    return (
        <Default logo={logo} user={user} navbar={navbar} sidebar={sidebar} onLogout={onLogout}>
            <h3> MEUS DADOS </h3>
        </Default>
    );
}