#!/usr/bin/env node
"use strict";

require('shelljs/global');


console.log("  I'm BoB, I'm starting the voice recognition... ")

process.env["GCLOUD_PROJECT"] = "hey-bob-desktop";
process.env["GOOGLE_APPLICATION_CREDENTIALS"] = "/home/pi/bob/bob.json";
process.env["GOOGLE_RAW"] = `/home/pi/bob/google-voice-recognition/resources/bob.raw`;

process.env.TRANSCRIPTION_RECEIVER_URL = "http://localhost:8080/transcription"

exec(`node ../google-voice-recognition/reco.js`)
