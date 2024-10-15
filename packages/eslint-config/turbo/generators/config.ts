import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {

  plop.setGenerator('eslint-config', {
    description: 'Adds a new eslint',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the eslint?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{kebabCase name}}.js',
        templateFile: 'templates/eslint/eslint.hbs',
      },
    ],
  });
}
