'use client';
import { Default } from '@geek/ui';
import { FaBeer } from 'react-icons/fa';

import { config } from './config';

export default function Home() {
    return (
        <Default {...config}>
            <h3> Lets go for a <FaBeer/>? </h3>
        </Default>
    );
}
