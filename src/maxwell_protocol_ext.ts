import * as protobuf from "protobufjs/minimal";
import * as root from "./maxwell_protocol";

export const msg_types = root.maxwell.protocol;

export function encode_msg(msg: any): Uint8Array {
  const writer = new protobuf.Writer();
  switch (msg.constructor) {
    case msg_types.auth_rep_t:
      writer.uint32(42);
      return msg_types.auth_rep_t.encode(msg, writer).finish();
    case msg_types.auth_req_t:
      writer.uint32(41);
      return msg_types.auth_req_t.encode(msg, writer).finish();
    case msg_types.error2_rep_t:
      writer.uint32(32);
      return msg_types.error2_rep_t.encode(msg, writer).finish();
    case msg_types.error_rep_t:
      writer.uint32(30);
      return msg_types.error_rep_t.encode(msg, writer).finish();
    case msg_types.get_routes_rep_t:
      writer.uint32(76);
      return msg_types.get_routes_rep_t.encode(msg, writer).finish();
    case msg_types.get_routes_req_t:
      writer.uint32(75);
      return msg_types.get_routes_req_t.encode(msg, writer).finish();
    case msg_types.get_route_dist_checksum_rep_t:
      writer.uint32(80);
      return msg_types.get_route_dist_checksum_rep_t.encode(msg, writer).finish();
    case msg_types.get_route_dist_checksum_req_t:
      writer.uint32(79);
      return msg_types.get_route_dist_checksum_req_t.encode(msg, writer).finish();
    case msg_types.get_topic_dist_checksum_rep_t:
      writer.uint32(78);
      return msg_types.get_topic_dist_checksum_rep_t.encode(msg, writer).finish();
    case msg_types.get_topic_dist_checksum_req_t:
      writer.uint32(77);
      return msg_types.get_topic_dist_checksum_req_t.encode(msg, writer).finish();
    case msg_types.locate_topic_rep_t:
      writer.uint32(86);
      return msg_types.locate_topic_rep_t.encode(msg, writer).finish();
    case msg_types.locate_topic_req_t:
      writer.uint32(85);
      return msg_types.locate_topic_req_t.encode(msg, writer).finish();
    case msg_types.ok2_rep_t:
      writer.uint32(31);
      return msg_types.ok2_rep_t.encode(msg, writer).finish();
    case msg_types.ok_rep_t:
      writer.uint32(29);
      return msg_types.ok_rep_t.encode(msg, writer).finish();
    case msg_types.pick_frontends_rep_t:
      writer.uint32(84);
      return msg_types.pick_frontends_rep_t.encode(msg, writer).finish();
    case msg_types.pick_frontends_req_t:
      writer.uint32(83);
      return msg_types.pick_frontends_req_t.encode(msg, writer).finish();
    case msg_types.pick_frontend_rep_t:
      writer.uint32(82);
      return msg_types.pick_frontend_rep_t.encode(msg, writer).finish();
    case msg_types.pick_frontend_req_t:
      writer.uint32(81);
      return msg_types.pick_frontend_req_t.encode(msg, writer).finish();
    case msg_types.ping_rep_t:
      writer.uint32(2);
      return msg_types.ping_rep_t.encode(msg, writer).finish();
    case msg_types.ping_req_t:
      writer.uint32(1);
      return msg_types.ping_req_t.encode(msg, writer).finish();
    case msg_types.pull_rep_t:
      writer.uint32(36);
      return msg_types.pull_rep_t.encode(msg, writer).finish();
    case msg_types.pull_req_t:
      writer.uint32(35);
      return msg_types.pull_req_t.encode(msg, writer).finish();
    case msg_types.push_rep_t:
      writer.uint32(34);
      return msg_types.push_rep_t.encode(msg, writer).finish();
    case msg_types.push_req_t:
      writer.uint32(33);
      return msg_types.push_req_t.encode(msg, writer).finish();
    case msg_types.register_backend_rep_t:
      writer.uint32(68);
      return msg_types.register_backend_rep_t.encode(msg, writer).finish();
    case msg_types.register_backend_req_t:
      writer.uint32(67);
      return msg_types.register_backend_req_t.encode(msg, writer).finish();
    case msg_types.register_frontend_rep_t:
      writer.uint32(66);
      return msg_types.register_frontend_rep_t.encode(msg, writer).finish();
    case msg_types.register_frontend_req_t:
      writer.uint32(65);
      return msg_types.register_frontend_req_t.encode(msg, writer).finish();
    case msg_types.register_service_rep_t:
      writer.uint32(70);
      return msg_types.register_service_rep_t.encode(msg, writer).finish();
    case msg_types.register_service_req_t:
      writer.uint32(69);
      return msg_types.register_service_req_t.encode(msg, writer).finish();
    case msg_types.req_rep_t:
      writer.uint32(40);
      return msg_types.req_rep_t.encode(msg, writer).finish();
    case msg_types.req_req_t:
      writer.uint32(39);
      return msg_types.req_req_t.encode(msg, writer).finish();
    case msg_types.resolve_ip_rep_t:
      writer.uint32(122);
      return msg_types.resolve_ip_rep_t.encode(msg, writer).finish();
    case msg_types.resolve_ip_req_t:
      writer.uint32(121);
      return msg_types.resolve_ip_req_t.encode(msg, writer).finish();
    case msg_types.set_routes_rep_t:
      writer.uint32(72);
      return msg_types.set_routes_rep_t.encode(msg, writer).finish();
    case msg_types.set_routes_req_t:
      writer.uint32(71);
      return msg_types.set_routes_req_t.encode(msg, writer).finish();
    default:
      throw `Unknown msg type: ${msg.constructor}`;
  }
}

