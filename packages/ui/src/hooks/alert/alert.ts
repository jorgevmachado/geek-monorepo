import React from 'react';

import { uuid } from '@geek/services/uuid';

import type { TAlert } from '../../interfaces';

export interface AlertData {
    type: TAlert;
    delay?: number;
    message: React.ReactNode | string;
}

export default class Alert {
    public visible = true;

    public readonly id = uuid();
    public readonly type!: AlertData['type'];
    public readonly delay: AlertData['delay'] = 5000;
    public readonly message: AlertData['message'];

    constructor({ type, message, delay }: AlertData) {
        this.type = type;
        this.message = message;

        if (delay) { this.delay = delay; }
    }
    
}