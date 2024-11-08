import { Base } from '../base';
import { documentCookie } from '../window';

class Cookies extends Base {
    public get(key: string): string | undefined {
        return documentCookie().split('; ').find((row) => row.startsWith(`${key}=`))?.split('=')[1];
    }
    
    public remove(key: string) {
        return document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${this.domain}`;
    }

    public set(key: string, value: string, expires: number = 365) {
        const date = new Date();
        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
        return document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/; domain=${this.domain}`;
    }

    public setOriginDomain(value: string) {
        return this.set('origin_domain', value);
    }

    public getOriginDomain() {
        return this.get('origin_domain');
    }

    public getGeekAccessToken(){
        return this.get('geekAccessToken');
    }

    public setGeekAccessToken(value: string) {
        return this.set('geekAccessToken', value);
    }

    public removeGeekAccessToken() {
        return this.remove('geekAccessToken');
    }
}

export default new Cookies();