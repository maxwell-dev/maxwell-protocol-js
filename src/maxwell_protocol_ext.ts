import * as protobuf from "protobufjs/minimal";
import * as root from "./maxwell_protocol";

export const msg_types = root.maxwell.protocol;

export function encode_msg(msg: any): Uint8Array {
  const writer = new protobuf.Writer();
  switch (msg.constructor) {
    case msg_types.add_routes_rep_t:
      writer.uint32(92);
      return msg_types.add_routes_rep_t.encode(msg, writer).finish();
    case msg_types.add_routes_req_t:
      writer.uint32(91);
      return msg_types.add_routes_req_t.encode(msg, writer).finish();
    case msg_types.assign_frontend_rep_t:
      writer.uint32(112);
      return msg_types.assign_frontend_rep_t.encode(msg, writer).finish();
    case msg_types.assign_frontend_req_t:
      writer.uint32(111);
      return msg_types.assign_frontend_req_t.encode(msg, writer).finish();
    case msg_types.auth_rep_t:
      writer.uint32(28);
      return msg_types.auth_rep_t.encode(msg, writer).finish();
    case msg_types.auth_req_t:
      writer.uint32(27);
      return msg_types.auth_req_t.encode(msg, writer).finish();
    case msg_types.error2_rep_t:
      writer.uint32(32);
      return msg_types.error2_rep_t.encode(msg, writer).finish();
    case msg_types.error_rep_t:
      writer.uint32(30);
      return msg_types.error_rep_t.encode(msg, writer).finish();
    case msg_types.get_routes_rep_t:
      writer.uint32(96);
      return msg_types.get_routes_rep_t.encode(msg, writer).finish();
    case msg_types.get_routes_req_t:
      writer.uint32(95);
      return msg_types.get_routes_req_t.encode(msg, writer).finish();
    case msg_types.locate_topic_rep_t:
      writer.uint32(114);
      return msg_types.locate_topic_rep_t.encode(msg, writer).finish();
    case msg_types.locate_topic_req_t:
      writer.uint32(113);
      return msg_types.locate_topic_req_t.encode(msg, writer).finish();
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
      writer.uint32(6);
      return msg_types.pull_rep_t.encode(msg, writer).finish();
    case msg_types.pull_req_t:
      writer.uint32(5);
      return msg_types.pull_req_t.encode(msg, writer).finish();
    case msg_types.push_rep_t:
      writer.uint32(4);
      return msg_types.push_rep_t.encode(msg, writer).finish();
    case msg_types.push_req_t:
      writer.uint32(3);
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
    case msg_types.register_server_rep_t:
      writer.uint32(70);
      return msg_types.register_server_rep_t.encode(msg, writer).finish();
    case msg_types.register_server_req_t:
      writer.uint32(69);
      return msg_types.register_server_req_t.encode(msg, writer).finish();
    case msg_types.req_rep_t:
      writer.uint32(8);
      return msg_types.req_rep_t.encode(msg, writer).finish();
    case msg_types.req_req_t:
      writer.uint32(7);
      return msg_types.req_req_t.encode(msg, writer).finish();
    case msg_types.resolve_ip_rep_t:
      writer.uint32(122);
      return msg_types.resolve_ip_rep_t.encode(msg, writer).finish();
    case msg_types.resolve_ip_req_t:
      writer.uint32(121);
      return msg_types.resolve_ip_req_t.encode(msg, writer).finish();
    case msg_types.route_added_msg_t:
      writer.uint32(100);
      return msg_types.route_added_msg_t.encode(msg, writer).finish();
    case msg_types.route_deleted_msg_t:
      writer.uint32(101);
      return msg_types.route_deleted_msg_t.encode(msg, writer).finish();
    case msg_types.route_health_changed_msg_t:
      writer.uint32(102);
      return msg_types.route_health_changed_msg_t.encode(msg, writer).finish();
    default:
      throw `Unknown msg type: ${msg.constructor}`;
  }
}

export function decode_msg(msg: ArrayBuffer): any {
  const reader = new protobuf.Reader(new Uint8Array(msg));
  const msg_type_uint32 = reader.uint32();
  switch (msg_type_uint32) {
    case 92:
      return msg_types.add_routes_rep_t.decode(reader);
    case 91:
      return msg_types.add_routes_req_t.decode(reader);
    case 112:
      return msg_types.assign_frontend_rep_t.decode(reader);
    case 111:
      return msg_types.assign_frontend_req_t.decode(reader);
    case 28:
      return msg_types.auth_rep_t.decode(reader);
    case 27:
      return msg_types.auth_req_t.decode(reader);
    case 32:
      return msg_types.error2_rep_t.decode(reader);
    case 30:
      return msg_types.error_rep_t.decode(reader);
    case 96:
      return msg_types.get_routes_rep_t.decode(reader);
    case 95:
      return msg_types.get_routes_req_t.decode(reader);
    case 114:
      return msg_types.locate_topic_rep_t.decode(reader);
    case 113:
      return msg_types.locate_topic_req_t.decode(reader);
    case 31:
      return msg_types.ok2_rep_t.decode(reader);
    case 29:
      return msg_types.ok_rep_t.decode(reader);
    case 2:
      return msg_types.ping_rep_t.decode(reader);
    case 1:
      return msg_types.ping_req_t.decode(reader);
    case 6:
      return msg_types.pull_rep_t.decode(reader);
    case 5:
      return msg_types.pull_req_t.decode(reader);
    case 4:
      return msg_types.push_rep_t.decode(reader);
    case 3:
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
      return msg_types.register_server_rep_t.decode(reader);
    case 69:
      return msg_types.register_server_req_t.decode(reader);
    case 8:
      return msg_types.req_rep_t.decode(reader);
    case 7:
      return msg_types.req_req_t.decode(reader);
    case 122:
      return msg_types.resolve_ip_rep_t.decode(reader);
    case 121:
      return msg_types.resolve_ip_req_t.decode(reader);
    case 100:
      return msg_types.route_added_msg_t.decode(reader);
    case 101:
      return msg_types.route_deleted_msg_t.decode(reader);
    case 102:
      return msg_types.route_health_changed_msg_t.decode(reader);
    default:
      throw `Unknown msg type: ${msg_type_uint32}`;
  }
}

export default { msg_types, encode_msg, decode_msg };