// Generated by CoffeeScript 1.10.0
(function() {
  var app, com, getProps, pack;

  com = require('commander');

  pack = require('../package.json');

  app = require('../lib/main.js');

  console.time("starting");

  com.option('-c, --cwd <dir>', 'Working directory').option('-d, --docker', 'Run in a docker container').option('-D, --prop [property]', 'Add a property the build. Use the form type:NAME=VALUE. Types: env').option('-e, --trace', 'Show full error message and stack trace on error').option('-f, --file <file>', 'Specify a .retis.yml to use').option('-l, --local', 'Don\'t run in a docker container').option('-o, --out-dir <dir>', 'Specify the build output directory').option('-s, --show-output', 'Shows the output of build commands').option('-v, --verbose', 'Verbose logging').option('--debug', 'Debug logging').option('--force', 'Force build tasks').option('--hide-output', 'Hide command output').option('--no-verbose-install', 'Disable verbose logging for installation of dependencies').option('--os <os>', 'Specify an OS for running the build').option('--show-pip-output', 'Show pip installation output').parse(process.argv);

  getProps = function() {
    var i, results;
    results = [];
    i = 0;
    while (i < com.rawArgs.length) {
      if (com.rawArgs[i] === '-D' || com.rawArgs[i] === '--prop') {
        results.push(com.rawArgs[i + 1]);
      }
      i++;
    }
    return results;
  };

  if (typeof com.cwd !== 'undefined') {
    process.chdir(com.cwd);
  }

  if (typeof process.env.RETIS_CWD !== 'undefined') {
    process.chdir(process.env.RETIS_CWD);
  }

  app.build({
    file: com.file,
    debug: com.debug || com.verbose,
    local: com.local || true,
    docker: com.docker || false,
    noVerboseInstall: com.noVerboseInstall || true,
    force: com.force,
    hideOutput: com.hideOutput,
    showPipOutput: com.showPipOutput || false,
    outDir: com.outDir,
    os: com.os,
    props: getProps(),
    showOutput: com.showOutput || com.debug,
    trace: com.trace
  });

}).call(this);
