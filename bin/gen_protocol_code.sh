#!/bin/bash

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )";
cd ${current_dir}

# Fetch proto files
if [[ ! -d proto ]]; then
    git clone -b main https://github.com/maxwell-dev/maxwell-protocol proto;
fi

# Generate pb files
root_dir=${current_dir}
if [[ ${root_dir} =~ (.*)/node_modules.*$ ]]; then
    root_dir=${BASH_REMATCH[1]};
fi

mkdir -p src lib

${root_dir}/node_modules/.bin/pbjs \
    -t static-module -w commonjs --no-create --no-verify --no-convert --no-delimited --force-number \
    -o src/maxwell_protocol.js \
    proto/maxwell_protocol.proto
${root_dir}/node_modules/.bin/pbts -o src/maxwell_protocol.d.ts src/maxwell_protocol.js
cp -f src/maxwell_protocol.* lib/

# Generate api files
bin/gen_protocol_ext.py \
    --proto_file proto/maxwell_protocol.proto \
    --enum_type_names msg_type_t
