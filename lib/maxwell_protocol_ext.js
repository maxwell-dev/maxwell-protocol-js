import * as protobuf from "protobufjs/minimal";
import * as root from "./maxwell_protocol";
export const protocol = root.maxwell.protocol;
export function encode_msg(msg) {
    const writer = new protobuf.Writer();
    switch (msg.constructor) {
        case protocol.add_route_msg_t:
            writer.uint32(71);
            return protocol.add_route_msg_t.encode(msg, writer).finish();
        case protocol.add_route_rep_t:
            writer.uint32(68);
            return protocol.add_route_rep_t.encode(msg, writer).finish();
        case protocol.add_route_req_t:
            writer.uint32(67);
            return protocol.add_route_req_t.encode(msg, writer).finish();
        case protocol.auth_rep_t:
            writer.uint32(28);
            return protocol.auth_rep_t.encode(msg, writer).finish();
        case protocol.auth_req_t:
            writer.uint32(27);
            return protocol.auth_req_t.encode(msg, writer).finish();
        case protocol.delete_route_msg_t:
            writer.uint32(72);
            return protocol.delete_route_msg_t.encode(msg, writer).finish();
        case protocol.delete_route_rep_t:
            writer.uint32(70);
            return protocol.delete_route_rep_t.encode(msg, writer).finish();
        case protocol.delete_route_req_t:
            writer.uint32(69);
            return protocol.delete_route_req_t.encode(msg, writer).finish();
        case protocol.delete_topics_rep_t:
            writer.uint32(84);
            return protocol.delete_topics_rep_t.encode(msg, writer).finish();
        case protocol.delete_topics_req_t:
            writer.uint32(83);
            return protocol.delete_topics_req_t.encode(msg, writer).finish();
        case protocol.do2_rep_t:
            writer.uint32(10);
            return protocol.do2_rep_t.encode(msg, writer).finish();
        case protocol.do2_req_t:
            writer.uint32(9);
            return protocol.do2_req_t.encode(msg, writer).finish();
        case protocol.do_rep_t:
            writer.uint32(8);
            return protocol.do_rep_t.encode(msg, writer).finish();
        case protocol.do_req_t:
            writer.uint32(7);
            return protocol.do_req_t.encode(msg, writer).finish();
        case protocol.error2_rep_t:
            writer.uint32(32);
            return protocol.error2_rep_t.encode(msg, writer).finish();
        case protocol.error_rep_t:
            writer.uint32(30);
            return protocol.error_rep_t.encode(msg, writer).finish();
        case protocol.ok2_rep_t:
            writer.uint32(31);
            return protocol.ok2_rep_t.encode(msg, writer).finish();
        case protocol.ok_rep_t:
            writer.uint32(29);
            return protocol.ok_rep_t.encode(msg, writer).finish();
        case protocol.ping_rep_t:
            writer.uint32(2);
            return protocol.ping_rep_t.encode(msg, writer).finish();
        case protocol.ping_req_t:
            writer.uint32(1);
            return protocol.ping_req_t.encode(msg, writer).finish();
        case protocol.pull_rep_t:
            writer.uint32(4);
            return protocol.pull_rep_t.encode(msg, writer).finish();
        case protocol.pull_req_t:
            writer.uint32(3);
            return protocol.pull_req_t.encode(msg, writer).finish();
        case protocol.pull_routes_rep_t:
            writer.uint32(76);
            return protocol.pull_routes_rep_t.encode(msg, writer).finish();
        case protocol.pull_routes_req_t:
            writer.uint32(75);
            return protocol.pull_routes_req_t.encode(msg, writer).finish();
        case protocol.push_rep_t:
            writer.uint32(6);
            return protocol.push_rep_t.encode(msg, writer).finish();
        case protocol.push_req_t:
            writer.uint32(5);
            return protocol.push_req_t.encode(msg, writer).finish();
        case protocol.push_routes_rep_t:
            writer.uint32(74);
            return protocol.push_routes_rep_t.encode(msg, writer).finish();
        case protocol.push_routes_req_t:
            writer.uint32(73);
            return protocol.push_routes_req_t.encode(msg, writer).finish();
        case protocol.register_backend_rep_t:
            writer.uint32(82);
            return protocol.register_backend_rep_t.encode(msg, writer).finish();
        case protocol.register_backend_req_t:
            writer.uint32(81);
            return protocol.register_backend_req_t.encode(msg, writer).finish();
        case protocol.register_frontend_rep_t:
            writer.uint32(66);
            return protocol.register_frontend_rep_t.encode(msg, writer).finish();
        case protocol.register_frontend_req_t:
            writer.uint32(65);
            return protocol.register_frontend_req_t.encode(msg, writer).finish();
        case protocol.resolve_backend_rep_t:
            writer.uint32(100);
            return protocol.resolve_backend_rep_t.encode(msg, writer).finish();
        case protocol.resolve_backend_req_t:
            writer.uint32(99);
            return protocol.resolve_backend_req_t.encode(msg, writer).finish();
        case protocol.resolve_frontend_rep_t:
            writer.uint32(98);
            return protocol.resolve_frontend_rep_t.encode(msg, writer).finish();
        case protocol.resolve_frontend_req_t:
            writer.uint32(97);
            return protocol.resolve_frontend_req_t.encode(msg, writer).finish();
        case protocol.resolve_ip_rep_t:
            writer.uint32(122);
            return protocol.resolve_ip_rep_t.encode(msg, writer).finish();
        case protocol.resolve_ip_req_t:
            writer.uint32(121);
            return protocol.resolve_ip_req_t.encode(msg, writer).finish();
        case protocol.unwatch_rep_t:
            writer.uint32(108);
            return protocol.unwatch_rep_t.encode(msg, writer).finish();
        case protocol.unwatch_req_t:
            writer.uint32(107);
            return protocol.unwatch_req_t.encode(msg, writer).finish();
        case protocol.watch_rep_t:
            writer.uint32(106);
            return protocol.watch_rep_t.encode(msg, writer).finish();
        case protocol.watch_req_t:
            writer.uint32(105);
            return protocol.watch_req_t.encode(msg, writer).finish();
        default:
            throw `Unknown msg type: ${msg.constructor}`;
    }
}
export function decode_msg(msg) {
    const reader = new protobuf.Reader(new Uint8Array(msg));
    const msg_type_uint32 = reader.uint32();
    switch (msg_type_uint32) {
        case 71:
            return protocol.add_route_msg_t.decode(reader);
        case 68:
            return protocol.add_route_rep_t.decode(reader);
        case 67:
            return protocol.add_route_req_t.decode(reader);
        case 28:
            return protocol.auth_rep_t.decode(reader);
        case 27:
            return protocol.auth_req_t.decode(reader);
        case 72:
            return protocol.delete_route_msg_t.decode(reader);
        case 70:
            return protocol.delete_route_rep_t.decode(reader);
        case 69:
            return protocol.delete_route_req_t.decode(reader);
        case 84:
            return protocol.delete_topics_rep_t.decode(reader);
        case 83:
            return protocol.delete_topics_req_t.decode(reader);
        case 10:
            return protocol.do2_rep_t.decode(reader);
        case 9:
            return protocol.do2_req_t.decode(reader);
        case 8:
            return protocol.do_rep_t.decode(reader);
        case 7:
            return protocol.do_req_t.decode(reader);
        case 32:
            return protocol.error2_rep_t.decode(reader);
        case 30:
            return protocol.error_rep_t.decode(reader);
        case 31:
            return protocol.ok2_rep_t.decode(reader);
        case 29:
            return protocol.ok_rep_t.decode(reader);
        case 2:
            return protocol.ping_rep_t.decode(reader);
        case 1:
            return protocol.ping_req_t.decode(reader);
        case 4:
            return protocol.pull_rep_t.decode(reader);
        case 3:
            return protocol.pull_req_t.decode(reader);
        case 76:
            return protocol.pull_routes_rep_t.decode(reader);
        case 75:
            return protocol.pull_routes_req_t.decode(reader);
        case 6:
            return protocol.push_rep_t.decode(reader);
        case 5:
            return protocol.push_req_t.decode(reader);
        case 74:
            return protocol.push_routes_rep_t.decode(reader);
        case 73:
            return protocol.push_routes_req_t.decode(reader);
        case 82:
            return protocol.register_backend_rep_t.decode(reader);
        case 81:
            return protocol.register_backend_req_t.decode(reader);
        case 66:
            return protocol.register_frontend_rep_t.decode(reader);
        case 65:
            return protocol.register_frontend_req_t.decode(reader);
        case 100:
            return protocol.resolve_backend_rep_t.decode(reader);
        case 99:
            return protocol.resolve_backend_req_t.decode(reader);
        case 98:
            return protocol.resolve_frontend_rep_t.decode(reader);
        case 97:
            return protocol.resolve_frontend_req_t.decode(reader);
        case 122:
            return protocol.resolve_ip_rep_t.decode(reader);
        case 121:
            return protocol.resolve_ip_req_t.decode(reader);
        case 108:
            return protocol.unwatch_rep_t.decode(reader);
        case 107:
            return protocol.unwatch_req_t.decode(reader);
        case 106:
            return protocol.watch_rep_t.decode(reader);
        case 105:
            return protocol.watch_req_t.decode(reader);
        default:
            throw `Unknown msg type: ${msg_type_uint32}`;
    }
}
