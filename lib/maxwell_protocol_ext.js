"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode_msg = exports.encode_msg = exports.msg_types = void 0;
const protobuf = __importStar(require("protobufjs/minimal"));
const root = __importStar(require("./maxwell_protocol"));
exports.msg_types = root.maxwell.protocol;
function encode_msg(msg) {
    const writer = new protobuf.Writer();
    switch (msg.constructor) {
        case exports.msg_types.add_routes_rep_t:
            writer.uint32(92);
            return exports.msg_types.add_routes_rep_t.encode(msg, writer).finish();
        case exports.msg_types.add_routes_req_t:
            writer.uint32(91);
            return exports.msg_types.add_routes_req_t.encode(msg, writer).finish();
        case exports.msg_types.assign_frontend_rep_t:
            writer.uint32(112);
            return exports.msg_types.assign_frontend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.assign_frontend_req_t:
            writer.uint32(111);
            return exports.msg_types.assign_frontend_req_t.encode(msg, writer).finish();
        case exports.msg_types.auth_rep_t:
            writer.uint32(28);
            return exports.msg_types.auth_rep_t.encode(msg, writer).finish();
        case exports.msg_types.auth_req_t:
            writer.uint32(27);
            return exports.msg_types.auth_req_t.encode(msg, writer).finish();
        case exports.msg_types.error2_rep_t:
            writer.uint32(32);
            return exports.msg_types.error2_rep_t.encode(msg, writer).finish();
        case exports.msg_types.error_rep_t:
            writer.uint32(30);
            return exports.msg_types.error_rep_t.encode(msg, writer).finish();
        case exports.msg_types.get_routes_rep_t:
            writer.uint32(96);
            return exports.msg_types.get_routes_rep_t.encode(msg, writer).finish();
        case exports.msg_types.get_routes_req_t:
            writer.uint32(95);
            return exports.msg_types.get_routes_req_t.encode(msg, writer).finish();
        case exports.msg_types.locate_topic_rep_t:
            writer.uint32(114);
            return exports.msg_types.locate_topic_rep_t.encode(msg, writer).finish();
        case exports.msg_types.locate_topic_req_t:
            writer.uint32(113);
            return exports.msg_types.locate_topic_req_t.encode(msg, writer).finish();
        case exports.msg_types.ok2_rep_t:
            writer.uint32(31);
            return exports.msg_types.ok2_rep_t.encode(msg, writer).finish();
        case exports.msg_types.ok_rep_t:
            writer.uint32(29);
            return exports.msg_types.ok_rep_t.encode(msg, writer).finish();
        case exports.msg_types.ping_rep_t:
            writer.uint32(2);
            return exports.msg_types.ping_rep_t.encode(msg, writer).finish();
        case exports.msg_types.ping_req_t:
            writer.uint32(1);
            return exports.msg_types.ping_req_t.encode(msg, writer).finish();
        case exports.msg_types.pull_rep_t:
            writer.uint32(6);
            return exports.msg_types.pull_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pull_req_t:
            writer.uint32(5);
            return exports.msg_types.pull_req_t.encode(msg, writer).finish();
        case exports.msg_types.push_rep_t:
            writer.uint32(4);
            return exports.msg_types.push_rep_t.encode(msg, writer).finish();
        case exports.msg_types.push_req_t:
            writer.uint32(3);
            return exports.msg_types.push_req_t.encode(msg, writer).finish();
        case exports.msg_types.register_backend_rep_t:
            writer.uint32(68);
            return exports.msg_types.register_backend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.register_backend_req_t:
            writer.uint32(67);
            return exports.msg_types.register_backend_req_t.encode(msg, writer).finish();
        case exports.msg_types.register_frontend_rep_t:
            writer.uint32(66);
            return exports.msg_types.register_frontend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.register_frontend_req_t:
            writer.uint32(65);
            return exports.msg_types.register_frontend_req_t.encode(msg, writer).finish();
        case exports.msg_types.register_server_rep_t:
            writer.uint32(70);
            return exports.msg_types.register_server_rep_t.encode(msg, writer).finish();
        case exports.msg_types.register_server_req_t:
            writer.uint32(69);
            return exports.msg_types.register_server_req_t.encode(msg, writer).finish();
        case exports.msg_types.req_rep_t:
            writer.uint32(8);
            return exports.msg_types.req_rep_t.encode(msg, writer).finish();
        case exports.msg_types.req_req_t:
            writer.uint32(7);
            return exports.msg_types.req_req_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_ip_rep_t:
            writer.uint32(122);
            return exports.msg_types.resolve_ip_rep_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_ip_req_t:
            writer.uint32(121);
            return exports.msg_types.resolve_ip_req_t.encode(msg, writer).finish();
        case exports.msg_types.route_added_msg_t:
            writer.uint32(100);
            return exports.msg_types.route_added_msg_t.encode(msg, writer).finish();
        case exports.msg_types.route_deleted_msg_t:
            writer.uint32(101);
            return exports.msg_types.route_deleted_msg_t.encode(msg, writer).finish();
        case exports.msg_types.route_health_changed_msg_t:
            writer.uint32(102);
            return exports.msg_types.route_health_changed_msg_t.encode(msg, writer).finish();
        default:
            throw `Unknown msg type: ${msg.constructor}`;
    }
}
exports.encode_msg = encode_msg;
function decode_msg(msg) {
    const reader = new protobuf.Reader(new Uint8Array(msg));
    const msg_type_uint32 = reader.uint32();
    switch (msg_type_uint32) {
        case 92:
            return exports.msg_types.add_routes_rep_t.decode(reader);
        case 91:
            return exports.msg_types.add_routes_req_t.decode(reader);
        case 112:
            return exports.msg_types.assign_frontend_rep_t.decode(reader);
        case 111:
            return exports.msg_types.assign_frontend_req_t.decode(reader);
        case 28:
            return exports.msg_types.auth_rep_t.decode(reader);
        case 27:
            return exports.msg_types.auth_req_t.decode(reader);
        case 32:
            return exports.msg_types.error2_rep_t.decode(reader);
        case 30:
            return exports.msg_types.error_rep_t.decode(reader);
        case 96:
            return exports.msg_types.get_routes_rep_t.decode(reader);
        case 95:
            return exports.msg_types.get_routes_req_t.decode(reader);
        case 114:
            return exports.msg_types.locate_topic_rep_t.decode(reader);
        case 113:
            return exports.msg_types.locate_topic_req_t.decode(reader);
        case 31:
            return exports.msg_types.ok2_rep_t.decode(reader);
        case 29:
            return exports.msg_types.ok_rep_t.decode(reader);
        case 2:
            return exports.msg_types.ping_rep_t.decode(reader);
        case 1:
            return exports.msg_types.ping_req_t.decode(reader);
        case 6:
            return exports.msg_types.pull_rep_t.decode(reader);
        case 5:
            return exports.msg_types.pull_req_t.decode(reader);
        case 4:
            return exports.msg_types.push_rep_t.decode(reader);
        case 3:
            return exports.msg_types.push_req_t.decode(reader);
        case 68:
            return exports.msg_types.register_backend_rep_t.decode(reader);
        case 67:
            return exports.msg_types.register_backend_req_t.decode(reader);
        case 66:
            return exports.msg_types.register_frontend_rep_t.decode(reader);
        case 65:
            return exports.msg_types.register_frontend_req_t.decode(reader);
        case 70:
            return exports.msg_types.register_server_rep_t.decode(reader);
        case 69:
            return exports.msg_types.register_server_req_t.decode(reader);
        case 8:
            return exports.msg_types.req_rep_t.decode(reader);
        case 7:
            return exports.msg_types.req_req_t.decode(reader);
        case 122:
            return exports.msg_types.resolve_ip_rep_t.decode(reader);
        case 121:
            return exports.msg_types.resolve_ip_req_t.decode(reader);
        case 100:
            return exports.msg_types.route_added_msg_t.decode(reader);
        case 101:
            return exports.msg_types.route_deleted_msg_t.decode(reader);
        case 102:
            return exports.msg_types.route_health_changed_msg_t.decode(reader);
        default:
            throw `Unknown msg type: ${msg_type_uint32}`;
    }
}
exports.decode_msg = decode_msg;
exports.default = { msg_types: exports.msg_types, encode_msg, decode_msg };
