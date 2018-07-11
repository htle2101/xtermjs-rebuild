var Terminal = require('./lib/xterm');

var term = new Terminal();
term._core.browser.isMac = true;
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
console.log(term);