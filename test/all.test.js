import protocol, { msg_types } from "../src";

test("all", () => {
  const pingReq = new msg_types.ping_req_t({ ref: 1 });
  const decodedPingReq = protocol.decode_msg(protocol.encode_msg(pingReq));
  expect(pingReq.ref).toStrictEqual(decodedPingReq.ref);
});
