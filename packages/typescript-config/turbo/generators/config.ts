import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('typescript-config', {
        description: 'Adds a new JSON file',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the JSON file?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{ kebabCase name }}.json',
                templateFile: 'templates/json.hbs',
            }
        ]
    })
}