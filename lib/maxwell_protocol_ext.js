"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
        case exports.msg_types.add_route_msg_t:
            writer.uint32(71);
            return exports.msg_types.add_route_msg_t.encode(msg, writer).finish();
        case exports.msg_types.add_route_rep_t:
            writer.uint32(68);
            return exports.msg_types.add_route_rep_t.encode(msg, writer).finish();
        case exports.msg_types.add_route_req_t:
            writer.uint32(67);
            return exports.msg_types.add_route_req_t.encode(msg, writer).finish();
        case exports.msg_types.auth_rep_t:
            writer.uint32(28);
            return exports.msg_types.auth_rep_t.encode(msg, writer).finish();
        case exports.msg_types.auth_req_t:
            writer.uint32(27);
            return exports.msg_types.auth_req_t.encode(msg, writer).finish();
        case exports.msg_types.delete_route_msg_t:
            writer.uint32(72);
            return exports.msg_types.delete_route_msg_t.encode(msg, writer).finish();
        case exports.msg_types.delete_route_rep_t:
            writer.uint32(70);
            return exports.msg_types.delete_route_rep_t.encode(msg, writer).finish();
        case exports.msg_types.delete_route_req_t:
            writer.uint32(69);
            return exports.msg_types.delete_route_req_t.encode(msg, writer).finish();
        case exports.msg_types.delete_topics_rep_t:
            writer.uint32(84);
            return exports.msg_types.delete_topics_rep_t.encode(msg, writer).finish();
        case exports.msg_types.delete_topics_req_t:
            writer.uint32(83);
            return exports.msg_types.delete_topics_req_t.encode(msg, writer).finish();
        case exports.msg_types.do2_rep_t:
            writer.uint32(10);
            return exports.msg_types.do2_rep_t.encode(msg, writer).finish();
        case exports.msg_types.do2_req_t:
            writer.uint32(9);
            return exports.msg_types.do2_req_t.encode(msg, writer).finish();
        case exports.msg_types.do_rep_t:
            writer.uint32(8);
            return exports.msg_types.do_rep_t.encode(msg, writer).finish();
        case exports.msg_types.do_req_t:
            writer.uint32(7);
            return exports.msg_types.do_req_t.encode(msg, writer).finish();
        case exports.msg_types.error2_rep_t:
            writer.uint32(32);
            return exports.msg_types.error2_rep_t.encode(msg, writer).finish();
        case exports.msg_types.error_rep_t:
            writer.uint32(30);
            return exports.msg_types.error_rep_t.encode(msg, writer).finish();
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
            writer.uint32(4);
            return exports.msg_types.pull_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pull_req_t:
            writer.uint32(3);
            return exports.msg_types.pull_req_t.encode(msg, writer).finish();
        case exports.msg_types.pull_routes_rep_t:
            writer.uint32(76);
            return exports.msg_types.pull_routes_rep_t.encode(msg, writer).finish();
        case exports.msg_types.pull_routes_req_t:
            writer.uint32(75);
            return exports.msg_types.pull_routes_req_t.encode(msg, writer).finish();
        case exports.msg_types.push_rep_t:
            writer.uint32(6);
            return exports.msg_types.push_rep_t.encode(msg, writer).finish();
        case exports.msg_types.push_req_t:
            writer.uint32(5);
            return exports.msg_types.push_req_t.encode(msg, writer).finish();
        case exports.msg_types.push_routes_rep_t:
            writer.uint32(74);
            return exports.msg_types.push_routes_rep_t.encode(msg, writer).finish();
        case exports.msg_types.push_routes_req_t:
            writer.uint32(73);
            return exports.msg_types.push_routes_req_t.encode(msg, writer).finish();
        case exports.msg_types.register_backend_rep_t:
            writer.uint32(82);
            return exports.msg_types.register_backend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.register_backend_req_t:
            writer.uint32(81);
            return exports.msg_types.register_backend_req_t.encode(msg, writer).finish();
        case exports.msg_types.register_frontend_rep_t:
            writer.uint32(66);
            return exports.msg_types.register_frontend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.register_frontend_req_t:
            writer.uint32(65);
            return exports.msg_types.register_frontend_req_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_backend_rep_t:
            writer.uint32(100);
            return exports.msg_types.resolve_backend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_backend_req_t:
            writer.uint32(99);
            return exports.msg_types.resolve_backend_req_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_frontend_rep_t:
            writer.uint32(98);
            return exports.msg_types.resolve_frontend_rep_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_frontend_req_t:
            writer.uint32(97);
            return exports.msg_types.resolve_frontend_req_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_ip_rep_t:
            writer.uint32(122);
            return exports.msg_types.resolve_ip_rep_t.encode(msg, writer).finish();
        case exports.msg_types.resolve_ip_req_t:
            writer.uint32(121);
            return exports.msg_types.resolve_ip_req_t.encode(msg, writer).finish();
        case exports.msg_types.unwatch_rep_t:
            writer.uint32(108);
            return exports.msg_types.unwatch_rep_t.encode(msg, writer).finish();
        case exports.msg_types.unwatch_req_t:
            writer.uint32(107);
            return exports.msg_types.unwatch_req_t.encode(msg, writer).finish();
        case exports.msg_types.watch_rep_t:
            writer.uint32(106);
            return exports.msg_types.watch_rep_t.encode(msg, writer).finish();
        case exports.msg_types.watch_req_t:
            writer.uint32(105);
            return exports.msg_types.watch_req_t.encode(msg, writer).finish();
        default:
            throw `Unknown msg type: ${msg.constructor}`;
    }
}
exports.encode_msg = encode_msg;
function decode_msg(msg) {
    const reader = new protobuf.Reader(new Uint8Array(msg));
    const msg_type_uint32 = reader.uint32();
    switch (msg_type_uint32) {
        case 71:
            return exports.msg_types.add_route_msg_t.decode(reader);
        case 68:
            return exports.msg_types.add_route_rep_t.decode(reader);
        case 67:
            return exports.msg_types.add_route_req_t.decode(reader);
        case 28:
            return exports.msg_types.auth_rep_t.decode(reader);
        case 27:
            return exports.msg_types.auth_req_t.decode(reader);
        case 72:
            return exports.msg_types.delete_route_msg_t.decode(reader);
        case 70:
            return exports.msg_types.delete_route_rep_t.decode(reader);
        case 69:
            return exports.msg_types.delete_route_req_t.decode(reader);
        case 84:
            return exports.msg_types.delete_topics_rep_t.decode(reader);
        case 83:
            return exports.msg_types.delete_topics_req_t.decode(reader);
        case 10:
            return exports.msg_types.do2_rep_t.decode(reader);
        case 9:
            return exports.msg_types.do2_req_t.decode(reader);
        case 8:
            return exports.msg_types.do_rep_t.decode(reader);
        case 7:
            return exports.msg_types.do_req_t.decode(reader);
        case 32:
            return exports.msg_types.error2_rep_t.decode(reader);
        case 30:
            return exports.msg_types.error_rep_t.decode(reader);
        case 31:
            return exports.msg_types.ok2_rep_t.decode(reader);
        case 29:
            return exports.msg_types.ok_rep_t.decode(reader);
        case 2:
            return exports.msg_types.ping_rep_t.decode(reader);
        case 1:
            return exports.msg_types.ping_req_t.decode(reader);
        case 4:
            return exports.msg_types.pull_rep_t.decode(reader);
        case 3:
            return exports.msg_types.pull_req_t.decode(reader);
        case 76:
            return exports.msg_types.pull_routes_rep_t.decode(reader);
        case 75:
            return exports.msg_types.pull_routes_req_t.decode(reader);
        case 6:
            return exports.msg_types.push_rep_t.decode(reader);
        case 5:
            return exports.msg_types.push_req_t.decode(reader);
        case 74:
            return exports.msg_types.push_routes_rep_t.decode(reader);
        case 73:
            return exports.msg_types.push_routes_req_t.decode(reader);
        case 82:
            return exports.msg_types.register_backend_rep_t.decode(reader);
        case 81:
            return exports.msg_types.register_backend_req_t.decode(reader);
        case 66:
            return exports.msg_types.register_frontend_rep_t.decode(reader);
        case 65:
            return exports.msg_types.register_frontend_req_t.decode(reader);
        case 100:
            return exports.msg_types.resolve_backend_rep_t.decode(reader);
        case 99:
            return exports.msg_types.resolve_backend_req_t.decode(reader);
        case 98:
            return exports.msg_types.resolve_frontend_rep_t.decode(reader);
        case 97:
            return exports.msg_types.resolve_frontend_req_t.decode(reader);
        case 122:
            return exports.msg_types.resolve_ip_rep_t.decode(reader);
        case 121:
            return exports.msg_types.resolve_ip_req_t.decode(reader);
        case 108:
            return exports.msg_types.unwatch_rep_t.decode(reader);
        case 107:
            return exports.msg_types.unwatch_req_t.decode(reader);
        case 106:
            return exports.msg_types.watch_rep_t.decode(reader);
        case 105:
            return exports.msg_types.watch_req_t.decode(reader);
        default:
            throw `Unknown msg type: ${msg_type_uint32}`;
    }
}
exports.decode_msg = decode_msg;
exports.default = { msg_types: exports.msg_types, encode_msg, decode_msg };
