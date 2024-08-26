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
exports.msg_types = void 0;
exports.encode_msg = encode_msg;
exports.decode_msg = decode_msg;
const protobuf = __importStar(require("protobufjs/minimal"));
const root = __importStar(require("./maxwell_protocol"));
exports.msg_types = root.maxwell.protocol;
function encode_msg(msg) {
    const writer = new protobuf.Writer();
    switch (msg.constructor) {
        case exports.msg_types.auth_rep_t:
            writer.uint32(42);
            return exports.msg_types.auth_rep_t.encode(msg, writer).finish();
        case exports.msg_types.auth_req_t:
            writer.uint32(41);
            return exports.msg_types.auth_req_t.encode(msg, writer).finish();
        case exports.msg_types.error2_rep_t:
            writer.uint32(32);
            return exports.msg_types.error2_rep_t.encode(msg, writer).finish();
        case exports.msg_types.error_rep_t:
            writer.uint32(30);
            return exports.msg_types.error_rep_t.encode(msg, writer).finish();
        case exports.msg_types.get_routes_rep_t:
            writer.uint32(76);
            return exports.msg_types.get_routes_rep_t.encode(msg, writer).finish();
        case exports.msg_types.get_routes_req_t:
            writer.uint32(75);
            return exports.msg_types.get_routes_req_t.encode(msg, writer).finish();
        case exports.msg_types.get_route_dist_checksum_rep_t:
            writer.uint32(80);
            return exports.msg_types.get_route_dist_checksum_rep_t.encode(msg, writer).finish();
        case exports.msg_types.get_route_dist_checksum_req_t:
            writer.uint32(79);
            return exports.msg_types.get_route_dist_checksum_req_t.encode(msg, writer).finish();
        case exports.msg_types.get_topic_dist_checksum_rep_t:
            writer.uint32(78);
            return exports.msg_types.get_topic_dist_checksum_rep_t.encode(msg, writer).finish();
        case exports.msg_types.get_topic_dist_checksum_req_t:
            writer.uint32(77);
            return exports.msg_types.get_topic_dist_checksum_req_t.encode(msg, writer).finish();
        case exports.msg_types.locate_topic_rep_t:
            writer.uint32(86);
            return exports.msg_types.locate_topic_rep_t.encode(msg, writer).finish();
        case exports.msg_types.locate_topic_req_t:
            writer.uint32(85);
            return exports.msg_types.locate_topic_req_t.encode(msg, writer).finish();
        case exports.msg_types.ok2_rep_t:
            writer.uint32(31);
            return exports.msg_types.ok2_rep_t.encode(msg, writer).finish();
        case exports.msg_types.ok_rep_t:
            writer.uint32(29);
            return exports.msg_types.ok_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pick_frontends_rep_t:
            writer.uint32(84);
            return exports.msg_types.pick_frontends_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pick_frontends_req_t:
            writer.uint32(83);
            return exports.msg_types.pick_frontends_req_t.encode(msg, writer).finish();
        case exports.msg_types.pick_frontend_rep_t:
            writer.uint32(82);
            return exports.msg_types.pick_frontend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pick_frontend_req_t:
            writer.uint32(81);
            return exports.msg_types.pick_frontend_req_t.encode(msg, writer).finish();
        case exports.msg_types.ping_rep_t:
            writer.uint32(2);
            return exports.msg_types.ping_rep_t.encode(msg, writer).finish();
        case exports.msg_types.ping_req_t:
            writer.uint32(1);
            return exports.msg_types.ping_req_t.encode(msg, writer).finish();
        case exports.msg_types.pull_rep_t:
            writer.uint32(36);
            return exports.msg_types.pull_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pull_req_t:
            writer.uint32(35);
            return exports.msg_types.pull_req_t.encode(msg, writer).finish();
        case exports.msg_types.push_rep_t:
            writer.uint32(34);
            return exports.msg_types.push_rep_t.encode(msg, writer).finish();
        case exports.msg_types.push_req_t:
            writer.uint32(33);
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
        case exports.msg_types.register_service_rep_t:
            writer.uint32(70);
            return exports.msg_types.register_service_rep_t.encode(msg, writer).finish();
        case exports.msg_types.register_service_req_t:
            writer.uint32(69);
            return exports.msg_types.register_service_req_t.encode(msg, writer).finish();
        case exports.msg_types.req_rep_t:
            writer.uint32(40);
            return exports.msg_types.req_rep_t.encode(msg, writer).finish();
        case exports.msg_types.req_req_t:
            writer.uint32(39);
            return exports.msg_types.req_req_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_ip_rep_t:
            writer.uint32(122);
            return exports.msg_types.resolve_ip_rep_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_ip_req_t:
            writer.uint32(121);
            return exports.msg_types.resolve_ip_req_t.encode(msg, writer).finish();
        case exports.msg_types.set_routes_rep_t:
            writer.uint32(72);
            return exports.msg_types.set_routes_rep_t.encode(msg, writer).finish();
        case exports.msg_types.set_routes_req_t:
            writer.uint32(71);
            return exports.msg_types.set_routes_req_t.encode(msg, writer).finish();
        default:
            throw `Unknown msg type: ${msg.constructor}`;
    }
}
function decode_msg(msg) {
    const reader = new protobuf.Reader(new Uint8Array(msg));
    const msg_type_uint32 = reader.uint32();
    switch (msg_type_uint32) {
        case 42:
            return exports.msg_types.auth_rep_t.decode(reader);
        case 41:
            return exports.msg_types.auth_req_t.decode(reader);
        case 32:
            return exports.msg_types.error2_rep_t.decode(reader);
        case 30:
            return exports.msg_types.error_rep_t.decode(reader);
        case 76:
            return exports.msg_types.get_routes_rep_t.decode(reader);
        case 75:
            return exports.msg_types.get_routes_req_t.decode(reader);
        case 80:
            return exports.msg_types.get_route_dist_checksum_rep_t.decode(reader);
        case 79:
            return exports.msg_types.get_route_dist_checksum_req_t.decode(reader);
        case 78:
            return exports.msg_types.get_topic_dist_checksum_rep_t.decode(reader);
        case 77:
            return exports.msg_types.get_topic_dist_checksum_req_t.decode(reader);
        case 86:
            return exports.msg_types.locate_topic_rep_t.decode(reader);
        case 85:
            return exports.msg_types.locate_topic_req_t.decode(reader);
        case 31:
            return exports.msg_types.ok2_rep_t.decode(reader);
        case 29:
            return exports.msg_types.ok_rep_t.decode(reader);
        case 84:
            return exports.msg_types.pick_frontends_rep_t.decode(reader);
        case 83:
            return exports.msg_types.pick_frontends_req_t.decode(reader);
        case 82:
            return exports.msg_types.pick_frontend_rep_t.decode(reader);
        case 81:
            return exports.msg_types.pick_frontend_req_t.decode(reader);
        case 2:
            return exports.msg_types.ping_rep_t.decode(reader);
        case 1:
            return exports.msg_types.ping_req_t.decode(reader);
        case 36:
            return exports.msg_types.pull_rep_t.decode(reader);
        case 35:
            return exports.msg_types.pull_req_t.decode(reader);
        case 34:
            return exports.msg_types.push_rep_t.decode(reader);
        case 33:
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
            return exports.msg_types.register_service_rep_t.decode(reader);
        case 69:
            return exports.msg_types.register_service_req_t.decode(reader);
        case 40:
            return exports.msg_types.req_rep_t.decode(reader);
        case 39:
            return exports.msg_types.req_req_t.decode(reader);
        case 122:
            return exports.msg_types.resolve_ip_rep_t.decode(reader);
        case 121:
            return exports.msg_types.resolve_ip_req_t.decode(reader);
        case 72:
            return exports.msg_types.set_routes_rep_t.decode(reader);
        case 71:
            return exports.msg_types.set_routes_req_t.decode(reader);
        default:
            throw `Unknown msg type: ${msg_type_uint32}`;
    }
}
exports.default = { msg_types: exports.msg_types, encode_msg, decode_msg };
