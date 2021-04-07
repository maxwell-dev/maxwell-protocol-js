#!/bin/bash

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )";
cd ${current_dir}

rm -rf node_modules proto src lib coverage
rm -f package-lock.json
