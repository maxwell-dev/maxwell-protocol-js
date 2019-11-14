const protobuf = require("protobufjs/light");
const json_descriptors = require("./maxwell.protocol.json");

const root = protobuf.Root.fromJSON(json_descriptors);

const add_route_msg_t = root.lookupType("maxwell.protocol.add_route_msg_t");
const add_route_rep_t = root.lookupType("maxwell.protocol.add_route_rep_t");
const add_route_req_t = root.lookupType("maxwell.protocol.add_route_req_t");
const auth_rep_t = root.lookupType("maxwell.protocol.auth_rep_t");
const auth_req_t = root.lookupType("maxwell.protocol.auth_req_t");
const delete_route_msg_t = root.lookupType("maxwell.protocol.delete_route_msg_t");
const delete_route_rep_t = root.lookupType("maxwell.protocol.delete_route_rep_t");
const delete_route_req_t = root.lookupType("maxwell.protocol.delete_route_req_t");
const delete_topics_rep_t = root.lookupType("maxwell.protocol.delete_topics_rep_t");
const delete_topics_req_t = root.lookupType("maxwell.protocol.delete_topics_req_t");
const do2_rep_t = root.lookupType("maxwell.protocol.do2_rep_t");
const do2_req_t = root.lookupType("maxwell.protocol.do2_req_t");
const do_rep_t = root.lookupType("maxwell.protocol.do_rep_t");
const do_req_t = root.lookupType("maxwell.protocol.do_req_t");
const error2_rep_t = root.lookupType("maxwell.protocol.error2_rep_t");
const error_rep_t = root.lookupType("maxwell.protocol.error_rep_t");
const ok2_rep_t = root.lookupType("maxwell.protocol.ok2_rep_t");
const ok_rep_t = root.lookupType("maxwell.protocol.ok_rep_t");
const ping_rep_t = root.lookupType("maxwell.protocol.ping_rep_t");
const ping_req_t = root.lookupType("maxwell.protocol.ping_req_t");
const pull_rep_t = root.lookupType("maxwell.protocol.pull_rep_t");
const pull_req_t = root.lookupType("maxwell.protocol.pull_req_t");
const pull_routes_rep_t = root.lookupType("maxwell.protocol.pull_routes_rep_t");
const pull_routes_req_t = root.lookupType("maxwell.protocol.pull_routes_req_t");
const push_rep_t = root.lookupType("maxwell.protocol.push_rep_t");
const push_req_t = root.lookupType("maxwell.protocol.push_req_t");
const push_routes_rep_t = root.lookupType("maxwell.protocol.push_routes_rep_t");
const push_routes_req_t = root.lookupType("maxwell.protocol.push_routes_req_t");
const register_backend_rep_t = root.lookupType("maxwell.protocol.register_backend_rep_t");
const register_backend_req_t = root.lookupType("maxwell.protocol.register_backend_req_t");
const register_frontend_rep_t = root.lookupType("maxwell.protocol.register_frontend_rep_t");
const register_frontend_req_t = root.lookupType("maxwell.protocol.register_frontend_req_t");
const resolve_backend_rep_t = root.lookupType("maxwell.protocol.resolve_backend_rep_t");
const resolve_backend_req_t = root.lookupType("maxwell.protocol.resolve_backend_req_t");
const resolve_frontend_rep_t = root.lookupType("maxwell.protocol.resolve_frontend_rep_t");
const resolve_frontend_req_t = root.lookupType("maxwell.protocol.resolve_frontend_req_t");
const resolve_ip_rep_t = root.lookupType("maxwell.protocol.resolve_ip_rep_t");
const resolve_ip_req_t = root.lookupType("maxwell.protocol.resolve_ip_req_t");
const unwatch_rep_t = root.lookupType("maxwell.protocol.unwatch_rep_t");
const unwatch_req_t = root.lookupType("maxwell.protocol.unwatch_req_t");
const watch_rep_t = root.lookupType("maxwell.protocol.watch_rep_t");
const watch_req_t = root.lookupType("maxwell.protocol.watch_req_t");

