import { Http } from '@geek/services/http';

import * as dto from './interface';


export class GeekNest extends Http {
    constructor({ baseUrl, accessToken }: dto.IGeekNestConfig) {
        super(baseUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'content-type': 'application/json; charset=UTF-8'
            },
        });
    }

    public async signUp(params: dto.ISignUpParams): Promise<string> {
        return this.post('auth/signUp', { body: params });
    }

    public async signIn(params: dto.ISignInParams): Promise<{ token: string }> {
        return this.post('auth/signIn', { body: params });
    }

    public async getUser(id: string): Promise<dto.IUser> {
        return this.get(`auth/${id}`);
    }

    public async me(): Promise<dto.IUser> {
        return this.get('auth/me');
    }
}