import { Auth } from '@geek/business/auth';
import { GeekNest } from '@geek/business/api';

import { cookies } from '@geek/services/cookies';

const geekNest = new GeekNest({
    baseUrl: ' http://localhost:3001',
    accessToken: cookies.getGeekAccessToken() || '',
});

export const authService = new Auth(geekNest);