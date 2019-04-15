#!/bin/bash

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )";
cd ${current_dir}

# Fetch proto files
if [[ ! -d proto ]]; then
    git clone https://github.com/maxwell-dev/maxwell-protocol proto;
fi

# Generate pb files
root_dir=${current_dir}
if [[ ${root_dir} =~ (.*)/node_modules.*$ ]]; then
    root_dir=${BASH_REMATCH[1]};
fi

mkdir -p src

${root_dir}/node_modules/.bin/pbjs \
-t json -o src/maxwell.protocol.json \
           proto/maxwell_protocol.proto

# Generate api files
:> index.js
bin/maxwell_protocol_gen_api.py \
    --proto_file proto/maxwell_protocol.proto \
    --enum_type_names msg_type_t
