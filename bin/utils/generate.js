const path = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');

module.exports = function(componentType) {
  const plop = path.join(__dirname, '../../node_modules/.bin/plop');
  const generator = path.join(__dirname, '../generator.js');

  const runPlop = spawn(plop, ['--plopfile', generator, componentType], {
    cwd: process.cwd(),
    stdio: 'inherit',
  });

  runPlop.on('exit', function() {
    componentType === 'container' &&
      console.log(
        chalk.yellowBright("Don't forget to add your reducer to reducer.ts!")
      );
    console.log(chalk.cyan('Completed task!!!'));
    process.exit(1);
  });
};
