#!/usr/bin/env node
"use strict";

require('shelljs/global');

  let cmd = [
    , `cd button-listener; `
    , `sudo python listen.py;`
  ].join('');

  exec(cmd, (code, stdout, stderr) => {
    console.log("wait for pushing button...")
        if(code !== 0) {
      console.error(`   button listener  `);
        } else{
          console.info('   button listener  ')
        }
  })

  exec('node /home/pi/bob/simple-http/index.js', (code, stdout, stderr) => {

  })



  console.log("--- Bob is waiting... ---")
