import * as root from "./maxwell_protocol";
export declare const protocol: typeof root.maxwell.protocol;
export declare function encode_msg(msg: any): Uint8Array;
export declare function decode_msg(msg: ArrayBuffer): any;
