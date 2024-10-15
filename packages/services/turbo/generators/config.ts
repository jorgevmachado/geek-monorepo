import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('service', {
        description: 'Adds a new service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the service?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/{{ kebabCase name }}/{{ kebabCase name }}.ts',
                templateFile: 'templates/service.hbs',
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