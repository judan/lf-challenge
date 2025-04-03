module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create files for a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'src/plop/components/component.hbs',
      },
      {
        type: 'add',
        path:
          'src/app/components/{{properCase name}}/{{properCase name}}.styles.js',
        templateFile: 'src/plop/components/component.styles.hbs',
      },
      {
        type: 'add',
        path:
          'src/app/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'src/plop/components/component.stories.hbs',
      },
    ],
  });
};