#!/usr/bin/env bash
set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22 >/dev/null
cd /home/burger/projects/work/integral-solution-gutters
npm install
