var os = require('os');
var pty = require('node-pty');
var shell = os.platform() === 'win32' ? 'powershell.exe' : '/bin/zsh';

var Terminal = require('./lib/xterm');

var ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

var term = new Terminal();
term._core.browser.isMac = true;

ptyProcess.on('data', function(data) {
  term.write(data)
});

ptyProcess.write('ls -l\n\r');

setTimeout(function(){
    console.log(term._core.buffer.lines._array[0])
    console.log(term._core.buffer.lines._array[1])
    console.log(term._core.buffer.lines._array[2])
    console.log(term._core.buffer.lines._array[3])
}, 5000)


