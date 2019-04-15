#!/usr/bin/env python3

import argparse
import re
from os.path import basename


def parse():
    parser = argparse.ArgumentParser(
        description="The gernerator for maxwell protocol api."
    )
    parser.add_argument("--proto_file", required=True, type=argparse.FileType("r"))
    parser.add_argument("--enum_type_names", required=True, nargs="*")
    args = parser.parse_args()
    return args.proto_file, args.enum_type_names


def extract(content, enum_type_name):
    enum_type_def_pattern = r"enum\s+" + enum_type_name + "\s+{([^}]+)}"
    enum_type_def_match = re.search(enum_type_def_pattern, content)

    if enum_type_def_match:
        enum_pairs_pattern = r"([A-Z_0-9]+)\s*=\s*([0-9]+);"
        enum_pairs = re.findall(enum_pairs_pattern, enum_type_def_match.group(1))
        enum_pairs.sort()
        return enum_pairs
    else:
        return []


def output(package_name, module_name, enum_pairs_dict):
    require_decls_output = \
        f"""const protobuf = require("protobufjs/light");\n""" \
        f"""const json_descriptors = require("./{package_name}.json");"""

    root_def_output = \
        f"""const root = protobuf.Root.fromJSON(json_descriptors);"""

    msg_type_defs = []
    for enum_type_name in enum_pairs_dict.keys():
        for (enum_name, _) in enum_pairs_dict[enum_type_name]:
            if enum_name[0:7] == "UNKNOWN":
                continue
            msg_type_name = f"""{str.lower(enum_name)}_t"""
            msg_type_defs.append(
                f"""const {msg_type_name} = root.lookupType("{package_name}.{msg_type_name}");"""
            )
    msg_type_defs_output = "\n".join(msg_type_defs)

    function_names = []
    function_defs = []
    for enum_type_name in enum_pairs_dict.keys():
        case_decls0 = []
        case_decls1 = []
        for (enum_name, enum_value) in enum_pairs_dict[enum_type_name]:
            if enum_name[0:7] == "UNKNOWN":
                continue
            msg_type_name = f"""{str.lower(enum_name)}_t"""
            case_decls0.append(
                f"""    case {msg_type_name}:\n"""
                f"""      writer.uint32({enum_value});\n"""
                f"""      return {msg_type_name}.encode(msg, writer).finish();"""
            )
            case_decls1.append(
                f"""    case {enum_value}:\n"""
                f"""      return {msg_type_name}.decode(reader);"""
            )
        case_decls_output0 = "\n".join(case_decls0)
        case_decls_output1 = "\n".join(case_decls1)

        enum_type_prefix = re.sub(r"([^.]+)_type_t", r"\1", enum_type_name)
        function_name0 = f"""encode_{enum_type_prefix}"""
        function_names.append(function_name0)
        function_defs.append(
            f"""function {function_name0}(msg) {{\n"""
            f"""  let writer = new protobuf.Writer();\n"""
            f"""  switch (msg.__proto__.$type) {{\n"""
            f"""{case_decls_output0}\n"""
            f"""    default:\n"""
            f"""      throw `Unknown msg type: ${{msg.__proto__.$type}}`;\n"""
            f"""  }}\n"""
            f"""}}"""
        )
        function_name1 = f"""decode_{enum_type_prefix}"""
        function_names.append(function_name1)
        function_defs.append(
            f"""function {function_name1}(msg) {{\n"""
            f"""  let reader = new protobuf.Reader(new Uint8Array(msg));\n"""
            f"""  let msg_type_uint32 = reader.uint32();\n"""
            f"""  switch (msg_type_uint32) {{\n"""
            f"""{case_decls_output1}\n"""
            f"""    default:\n"""
            f"""      throw `Unknown msg type: ${{msg_type_uint32}}`;\n"""
            f"""  }}\n"""
            f"""}}"""
        )
    function_defs_output = "\n\n".join(function_defs)

    msg_type_exports = []
    for enum_type_name in enum_pairs_dict.keys():
        for (enum_name, _) in enum_pairs_dict[enum_type_name]:
            if enum_name[0:7] == "UNKNOWN":
                continue
            msg_type_name = f"""{str.lower(enum_name)}_t"""
            msg_type_exports.append(
                f"""module.exports.{msg_type_name} = {msg_type_name};"""
            )
    msg_type_exports.append(
        f"""module.exports.msg_t = root.lookupType("{package_name}.msg_t");"""
    )
    msg_type_exports.append(
        f"""module.exports.source_t = root.lookupType("{package_name}.source_t");"""
    )
    msg_type_exports.append(
        f"""module.exports.trace_t = root.lookupType("{package_name}.trace_t");"""
    )
    msg_type_exports_output = "\n".join(msg_type_exports)

    function_exports = []
    for function_name in function_names:
        function_exports.append(
            f"""module.exports.{function_name} = {function_name};"""
        )
    function_exports_output = "\n".join(function_exports)

    output = \
        f"""{require_decls_output}\n\n""" \
        f"""{root_def_output}\n\n""" \
        f"""{msg_type_defs_output}\n\n""" \
        f"""{function_defs_output}\n\n""" \
        f"""{msg_type_exports_output}\n""" \
        f"""{function_exports_output}"""
    output_file_name = f"""src/{module_name}.js"""
    with open(output_file_name, "w") as output_file:
        output_file.write(output)

    parent_package = package_name.split(".")[-1];
    require_export_decl_output = \
        f"""module.exports = require("./{output_file_name}");"""
    with open("index.js", "a") as output_file:
        output_file.write(require_export_decl_output)


if __name__ == "__main__":
    proto_file, enum_type_names = parse()

    enum_pairs_dict = dict()
    content = proto_file.read().replace("\n", "")
    package_name = re.search(r"package\s+([^;]+);", content).group(1)
    module_name = re.sub(r"([^.]+).proto$", r"\1", basename(proto_file.name))
    for enum_type_name in enum_type_names:
        enum_pairs_dict[enum_type_name] = extract(content, enum_type_name)

    output(package_name, module_name, enum_pairs_dict)
