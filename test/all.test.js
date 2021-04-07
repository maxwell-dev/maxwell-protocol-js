import { protocol, encode_msg, decode_msg } from "../src/maxwell_protocol_ext";

test("all", () => {
  const pingReq = protocol.ping_req_t.create({ ref: 1 });
  const pingReq2 = new protocol.ping_req_t({ ref: 1 });
  expect(pingReq.ref).toStrictEqual(pingReq2.ref);

  expect(encode_msg(pingReq)).toStrictEqual(encode_msg(pingReq2));
  const decodedPingReq = decode_msg(encode_msg(pingReq));
  expect(pingReq.ref).toStrictEqual(decodedPingReq.ref);
});
