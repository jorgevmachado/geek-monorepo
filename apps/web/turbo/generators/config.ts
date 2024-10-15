import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('page', {
        description: 'Adds a new page',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the page?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'app/{{kebabCase name}}/page.tsx',
                templateFile: 'templates/page/page.hbs',
            },
        ],
    });
}
