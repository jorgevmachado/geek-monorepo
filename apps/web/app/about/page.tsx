'use client';
import { Default } from '@geek/ui';

import { config } from '../config';

export default function About() {
    const { logo, user, navbar, sidebar, onLogout } = config;
    return (
        <Default logo={logo} user={user} navbar={navbar} sidebar={sidebar} onLogout={onLogout}>
            <h1> About </h1>
        </Default>
    );
}