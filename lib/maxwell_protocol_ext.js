import * as protobuf from "protobufjs/minimal";
import * as root from "./maxwell_protocol";
export const msg_types = root.maxwell.protocol;
export function encode_msg(msg) {
    const writer = new protobuf.Writer();
    switch (msg.constructor) {
        case msg_types.add_route_msg_t:
            writer.uint32(71);
            return msg_types.add_route_msg_t.encode(msg, writer).finish();
        case msg_types.add_route_rep_t:
            writer.uint32(68);
            return msg_types.add_route_rep_t.encode(msg, writer).finish();
        case msg_types.add_route_req_t:
            writer.uint32(67);
            return msg_types.add_route_req_t.encode(msg, writer).finish();
        case msg_types.auth_rep_t:
            writer.uint32(28);
            return msg_types.auth_rep_t.encode(msg, writer).finish();
        case msg_types.auth_req_t:
            writer.uint32(27);
            return msg_types.auth_req_t.encode(msg, writer).finish();
        case msg_types.delete_route_msg_t:
            writer.uint32(72);
            return msg_types.delete_route_msg_t.encode(msg, writer).finish();
        case msg_types.delete_route_rep_t:
            writer.uint32(70);
            return msg_types.delete_route_rep_t.encode(msg, writer).finish();
        case msg_types.delete_route_req_t:
            writer.uint32(69);
            return msg_types.delete_route_req_t.encode(msg, writer).finish();
        case msg_types.delete_topics_rep_t:
            writer.uint32(84);
            return msg_types.delete_topics_rep_t.encode(msg, writer).finish();
        case msg_types.delete_topics_req_t:
            writer.uint32(83);
            return msg_types.delete_topics_req_t.encode(msg, writer).finish();
        case msg_types.do2_rep_t:
            writer.uint32(10);
            return msg_types.do2_rep_t.encode(msg, writer).finish();
        case msg_types.do2_req_t:
            writer.uint32(9);
            return msg_types.do2_req_t.encode(msg, writer).finish();
        case msg_types.do_rep_t:
            writer.uint32(8);
            return msg_types.do_rep_t.encode(msg, writer).finish();
        case msg_types.do_req_t:
            writer.uint32(7);
            return msg_types.do_req_t.encode(msg, writer).finish();
        case msg_types.error2_rep_t:
            writer.uint32(32);
            return msg_types.error2_rep_t.encode(msg, writer).finish();
        case msg_types.error_rep_t:
            writer.uint32(30);
            return msg_types.error_rep_t.encode(msg, writer).finish();
        case msg_types.ok2_rep_t:
            writer.uint32(31);
            return msg_types.ok2_rep_t.encode(msg, writer).finish();
        case msg_types.ok_rep_t:
            writer.uint32(29);
            return msg_types.ok_rep_t.encode(msg, writer).finish();
        case msg_types.ping_rep_t:
            writer.uint32(2);
            return msg_types.ping_rep_t.encode(msg, writer).finish();
        case msg_types.ping_req_t:
            writer.uint32(1);
            return msg_types.ping_req_t.encode(msg, writer).finish();
        case msg_types.pull_rep_t:
            writer.uint32(4);
            return msg_types.pull_rep_t.encode(msg, writer).finish();
        case msg_types.pull_req_t:
            writer.uint32(3);
            return msg_types.pull_req_t.encode(msg, writer).finish();
        case msg_types.pull_routes_rep_t:
            writer.uint32(76);
            return msg_types.pull_routes_rep_t.encode(msg, writer).finish();
        case msg_types.pull_routes_req_t:
            writer.uint32(75);
            return msg_types.pull_routes_req_t.encode(msg, writer).finish();
        case msg_types.push_rep_t:
            writer.uint32(6);
            return msg_types.push_rep_t.encode(msg, writer).finish();
        case msg_types.push_req_t:
            writer.uint32(5);
            return msg_types.push_req_t.encode(msg, writer).finish();
        case msg_types.push_routes_rep_t:
            writer.uint32(74);
            return msg_types.push_routes_rep_t.encode(msg, writer).finish();
        case msg_types.push_routes_req_t:
            writer.uint32(73);
            return msg_types.push_routes_req_t.encode(msg, writer).finish();
        case msg_types.register_backend_rep_t:
            writer.uint32(82);
            return msg_types.register_backend_rep_t.encode(msg, writer).finish();
        case msg_types.register_backend_req_t:
            writer.uint32(81);
            return msg_types.register_backend_req_t.encode(msg, writer).finish();
        case msg_types.register_frontend_rep_t:
            writer.uint32(66);
            return msg_types.register_frontend_rep_t.encode(msg, writer).finish();
        case msg_types.register_frontend_req_t:
            writer.uint32(65);
            return msg_types.register_frontend_req_t.encode(msg, writer).finish();
        case msg_types.resolve_backend_rep_t:
            writer.uint32(100);
            return msg_types.resolve_backend_rep_t.encode(msg, writer).finish();
        case msg_types.resolve_backend_req_t:
            writer.uint32(99);
            return msg_types.resolve_backend_req_t.encode(msg, writer).finish();
        case msg_types.resolve_frontend_rep_t:
            writer.uint32(98);
            return msg_types.resolve_frontend_rep_t.encode(msg, writer).finish();
        case msg_types.resolve_frontend_req_t:
            writer.uint32(97);
            return msg_types.resolve_frontend_req_t.encode(msg, writer).finish();
        case msg_types.resolve_ip_rep_t:
            writer.uint32(122);
            return msg_types.resolve_ip_rep_t.encode(msg, writer).finish();
        case msg_types.resolve_ip_req_t:
            writer.uint32(121);
            return msg_types.resolve_ip_req_t.encode(msg, writer).finish();
        case msg_types.unwatch_rep_t:
            writer.uint32(108);
            return msg_types.unwatch_rep_t.encode(msg, writer).finish();
        case msg_types.unwatch_req_t:
            writer.uint32(107);
            return msg_types.unwatch_req_t.encode(msg, writer).finish();
        case msg_types.watch_rep_t:
            writer.uint32(106);
            return msg_types.watch_rep_t.encode(msg, writer).finish();
        case msg_types.watch_req_t:
            writer.uint32(105);
            return msg_types.watch_req_t.encode(msg, writer).finish();
        default:
            throw `Unknown msg type: ${msg.constructor}`;
    }
}
export function decode_msg(msg) {
    const reader = new protobuf.Reader(new Uint8Array(msg));
    const msg_type_uint32 = reader.uint32();
    switch (msg_type_uint32) {
        case 71:
            return msg_types.add_route_msg_t.decode(reader);
        case 68:
            return msg_types.add_route_rep_t.decode(reader);
        case 67:
            return msg_types.add_route_req_t.decode(reader);
        case 28:
            return msg_types.auth_rep_t.decode(reader);
        case 27:
            return msg_types.auth_req_t.decode(reader);
        case 72:
            return msg_types.delete_route_msg_t.decode(reader);
        case 70:
            return msg_types.delete_route_rep_t.decode(reader);
        case 69:
            return msg_types.delete_route_req_t.decode(reader);
        case 84:
            return msg_types.delete_topics_rep_t.decode(reader);
        case 83:
            return msg_types.delete_topics_req_t.decode(reader);
        case 10:
            return msg_types.do2_rep_t.decode(reader);
        case 9:
            return msg_types.do2_req_t.decode(reader);
        case 8:
            return msg_types.do_rep_t.decode(reader);
        case 7:
            return msg_types.do_req_t.decode(reader);
        case 32:
            return msg_types.error2_rep_t.decode(reader);
        case 30:
            return msg_types.error_rep_t.decode(reader);
        case 31:
            return msg_types.ok2_rep_t.decode(reader);
        case 29:
            return msg_types.ok_rep_t.decode(reader);
        case 2:
            return msg_types.ping_rep_t.decode(reader);
        case 1:
            return msg_types.ping_req_t.decode(reader);
        case 4:
            return msg_types.pull_rep_t.decode(reader);
        case 3:
            return msg_types.pull_req_t.decode(reader);
        case 76:
            return msg_types.pull_routes_rep_t.decode(reader);
        case 75:
            return msg_types.pull_routes_req_t.decode(reader);
        case 6:
            return msg_types.push_rep_t.decode(reader);
        case 5:
            return msg_types.push_req_t.decode(reader);
        case 74:
            return msg_types.push_routes_rep_t.decode(reader);
        case 73:
            return msg_types.push_routes_req_t.decode(reader);
        case 82:
            return msg_types.register_backend_rep_t.decode(reader);
        case 81:
            return msg_types.register_backend_req_t.decode(reader);
        case 66:
            return msg_types.register_frontend_rep_t.decode(reader);
        case 65:
            return msg_types.register_frontend_req_t.decode(reader);
        case 100:
            return msg_types.resolve_backend_rep_t.decode(reader);
        case 99:
            return msg_types.resolve_backend_req_t.decode(reader);
        case 98:
            return msg_types.resolve_frontend_rep_t.decode(reader);
        case 97:
            return msg_types.resolve_frontend_req_t.decode(reader);
        case 122:
            return msg_types.resolve_ip_rep_t.decode(reader);
        case 121:
            return msg_types.resolve_ip_req_t.decode(reader);
        case 108:
            return msg_types.unwatch_rep_t.decode(reader);
        case 107:
            return msg_types.unwatch_req_t.decode(reader);
        case 106:
            return msg_types.watch_rep_t.decode(reader);
        case 105:
            return msg_types.watch_req_t.decode(reader);
        default:
            throw `Unknown msg type: ${msg_type_uint32}`;
    }
}
export default { msg_types, encode_msg, decode_msg };