function encode_msg(msg) {
  let writer = new protobuf.Writer();
  switch (msg.__proto__.$type) {
    case add_route_msg_t:
      writer.uint32(71);
      return add_route_msg_t.encode(msg, writer).finish();
    case add_route_rep_t:
      writer.uint32(68);
      return add_route_rep_t.encode(msg, writer).finish();
    case add_route_req_t:
      writer.uint32(67);
      return add_route_req_t.encode(msg, writer).finish();
    case auth_rep_t:
      writer.uint32(28);
      return auth_rep_t.encode(msg, writer).finish();
    case auth_req_t:
      writer.uint32(27);
      return auth_req_t.encode(msg, writer).finish();
    case delete_route_msg_t:
      writer.uint32(72);
      return delete_route_msg_t.encode(msg, writer).finish();
    case delete_route_rep_t:
      writer.uint32(70);
      return delete_route_rep_t.encode(msg, writer).finish();
    case delete_route_req_t:
      writer.uint32(69);
      return delete_route_req_t.encode(msg, writer).finish();
    case delete_topics_rep_t:
      writer.uint32(84);
      return delete_topics_rep_t.encode(msg, writer).finish();
    case delete_topics_req_t:
      writer.uint32(83);
      return delete_topics_req_t.encode(msg, writer).finish();
    case do2_rep_t:
      writer.uint32(10);
      return do2_rep_t.encode(msg, writer).finish();
    case do2_req_t:
      writer.uint32(9);
      return do2_req_t.encode(msg, writer).finish();
    case do_rep_t:
      writer.uint32(8);
      return do_rep_t.encode(msg, writer).finish();
    case do_req_t:
      writer.uint32(7);
      return do_req_t.encode(msg, writer).finish();
    case error2_rep_t:
      writer.uint32(32);
      return error2_rep_t.encode(msg, writer).finish();
    case error_rep_t:
      writer.uint32(30);
      return error_rep_t.encode(msg, writer).finish();
    case ok2_rep_t:
      writer.uint32(31);
      return ok2_rep_t.encode(msg, writer).finish();
    case ok_rep_t:
      writer.uint32(29);
      return ok_rep_t.encode(msg, writer).finish();
    case ping_rep_t:
      writer.uint32(2);
      return ping_rep_t.encode(msg, writer).finish();
    case ping_req_t:
      writer.uint32(1);
      return ping_req_t.encode(msg, writer).finish();
    case pull_rep_t:
      writer.uint32(4);
      return pull_rep_t.encode(msg, writer).finish();
    case pull_req_t:
      writer.uint32(3);
      return pull_req_t.encode(msg, writer).finish();
    case pull_routes_rep_t:
      writer.uint32(76);
      return pull_routes_rep_t.encode(msg, writer).finish();
    case pull_routes_req_t:
      writer.uint32(75);
      return pull_routes_req_t.encode(msg, writer).finish();
    case push_rep_t:
      writer.uint32(6);
      return push_rep_t.encode(msg, writer).finish();
    case push_req_t:
      writer.uint32(5);
      return push_req_t.encode(msg, writer).finish();
    case push_routes_rep_t:
      writer.uint32(74);
      return push_routes_rep_t.encode(msg, writer).finish();
    case push_routes_req_t:
      writer.uint32(73);
      return push_routes_req_t.encode(msg, writer).finish();
    case register_backend_rep_t:
      writer.uint32(82);
      return register_backend_rep_t.encode(msg, writer).finish();
    case register_backend_req_t:
      writer.uint32(81);
      return register_backend_req_t.encode(msg, writer).finish();
    case register_frontend_rep_t:
      writer.uint32(66);
      return register_frontend_rep_t.encode(msg, writer).finish();
    case register_frontend_req_t:
      writer.uint32(65);
      return register_frontend_req_t.encode(msg, writer).finish();
    case resolve_backend_rep_t:
      writer.uint32(100);
      return resolve_backend_rep_t.encode(msg, writer).finish();
    case resolve_backend_req_t:
      writer.uint32(99);
      return resolve_backend_req_t.encode(msg, writer).finish();
    case resolve_frontend_rep_t:
      writer.uint32(98);
      return resolve_frontend_rep_t.encode(msg, writer).finish();
    case resolve_frontend_req_t:
      writer.uint32(97);
      return resolve_frontend_req_t.encode(msg, writer).finish();
    case resolve_ip_rep_t:
      writer.uint32(122);
      return resolve_ip_rep_t.encode(msg, writer).finish();
    case resolve_ip_req_t:
      writer.uint32(121);
      return resolve_ip_req_t.encode(msg, writer).finish();
    case unwatch_rep_t:
      writer.uint32(108);
      return unwatch_rep_t.encode(msg, writer).finish();
    case unwatch_req_t:
      writer.uint32(107);
      return unwatch_req_t.encode(msg, writer).finish();
    case watch_rep_t:
      writer.uint32(106);
      return watch_rep_t.encode(msg, writer).finish();
    case watch_req_t:
      writer.uint32(105);
      return watch_req_t.encode(msg, writer).finish();
    default:
      throw `Unknown msg type: ${msg.__proto__.$type}`;
  }
}

