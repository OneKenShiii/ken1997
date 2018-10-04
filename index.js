#!/usr/bin/env node
const {execSync} = require('child_process');

try {
  console.log("Hello");
  console.log(execSync('npm -g list --dept=0').toString());
} catch (e) {
  console.error(error);
}
