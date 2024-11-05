import React from 'react';

import { Auth as DefaultAuth } from '@geek/ui';

import { LOGO } from '@/layout/config';

interface AuthProps {
}

export default function Auth({ }: AuthProps) {
    return (
        <DefaultAuth logo={LOGO} internalLogin={{ action: '/login' }}/>
    );
}