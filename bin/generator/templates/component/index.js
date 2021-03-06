const path = require('path');
const componentExists = require('../../../utils/componentExists');

const COMPONENT_TYPE = {
  STATELESS: 'Stateless Component',
  PURE: 'Pure Component',
  STATEFUL: 'Stateful Component',
};

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: COMPONENT_TYPE.STATEFUL,
      choices: () => [
        COMPONENT_TYPE.STATEFUL,
        COMPONENT_TYPE.STATELESS,
        COMPONENT_TYPE.PURE,
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Component name: ',
      validate: function(componentName) {
        if (/.+/.test(componentName)) {
          return componentExists('components', componentName)
            ? 'A component with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want to add messages?',
    },
  ],
  actions: function(data) {
    let template;
    switch (data.type) {
      case 'Stateless Component': {
        template = 'component.stateless.tsx.hbs';
        break;
      }
      case 'Pure Component': {
        template = 'component.pure.tsx.hbs';
        break;
      }
      case 'Stateful Component': {
        template = 'component.tsx.hbs';
        break;
      }
      default: {
        template = 'component.stateless.tsx.hbs';
      }
    }
    template = path.join(__dirname, template);
    const pathToComponent = path.join(
      process.cwd(),
      'app/components/{{properCase name}}'
    );

    const pathToTests = path.join(process.cwd(), '__tests__');

    const actions = [
      {
        type: 'add',
        path: path.join(pathToComponent, 'index.tsx'),
        templateFile: template,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(pathToComponent, 'messages.ts'),
        templateFile: path.join(__dirname, 'messages.ts.hbs'),
        abortOnFail: true,
      },
      {
        type: 'append',
        path: path.join(pathToTests, 'components.spec.tsx'),
        templateFile: path.join(__dirname, 'test.tsx.hbs'),
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
