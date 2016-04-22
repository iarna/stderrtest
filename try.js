var spawn = require('child_process').spawn
var scripts = ['e0stdout.js', 'e1stdout.js', 'e0stderr.js', 'e1stderr.js']
scripts.forEach(function (script) {
  spawn('cmd', ['/d /s /c', 'node ' + script], {stdio: [0,1,2], windowsVerbatimArguments: true})
    .on('error', function (err) {
      console.log(script, 'got error', err)
    })
    .on('close', function (code, signal) {
      console.log(script, 'got', code, signal)
    })
})
