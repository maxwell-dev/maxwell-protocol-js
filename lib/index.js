import * as protobuf from "protobufjs/minimal";
// @ts-expect-error Explicitly disable long.js support
protobuf.util.Long = undefined;
protobuf.configure();
export { default } from "./maxwell_protocol_ext";
export * from "./maxwell_protocol_ext";
