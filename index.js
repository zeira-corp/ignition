#!/usr/bin/env node
"use strict";

require('shelljs/global');

let cmd = [
  , `cd button-listener; `
  , `sudo python listen.py;`
].join('');

exec(cmd, (code, stdout, stderr) => {
  // foo
  console.log(code)
})

// run http server to capture the transcription
// soon, this will be hubot
// 'node /home/pi/bob/simple-http/index.js'
/*
exec('node ~/bob/simple-http/index.js', (code, stdout, stderr) => {
  // foo
  console.log(code)
})
*/

// Hubot part
let cmdHubot = [
  , `cd bob; `
  , `node bob.js;`
].join('');

exec(cmdHubot, (code, stdout, stderr) => {
  // foo
  console.log(code)
})

console.log("⌛️ Bob is waiting...")
