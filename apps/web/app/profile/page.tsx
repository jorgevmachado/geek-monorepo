'use client';
import { Default } from '@geek/ui';

import { config } from '../config';

export default function MyProfile() {
    return (
        <Default {...config}>
            <h3> MEUS DADOS </h3>
        </Default>
    );
}