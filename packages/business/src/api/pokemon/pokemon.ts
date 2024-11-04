import { Http } from '@geek/services/http';

export class Pokemon extends Http {
    constructor() {
        super('https://pokeapi.co/api/v2', {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    async getAll(offset: number, limit: number) {
        try {
            return await this.get(`/pokemon?offset=${offset}&limit=${limit}`);
        } catch (_) {
            throw new Error('Error When Querying External Api getAll Please Try Again Later!');
        }
    }
}