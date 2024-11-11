import { GeekNest } from '../api';

import type { SignInParams, SignUpParams, User } from './interface';

export class Auth {
    constructor(private geekNest: GeekNest) {}

    public async signUp(params: SignUpParams): Promise<string> {
        return this.geekNest.signUp(params).then(res => res);
    }

    public async signIn(params: SignInParams): Promise<string> {
        return this.geekNest.signIn(params).then(res => res.token);
    }

    public async getUser(id: string): Promise<User> {
        return this.geekNest.getUser(id).then(res => res);
    }

    public async me(): Promise<User> {
        return this.geekNest.me().then(res => res);
    }
}