function decode_msg(msg) {
  let reader = new protobuf.Reader(new Uint8Array(msg));
  let msg_type_uint32 = reader.uint32();
  switch (msg_type_uint32) {
    case 71:
      return add_route_msg_t.decode(reader);
    case 68:
      return add_route_rep_t.decode(reader);
    case 67:
      return add_route_req_t.decode(reader);
    case 28:
      return auth_rep_t.decode(reader);
    case 27:
      return auth_req_t.decode(reader);
    case 72:
      return delete_route_msg_t.decode(reader);
    case 70:
      return delete_route_rep_t.decode(reader);
    case 69:
      return delete_route_req_t.decode(reader);
    case 84:
      return delete_topics_rep_t.decode(reader);
    case 83:
      return delete_topics_req_t.decode(reader);
    case 10:
      return do2_rep_t.decode(reader);
    case 9:
      return do2_req_t.decode(reader);
    case 8:
      return do_rep_t.decode(reader);
    case 7:
      return do_req_t.decode(reader);
    case 32:
      return error2_rep_t.decode(reader);
    case 30:
      return error_rep_t.decode(reader);
    case 31:
      return ok2_rep_t.decode(reader);
    case 29:
      return ok_rep_t.decode(reader);
    case 2:
      return ping_rep_t.decode(reader);
    case 1:
      return ping_req_t.decode(reader);
    case 4:
      return pull_rep_t.decode(reader);
    case 3:
      return pull_req_t.decode(reader);
    case 76:
      return pull_routes_rep_t.decode(reader);
    case 75:
      return pull_routes_req_t.decode(reader);
    case 6:
      return push_rep_t.decode(reader);
    case 5:
      return push_req_t.decode(reader);
    case 74:
      return push_routes_rep_t.decode(reader);
    case 73:
      return push_routes_req_t.decode(reader);
    case 82:
      return register_backend_rep_t.decode(reader);
    case 81:
      return register_backend_req_t.decode(reader);
    case 66:
      return register_frontend_rep_t.decode(reader);
    case 65:
      return register_frontend_req_t.decode(reader);
    case 100:
      return resolve_backend_rep_t.decode(reader);
    case 99:
      return resolve_backend_req_t.decode(reader);
    case 98:
      return resolve_frontend_rep_t.decode(reader);
    case 97:
      return resolve_frontend_req_t.decode(reader);
    case 122:
      return resolve_ip_rep_t.decode(reader);
    case 121:
      return resolve_ip_req_t.decode(reader);
    case 108:
      return unwatch_rep_t.decode(reader);
    case 107:
      return unwatch_req_t.decode(reader);
    case 106:
      return watch_rep_t.decode(reader);
    case 105:
      return watch_req_t.decode(reader);
    default:
      throw `Unknown msg type: ${msg_type_uint32}`;
  }
}

module.exports.add_route_msg_t = add_route_msg_t;
module.exports.add_route_rep_t = add_route_rep_t;
module.exports.add_route_req_t = add_route_req_t;
module.exports.auth_rep_t = auth_rep_t;
module.exports.auth_req_t = auth_req_t;
module.exports.delete_route_msg_t = delete_route_msg_t;
module.exports.delete_route_rep_t = delete_route_rep_t;
module.exports.delete_route_req_t = delete_route_req_t;
module.exports.delete_topics_rep_t = delete_topics_rep_t;
module.exports.delete_topics_req_t = delete_topics_req_t;
module.exports.do2_rep_t = do2_rep_t;
module.exports.do2_req_t = do2_req_t;
module.exports.do_rep_t = do_rep_t;
module.exports.do_req_t = do_req_t;
module.exports.error2_rep_t = error2_rep_t;
module.exports.error_rep_t = error_rep_t;
module.exports.ok2_rep_t = ok2_rep_t;
module.exports.ok_rep_t = ok_rep_t;
module.exports.ping_rep_t = ping_rep_t;
module.exports.ping_req_t = ping_req_t;
module.exports.pull_rep_t = pull_rep_t;
module.exports.pull_req_t = pull_req_t;
module.exports.pull_routes_rep_t = pull_routes_rep_t;
module.exports.pull_routes_req_t = pull_routes_req_t;
module.exports.push_rep_t = push_rep_t;
module.exports.push_req_t = push_req_t;
module.exports.push_routes_rep_t = push_routes_rep_t;
module.exports.push_routes_req_t = push_routes_req_t;
module.exports.register_backend_rep_t = register_backend_rep_t;
module.exports.register_backend_req_t = register_backend_req_t;
module.exports.register_frontend_rep_t = register_frontend_rep_t;
module.exports.register_frontend_req_t = register_frontend_req_t;
module.exports.resolve_backend_rep_t = resolve_backend_rep_t;
module.exports.resolve_backend_req_t = resolve_backend_req_t;
module.exports.resolve_frontend_rep_t = resolve_frontend_rep_t;
module.exports.resolve_frontend_req_t = resolve_frontend_req_t;
module.exports.resolve_ip_rep_t = resolve_ip_rep_t;
module.exports.resolve_ip_req_t = resolve_ip_req_t;
module.exports.unwatch_rep_t = unwatch_rep_t;
module.exports.unwatch_req_t = unwatch_req_t;
module.exports.watch_rep_t = watch_rep_t;
module.exports.watch_req_t = watch_req_t;
module.exports.msg_t = root.lookupType("maxwell.protocol.msg_t");
module.exports.source_t = root.lookupType("maxwell.protocol.source_t");
module.exports.trace_t = root.lookupType("maxwell.protocol.trace_t");
module.exports.encode_msg = encode_msg;
module.exports.decode_msg = decode_msg;