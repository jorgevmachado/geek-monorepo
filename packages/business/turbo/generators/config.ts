import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('business', {
        description: 'Adds a new business',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the business?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/{{ kebabCase name }}/{{ kebabCase name }}.ts',
                templateFile: 'templates/business.hbs',
            },
            {
                type: 'add',
                path: 'src/{{ kebabCase name }}/index.ts',
                templateFile: 'templates/index.hbs',
            },
            {
                type: 'append',
                path: 'src/index.ts',
                template: 'export * from \'./{{kebabCase name}}\';',
            },
        ]
    });
}