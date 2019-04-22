const path = require('path');
const componentExists = require('../../../utils/componentExists');

module.exports = {
  description: 'Add a container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Container name: ',
      validate: function(componentName) {
        if (/.+/.test(componentName)) {
          return componentExists('containers', componentName)
            ? 'A container with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'typeComponent',
      message: 'Select type of component: ',
      default: 'Component',
      choices: () => ['Component', 'PureComponent'],
    },
    {
      type: 'confirm',
      name: 'wantRedux',
      default: true,
      message: 'Do you want to add redux?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want to add messages?',
    },
  ],
  actions: function(data) {
    const pathToContainer = path.join(
      process.cwd(),
      'app/containers/{{properCase name}}'
    );

    const actions = [
      {
        type: 'add',
        path: path.join(pathToContainer, 'index.tsx'),
        templateFile: path.join(__dirname, 'container.tsx.hbs'),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(pathToContainer, 'actions.ts'),
        templateFile: path.join(__dirname, 'actions.ts.hbs'),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(pathToContainer, 'constants.ts'),
        templateFile: path.join(__dirname, 'constants.ts.hbs'),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(pathToContainer, 'messages.ts'),
        templateFile: path.join(__dirname, 'messages.ts.hbs'),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(pathToContainer, 'reducer.ts'),
        templateFile: path.join(__dirname, 'reducer.ts.hbs'),
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(pathToContainer, 'types.ts'),
        templateFile: path.join(__dirname, 'types.ts.hbs'),
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
