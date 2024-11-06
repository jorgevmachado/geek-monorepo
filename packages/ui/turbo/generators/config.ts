import type { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('component', {
    description: 'Adds a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/components/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/components/storybook.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'templates/components/stylesheet.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/components/index.hbs',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}\';',
      },
    ],
  });

  plop.setGenerator('layout', {
    description: 'Adds a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the layout?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/layouts/layout.hbs',
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/layouts/storybook.hbs',
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'templates/layouts/stylesheet.hbs',
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/index.ts',
        templateFile: 'templates/layouts/index.hbs',
      },
      {
        type: 'append',
        path: 'src/layout/index.ts',
        template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}\';',
      },
    ],
  });
}