export function decode_msg(msg: ArrayBuffer): any {
  const reader = new protobuf.Reader(new Uint8Array(msg));
  const msg_type_uint32 = reader.uint32();
  switch (msg_type_uint32) {
    case 42:
      return msg_types.auth_rep_t.decode(reader);
    case 41:
      return msg_types.auth_req_t.decode(reader);
    case 32:
      return msg_types.error2_rep_t.decode(reader);
    case 30:
      return msg_types.error_rep_t.decode(reader);
    case 76:
      return msg_types.get_routes_rep_t.decode(reader);
    case 75:
      return msg_types.get_routes_req_t.decode(reader);
    case 80:
      return msg_types.get_route_dist_checksum_rep_t.decode(reader);
    case 79:
      return msg_types.get_route_dist_checksum_req_t.decode(reader);
    case 78:
      return msg_types.get_topic_dist_checksum_rep_t.decode(reader);
    case 77:
      return msg_types.get_topic_dist_checksum_req_t.decode(reader);
    case 86:
      return msg_types.locate_topic_rep_t.decode(reader);
    case 85:
      return msg_types.locate_topic_req_t.decode(reader);
    case 31:
      return msg_types.ok2_rep_t.decode(reader);
    case 29:
      return msg_types.ok_rep_t.decode(reader);
    case 84:
      return msg_types.pick_frontends_rep_t.decode(reader);
    case 83:
      return msg_types.pick_frontends_req_t.decode(reader);
    case 82:
      return msg_types.pick_frontend_rep_t.decode(reader);
    case 81:
      return msg_types.pick_frontend_req_t.decode(reader);
    case 2:
      return msg_types.ping_rep_t.decode(reader);
    case 1:
      return msg_types.ping_req_t.decode(reader);
    case 36:
      return msg_types.pull_rep_t.decode(reader);
    case 35:
      return msg_types.pull_req_t.decode(reader);
    case 34:
      return msg_types.push_rep_t.decode(reader);
    case 33:
      return msg_types.push_req_t.decode(reader);
    case 68:
      return msg_types.register_backend_rep_t.decode(reader);
    case 67:
      return msg_types.register_backend_req_t.decode(reader);
    case 66:
      return msg_types.register_frontend_rep_t.decode(reader);
    case 65:
      return msg_types.register_frontend_req_t.decode(reader);
    case 70:
      return msg_types.register_service_rep_t.decode(reader);
    case 69:
      return msg_types.register_service_req_t.decode(reader);
    case 40:
      return msg_types.req_rep_t.decode(reader);
    case 39:
      return msg_types.req_req_t.decode(reader);
    case 122:
      return msg_types.resolve_ip_rep_t.decode(reader);
    case 121:
      return msg_types.resolve_ip_req_t.decode(reader);
    case 72:
      return msg_types.set_routes_rep_t.decode(reader);
    case 71:
      return msg_types.set_routes_req_t.decode(reader);
    default:
      throw `Unknown msg type: ${msg_type_uint32}`;
  }
}

export default { msg_types, encode_msg, decode_msg };