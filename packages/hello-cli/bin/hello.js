#!/usr/bin/env node

const program = require('commander');
const { say } = require('../dist/index');

program.version(require('../package').version, '-v, --version', 'output the current version');

program
  .command('say [msg]')
  .description('say something')
  .action((...args) => {
    say(args[0]);
  });

program.parse(process.argv);
