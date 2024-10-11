'use client';
import { Default } from '@geek/ui';

import { config } from '../config';

export default function Favorites() {
    const { user, logo, navbar, sidebar, onLogout } = config;
    return (
        <Default user={user} logo={logo} navbar={navbar} sidebar={sidebar} onLogout={onLogout}>
            <h3> Favoritos </h3>
        </Default>
    );
}