import * as root from "./maxwell_protocol";
export declare const msg_types: typeof root.maxwell.protocol;
export declare function encode_msg(msg: any): Uint8Array;
export declare function decode_msg(msg: ArrayBuffer): any;
declare const _default: {
    msg_types: typeof root.maxwell.protocol;
    encode_msg: typeof encode_msg;
    decode_msg: typeof decode_msg;
};
export default _default;
