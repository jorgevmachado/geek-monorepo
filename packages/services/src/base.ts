import process from 'process';

import { isBrowser } from './window';

export type TPlatform = 'DESKTOP' | 'MOBILE';

export type TDomain = '.geek.com.br';

export abstract class Base {
    private _domain?: TDomain;
    private _platform?: TPlatform;
    private _isProduction: boolean = false;

    get isProduction(): boolean {
        if (this._isProduction) {
            return this._isProduction;
        }
        this._isProduction = process.env.NEXT_PUBLIC_ENV === 'PRODUCTION';
        return this._isProduction;
    }

    get platform(): TPlatform {
        if (this._platform) {
            return this._platform;
        }
        if (isBrowser()) {
            this._platform = window.outerWidth < 640 ? 'MOBILE' : 'DESKTOP';
            return this._platform;
        }
        return 'MOBILE';
    }

    get domain(): string {
        if (this._domain) {
            return this._domain;
        }
        this._domain = '.geek.com.br';
        return this._domain;
    }
}