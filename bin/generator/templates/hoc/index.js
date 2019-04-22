const path = require('path');
const componentExists = require('../../../utils/componentExists');

module.exports = {
  description: 'Add a HOC (High Order Component)',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'HOC name: ',
      validate: function(componentName) {
        if (/.+/.test(componentName)) {
          return componentExists('hocs', componentName)
            ? 'A HOC with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: function(data) {
    const pathToContainer = path.join(process.cwd(), 'app/hocs');

    const actions = [
      {
        type: 'add',
        path: path.join(pathToContainer, 'with{{properCase name}}.tsx'),
        templateFile: path.join(__dirname, 'hoc.tsx.hbs'),
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
