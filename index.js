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
// Hubot port
process.env["EXPRESS_PORT"] = 8082;
// BoB will post his response(s) here
// process.env["HUBOT_POST_RESPONSES_URL"] = "http://localhost:8080/hey/iam/bob"
// here, BoB will talk to himself
process.env["HUBOT_POST_RESPONSES_URL"] = "http://localhost:8082/hey/iam/bob"

exec(`.~/bob/bob/bin/hubot -a http-adapter`)

console.log("⌛️ Bob is waiting...")
