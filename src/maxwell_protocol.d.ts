import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace maxwell. */
export namespace maxwell {

    /** Namespace protocol. */
    namespace protocol {

        /** msg_type_t enum. */
        enum msg_type_t {
            UNKNOWN = 0,
            PING_REQ = 1,
            PING_REP = 2,
            PUSH_REQ = 3,
            PUSH_REP = 4,
            PULL_REQ = 5,
            PULL_REP = 6,
            REQ_REQ = 7,
            REQ_REP = 8,
            AUTH_REQ = 27,
            AUTH_REP = 28,
            OK_REP = 29,
            ERROR_REP = 30,
            OK2_REP = 31,
            ERROR2_REP = 32,
            REGISTER_FRONTEND_REQ = 65,
            REGISTER_FRONTEND_REP = 66,
            REGISTER_BACKEND_REQ = 67,
            REGISTER_BACKEND_REP = 68,
            REGISTER_SERVER_REQ = 69,
            REGISTER_SERVER_REP = 70,
            ADD_ROUTES_REQ = 91,
            ADD_ROUTES_REP = 92,
            GET_ROUTES_REQ = 95,
            GET_ROUTES_REP = 96,
            ROUTE_ADDED_MSG = 100,
            ROUTE_DELETED_MSG = 101,
            ROUTE_HEALTH_CHANGED_MSG = 102,
            ASSIGN_FRONTEND_REQ = 111,
            ASSIGN_FRONTEND_REP = 112,
            LOCATE_TOPIC_REQ = 113,
            LOCATE_TOPIC_REP = 114,
            RESOLVE_IP_REQ = 121,
            RESOLVE_IP_REP = 122
        }

        /** Properties of a ping_req_t. */
        interface Iping_req_t {

            /** ping_req_t ref */
            ref?: (number|null);
        }

        /** Represents a ping_req_t. */
        class ping_req_t implements Iping_req_t {

            /**
             * Constructs a new ping_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iping_req_t);

            /** ping_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified ping_req_t message. Does not implicitly {@link maxwell.protocol.ping_req_t.verify|verify} messages.
             * @param message ping_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iping_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ping_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ping_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.ping_req_t;

            /**
             * Gets the default type url for ping_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ping_rep_t. */
        interface Iping_rep_t {

            /** ping_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a ping_rep_t. */
        class ping_rep_t implements Iping_rep_t {

            /**
             * Constructs a new ping_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iping_rep_t);

            /** ping_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified ping_rep_t message. Does not implicitly {@link maxwell.protocol.ping_rep_t.verify|verify} messages.
             * @param message ping_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iping_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ping_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ping_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.ping_rep_t;

            /**
             * Gets the default type url for ping_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a push_req_t. */
        interface Ipush_req_t {

            /** push_req_t topic */
            topic?: (string|null);

            /** push_req_t value */
            value?: (Uint8Array|null);

            /** push_req_t ref */
            ref?: (number|null);
        }

        /** Represents a push_req_t. */
        class push_req_t implements Ipush_req_t {

            /**
             * Constructs a new push_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipush_req_t);

            /** push_req_t topic. */
            public topic: string;

            /** push_req_t value. */
            public value: Uint8Array;

            /** push_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified push_req_t message. Does not implicitly {@link maxwell.protocol.push_req_t.verify|verify} messages.
             * @param message push_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipush_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a push_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns push_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.push_req_t;

            /**
             * Gets the default type url for push_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a push_rep_t. */
        interface Ipush_rep_t {

            /** push_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a push_rep_t. */
        class push_rep_t implements Ipush_rep_t {

            /**
             * Constructs a new push_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipush_rep_t);

            /** push_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified push_rep_t message. Does not implicitly {@link maxwell.protocol.push_rep_t.verify|verify} messages.
             * @param message push_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipush_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a push_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns push_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.push_rep_t;

            /**
             * Gets the default type url for push_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a pull_req_t. */
        interface Ipull_req_t {

            /** pull_req_t topic */
            topic?: (string|null);

            /** pull_req_t offset */
            offset?: (bigint|null);

            /** pull_req_t limit */
            limit?: (number|null);

            /** pull_req_t conn0Ref */
            conn0Ref?: (number|null);

            /** pull_req_t conn1Ref */
            conn1Ref?: (number|null);

            /** pull_req_t ref */
            ref?: (number|null);
        }

        /** Represents a pull_req_t. */
        class pull_req_t implements Ipull_req_t {

            /**
             * Constructs a new pull_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipull_req_t);

            /** pull_req_t topic. */
            public topic: string;

            /** pull_req_t offset. */
            public offset: bigint;

            /** pull_req_t limit. */
            public limit: number;

            /** pull_req_t conn0Ref. */
            public conn0Ref: number;

            /** pull_req_t conn1Ref. */
            public conn1Ref: number;

            /** pull_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified pull_req_t message. Does not implicitly {@link maxwell.protocol.pull_req_t.verify|verify} messages.
             * @param message pull_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipull_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a pull_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns pull_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.pull_req_t;

            /**
             * Gets the default type url for pull_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a pull_rep_t. */
        interface Ipull_rep_t {

            /** pull_rep_t msgs */
            msgs?: (maxwell.protocol.Imsg_t[]|null);

            /** pull_rep_t conn0Ref */
            conn0Ref?: (number|null);

            /** pull_rep_t conn1Ref */
            conn1Ref?: (number|null);

            /** pull_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a pull_rep_t. */
        class pull_rep_t implements Ipull_rep_t {

            /**
             * Constructs a new pull_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipull_rep_t);

            /** pull_rep_t msgs. */
            public msgs: maxwell.protocol.Imsg_t[];

            /** pull_rep_t conn0Ref. */
            public conn0Ref: number;

            /** pull_rep_t conn1Ref. */
            public conn1Ref: number;

            /** pull_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified pull_rep_t message. Does not implicitly {@link maxwell.protocol.pull_rep_t.verify|verify} messages.
             * @param message pull_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipull_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a pull_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns pull_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.pull_rep_t;

            /**
             * Gets the default type url for pull_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a req_req_t. */
        interface Ireq_req_t {

            /** req_req_t path */
            path?: (string|null);

            /** req_req_t payload */
            payload?: (string|null);

            /** req_req_t header */
            header?: (maxwell.protocol.Iheader_t|null);

            /** req_req_t conn0Ref */
            conn0Ref?: (number|null);

            /** req_req_t conn1Ref */
            conn1Ref?: (number|null);

            /** req_req_t ref */
            ref?: (number|null);
        }

        /** Represents a req_req_t. */
        class req_req_t implements Ireq_req_t {

            /**
             * Constructs a new req_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ireq_req_t);

            /** req_req_t path. */
            public path: string;

            /** req_req_t payload. */
            public payload: string;

            /** req_req_t header. */
            public header?: (maxwell.protocol.Iheader_t|null);

            /** req_req_t conn0Ref. */
            public conn0Ref: number;

            /** req_req_t conn1Ref. */
            public conn1Ref: number;

            /** req_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified req_req_t message. Does not implicitly {@link maxwell.protocol.req_req_t.verify|verify} messages.
             * @param message req_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ireq_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a req_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns req_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.req_req_t;

            /**
             * Gets the default type url for req_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a req_rep_t. */
        interface Ireq_rep_t {

            /** req_rep_t payload */
            payload?: (string|null);

            /** req_rep_t conn0Ref */
            conn0Ref?: (number|null);

            /** req_rep_t conn1Ref */
            conn1Ref?: (number|null);

            /** req_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a req_rep_t. */
        class req_rep_t implements Ireq_rep_t {

            /**
             * Constructs a new req_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ireq_rep_t);

            /** req_rep_t payload. */
            public payload: string;

            /** req_rep_t conn0Ref. */
            public conn0Ref: number;

            /** req_rep_t conn1Ref. */
            public conn1Ref: number;

            /** req_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified req_rep_t message. Does not implicitly {@link maxwell.protocol.req_rep_t.verify|verify} messages.
             * @param message req_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ireq_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a req_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns req_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.req_rep_t;

            /**
             * Gets the default type url for req_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an auth_req_t. */
        interface Iauth_req_t {

            /** auth_req_t token */
            token?: (string|null);

            /** auth_req_t conn0Ref */
            conn0Ref?: (number|null);

            /** auth_req_t conn1Ref */
            conn1Ref?: (number|null);

            /** auth_req_t ref */
            ref?: (number|null);
        }

        /** Represents an auth_req_t. */
        class auth_req_t implements Iauth_req_t {

            /**
             * Constructs a new auth_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iauth_req_t);

            /** auth_req_t token. */
            public token: string;

            /** auth_req_t conn0Ref. */
            public conn0Ref: number;

            /** auth_req_t conn1Ref. */
            public conn1Ref: number;

            /** auth_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified auth_req_t message. Does not implicitly {@link maxwell.protocol.auth_req_t.verify|verify} messages.
             * @param message auth_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iauth_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an auth_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns auth_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.auth_req_t;

            /**
             * Gets the default type url for auth_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an auth_rep_t. */
        interface Iauth_rep_t {

            /** auth_rep_t conn0Ref */
            conn0Ref?: (number|null);

            /** auth_rep_t conn1Ref */
            conn1Ref?: (number|null);

            /** auth_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an auth_rep_t. */
        class auth_rep_t implements Iauth_rep_t {

            /**
             * Constructs a new auth_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iauth_rep_t);

            /** auth_rep_t conn0Ref. */
            public conn0Ref: number;

            /** auth_rep_t conn1Ref. */
            public conn1Ref: number;

            /** auth_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified auth_rep_t message. Does not implicitly {@link maxwell.protocol.auth_rep_t.verify|verify} messages.
             * @param message auth_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iauth_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an auth_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns auth_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.auth_rep_t;

            /**
             * Gets the default type url for auth_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ok_rep_t. */
        interface Iok_rep_t {

            /** ok_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an ok_rep_t. */
        class ok_rep_t implements Iok_rep_t {

            /**
             * Constructs a new ok_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iok_rep_t);

            /** ok_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified ok_rep_t message. Does not implicitly {@link maxwell.protocol.ok_rep_t.verify|verify} messages.
             * @param message ok_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iok_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ok_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ok_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.ok_rep_t;

            /**
             * Gets the default type url for ok_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an error_rep_t. */
        interface Ierror_rep_t {

            /** error_rep_t code */
            code?: (number|null);

            /** error_rep_t desc */
            desc?: (string|null);

            /** error_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an error_rep_t. */
        class error_rep_t implements Ierror_rep_t {

            /**
             * Constructs a new error_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ierror_rep_t);

            /** error_rep_t code. */
            public code: number;

            /** error_rep_t desc. */
            public desc: string;

            /** error_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified error_rep_t message. Does not implicitly {@link maxwell.protocol.error_rep_t.verify|verify} messages.
             * @param message error_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ierror_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an error_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns error_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.error_rep_t;

            /**
             * Gets the default type url for error_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ok2_rep_t. */
        interface Iok2_rep_t {

            /** ok2_rep_t conn0Ref */
            conn0Ref?: (number|null);

            /** ok2_rep_t conn1Ref */
            conn1Ref?: (number|null);

            /** ok2_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an ok2_rep_t. */
        class ok2_rep_t implements Iok2_rep_t {

            /**
             * Constructs a new ok2_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iok2_rep_t);

            /** ok2_rep_t conn0Ref. */
            public conn0Ref: number;

            /** ok2_rep_t conn1Ref. */
            public conn1Ref: number;

            /** ok2_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified ok2_rep_t message. Does not implicitly {@link maxwell.protocol.ok2_rep_t.verify|verify} messages.
             * @param message ok2_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iok2_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ok2_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ok2_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.ok2_rep_t;

            /**
             * Gets the default type url for ok2_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an error2_rep_t. */
        interface Ierror2_rep_t {

            /** error2_rep_t code */
            code?: (number|null);

            /** error2_rep_t desc */
            desc?: (string|null);

            /** error2_rep_t conn0Ref */
            conn0Ref?: (number|null);

            /** error2_rep_t conn1Ref */
            conn1Ref?: (number|null);

            /** error2_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an error2_rep_t. */
        class error2_rep_t implements Ierror2_rep_t {

            /**
             * Constructs a new error2_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ierror2_rep_t);

            /** error2_rep_t code. */
            public code: number;

            /** error2_rep_t desc. */
            public desc: string;

            /** error2_rep_t conn0Ref. */
            public conn0Ref: number;

            /** error2_rep_t conn1Ref. */
            public conn1Ref: number;

            /** error2_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified error2_rep_t message. Does not implicitly {@link maxwell.protocol.error2_rep_t.verify|verify} messages.
             * @param message error2_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ierror2_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an error2_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns error2_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.error2_rep_t;

            /**
             * Gets the default type url for error2_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a register_frontend_req_t. */
        interface Iregister_frontend_req_t {

            /** register_frontend_req_t httpPort */
            httpPort?: (number|null);

            /** register_frontend_req_t httpsPort */
            httpsPort?: (number|null);

            /** register_frontend_req_t publicIp */
            publicIp?: (string|null);

            /** register_frontend_req_t ref */
            ref?: (number|null);
        }

        /** Represents a register_frontend_req_t. */
        class register_frontend_req_t implements Iregister_frontend_req_t {

            /**
             * Constructs a new register_frontend_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iregister_frontend_req_t);

            /** register_frontend_req_t httpPort. */
            public httpPort: number;

            /** register_frontend_req_t httpsPort. */
            public httpsPort: number;

            /** register_frontend_req_t publicIp. */
            public publicIp: string;

            /** register_frontend_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified register_frontend_req_t message. Does not implicitly {@link maxwell.protocol.register_frontend_req_t.verify|verify} messages.
             * @param message register_frontend_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iregister_frontend_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a register_frontend_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns register_frontend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.register_frontend_req_t;

            /**
             * Gets the default type url for register_frontend_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a register_frontend_rep_t. */
        interface Iregister_frontend_rep_t {

            /** register_frontend_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a register_frontend_rep_t. */
        class register_frontend_rep_t implements Iregister_frontend_rep_t {

            /**
             * Constructs a new register_frontend_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iregister_frontend_rep_t);

            /** register_frontend_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified register_frontend_rep_t message. Does not implicitly {@link maxwell.protocol.register_frontend_rep_t.verify|verify} messages.
             * @param message register_frontend_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iregister_frontend_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a register_frontend_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns register_frontend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.register_frontend_rep_t;

            /**
             * Gets the default type url for register_frontend_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a register_backend_req_t. */
        interface Iregister_backend_req_t {

            /** register_backend_req_t httpPort */
            httpPort?: (number|null);

            /** register_backend_req_t ref */
            ref?: (number|null);
        }

        /** Represents a register_backend_req_t. */
        class register_backend_req_t implements Iregister_backend_req_t {

            /**
             * Constructs a new register_backend_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iregister_backend_req_t);

            /** register_backend_req_t httpPort. */
            public httpPort: number;

            /** register_backend_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified register_backend_req_t message. Does not implicitly {@link maxwell.protocol.register_backend_req_t.verify|verify} messages.
             * @param message register_backend_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iregister_backend_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a register_backend_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns register_backend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.register_backend_req_t;

            /**
             * Gets the default type url for register_backend_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a register_backend_rep_t. */
        interface Iregister_backend_rep_t {

            /** register_backend_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a register_backend_rep_t. */
        class register_backend_rep_t implements Iregister_backend_rep_t {

            /**
             * Constructs a new register_backend_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iregister_backend_rep_t);

            /** register_backend_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified register_backend_rep_t message. Does not implicitly {@link maxwell.protocol.register_backend_rep_t.verify|verify} messages.
             * @param message register_backend_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iregister_backend_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a register_backend_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns register_backend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.register_backend_rep_t;

            /**
             * Gets the default type url for register_backend_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a register_server_req_t. */
        interface Iregister_server_req_t {

            /** register_server_req_t httpPort */
            httpPort?: (number|null);

            /** register_server_req_t ref */
            ref?: (number|null);
        }

        /** Represents a register_server_req_t. */
        class register_server_req_t implements Iregister_server_req_t {

            /**
             * Constructs a new register_server_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iregister_server_req_t);

            /** register_server_req_t httpPort. */
            public httpPort: number;

            /** register_server_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified register_server_req_t message. Does not implicitly {@link maxwell.protocol.register_server_req_t.verify|verify} messages.
             * @param message register_server_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iregister_server_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a register_server_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns register_server_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.register_server_req_t;

            /**
             * Gets the default type url for register_server_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a register_server_rep_t. */
        interface Iregister_server_rep_t {

            /** register_server_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a register_server_rep_t. */
        class register_server_rep_t implements Iregister_server_rep_t {

            /**
             * Constructs a new register_server_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iregister_server_rep_t);

            /** register_server_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified register_server_rep_t message. Does not implicitly {@link maxwell.protocol.register_server_rep_t.verify|verify} messages.
             * @param message register_server_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iregister_server_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a register_server_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns register_server_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.register_server_rep_t;

            /**
             * Gets the default type url for register_server_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an add_routes_req_t. */
        interface Iadd_routes_req_t {

            /** add_routes_req_t paths */
            paths?: (string[]|null);

            /** add_routes_req_t ref */
            ref?: (number|null);
        }

        /** Represents an add_routes_req_t. */
        class add_routes_req_t implements Iadd_routes_req_t {

            /**
             * Constructs a new add_routes_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iadd_routes_req_t);

            /** add_routes_req_t paths. */
            public paths: string[];

            /** add_routes_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified add_routes_req_t message. Does not implicitly {@link maxwell.protocol.add_routes_req_t.verify|verify} messages.
             * @param message add_routes_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iadd_routes_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an add_routes_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns add_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.add_routes_req_t;

            /**
             * Gets the default type url for add_routes_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an add_routes_rep_t. */
        interface Iadd_routes_rep_t {

            /** add_routes_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an add_routes_rep_t. */
        class add_routes_rep_t implements Iadd_routes_rep_t {

            /**
             * Constructs a new add_routes_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iadd_routes_rep_t);

            /** add_routes_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified add_routes_rep_t message. Does not implicitly {@link maxwell.protocol.add_routes_rep_t.verify|verify} messages.
             * @param message add_routes_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iadd_routes_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an add_routes_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns add_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.add_routes_rep_t;

            /**
             * Gets the default type url for add_routes_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a delete_routes_req_t. */
        interface Idelete_routes_req_t {

            /** delete_routes_req_t paths */
            paths?: (string[]|null);

            /** delete_routes_req_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_routes_req_t. */
        class delete_routes_req_t implements Idelete_routes_req_t {

            /**
             * Constructs a new delete_routes_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_routes_req_t);

            /** delete_routes_req_t paths. */
            public paths: string[];

            /** delete_routes_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified delete_routes_req_t message. Does not implicitly {@link maxwell.protocol.delete_routes_req_t.verify|verify} messages.
             * @param message delete_routes_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_routes_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_routes_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_routes_req_t;

            /**
             * Gets the default type url for delete_routes_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a delete_routes_rep_t. */
        interface Idelete_routes_rep_t {

            /** delete_routes_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_routes_rep_t. */
        class delete_routes_rep_t implements Idelete_routes_rep_t {

            /**
             * Constructs a new delete_routes_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_routes_rep_t);

            /** delete_routes_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified delete_routes_rep_t message. Does not implicitly {@link maxwell.protocol.delete_routes_rep_t.verify|verify} messages.
             * @param message delete_routes_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_routes_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_routes_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_routes_rep_t;

            /**
             * Gets the default type url for delete_routes_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a get_routes_req_t. */
        interface Iget_routes_req_t {

            /** get_routes_req_t ref */
            ref?: (number|null);
        }

        /** Represents a get_routes_req_t. */
        class get_routes_req_t implements Iget_routes_req_t {

            /**
             * Constructs a new get_routes_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iget_routes_req_t);

            /** get_routes_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified get_routes_req_t message. Does not implicitly {@link maxwell.protocol.get_routes_req_t.verify|verify} messages.
             * @param message get_routes_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iget_routes_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a get_routes_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns get_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.get_routes_req_t;

            /**
             * Gets the default type url for get_routes_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a get_routes_rep_t. */
        interface Iget_routes_rep_t {

            /** get_routes_rep_t routeGroups */
            routeGroups?: (maxwell.protocol.Iroute_group_t[]|null);

            /** get_routes_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a get_routes_rep_t. */
        class get_routes_rep_t implements Iget_routes_rep_t {

            /**
             * Constructs a new get_routes_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iget_routes_rep_t);

            /** get_routes_rep_t routeGroups. */
            public routeGroups: maxwell.protocol.Iroute_group_t[];

            /** get_routes_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified get_routes_rep_t message. Does not implicitly {@link maxwell.protocol.get_routes_rep_t.verify|verify} messages.
             * @param message get_routes_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iget_routes_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a get_routes_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns get_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.get_routes_rep_t;

            /**
             * Gets the default type url for get_routes_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a route_added_msg_t. */
        interface Iroute_added_msg_t {

            /** route_added_msg_t path */
            path?: (string|null);

            /** route_added_msg_t endpoint */
            endpoint?: (string|null);

            /** route_added_msg_t ref */
            ref?: (number|null);
        }

        /** Represents a route_added_msg_t. */
        class route_added_msg_t implements Iroute_added_msg_t {

            /**
             * Constructs a new route_added_msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iroute_added_msg_t);

            /** route_added_msg_t path. */
            public path: string;

            /** route_added_msg_t endpoint. */
            public endpoint: string;

            /** route_added_msg_t ref. */
            public ref: number;

            /**
             * Encodes the specified route_added_msg_t message. Does not implicitly {@link maxwell.protocol.route_added_msg_t.verify|verify} messages.
             * @param message route_added_msg_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iroute_added_msg_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a route_added_msg_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns route_added_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.route_added_msg_t;

            /**
             * Gets the default type url for route_added_msg_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a route_deleted_msg_t. */
        interface Iroute_deleted_msg_t {

            /** route_deleted_msg_t path */
            path?: (string|null);

            /** route_deleted_msg_t endpoint */
            endpoint?: (string|null);

            /** route_deleted_msg_t ref */
            ref?: (number|null);
        }

        /** Represents a route_deleted_msg_t. */
        class route_deleted_msg_t implements Iroute_deleted_msg_t {

            /**
             * Constructs a new route_deleted_msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iroute_deleted_msg_t);

            /** route_deleted_msg_t path. */
            public path: string;

            /** route_deleted_msg_t endpoint. */
            public endpoint: string;

            /** route_deleted_msg_t ref. */
            public ref: number;

            /**
             * Encodes the specified route_deleted_msg_t message. Does not implicitly {@link maxwell.protocol.route_deleted_msg_t.verify|verify} messages.
             * @param message route_deleted_msg_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iroute_deleted_msg_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a route_deleted_msg_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns route_deleted_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.route_deleted_msg_t;

            /**
             * Gets the default type url for route_deleted_msg_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a route_health_changed_msg_t. */
        interface Iroute_health_changed_msg_t {

            /** route_health_changed_msg_t path */
            path?: (string|null);

            /** route_health_changed_msg_t endpoint */
            endpoint?: (string|null);

            /** route_health_changed_msg_t isHealthy */
            isHealthy?: (boolean|null);

            /** route_health_changed_msg_t ref */
            ref?: (number|null);
        }

        /** Represents a route_health_changed_msg_t. */
        class route_health_changed_msg_t implements Iroute_health_changed_msg_t {

            /**
             * Constructs a new route_health_changed_msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iroute_health_changed_msg_t);

            /** route_health_changed_msg_t path. */
            public path: string;

            /** route_health_changed_msg_t endpoint. */
            public endpoint: string;

            /** route_health_changed_msg_t isHealthy. */
            public isHealthy: boolean;

            /** route_health_changed_msg_t ref. */
            public ref: number;

            /**
             * Encodes the specified route_health_changed_msg_t message. Does not implicitly {@link maxwell.protocol.route_health_changed_msg_t.verify|verify} messages.
             * @param message route_health_changed_msg_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iroute_health_changed_msg_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a route_health_changed_msg_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns route_health_changed_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.route_health_changed_msg_t;

            /**
             * Gets the default type url for route_health_changed_msg_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an assign_frontend_req_t. */
        interface Iassign_frontend_req_t {

            /** assign_frontend_req_t ref */
            ref?: (number|null);
        }

        /** Represents an assign_frontend_req_t. */
        class assign_frontend_req_t implements Iassign_frontend_req_t {

            /**
             * Constructs a new assign_frontend_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iassign_frontend_req_t);

            /** assign_frontend_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified assign_frontend_req_t message. Does not implicitly {@link maxwell.protocol.assign_frontend_req_t.verify|verify} messages.
             * @param message assign_frontend_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iassign_frontend_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an assign_frontend_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns assign_frontend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.assign_frontend_req_t;

            /**
             * Gets the default type url for assign_frontend_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an assign_frontend_rep_t. */
        interface Iassign_frontend_rep_t {

            /** assign_frontend_rep_t endpoint */
            endpoint?: (string|null);

            /** assign_frontend_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an assign_frontend_rep_t. */
        class assign_frontend_rep_t implements Iassign_frontend_rep_t {

            /**
             * Constructs a new assign_frontend_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iassign_frontend_rep_t);

            /** assign_frontend_rep_t endpoint. */
            public endpoint: string;

            /** assign_frontend_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified assign_frontend_rep_t message. Does not implicitly {@link maxwell.protocol.assign_frontend_rep_t.verify|verify} messages.
             * @param message assign_frontend_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iassign_frontend_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an assign_frontend_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns assign_frontend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.assign_frontend_rep_t;

            /**
             * Gets the default type url for assign_frontend_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a locate_topic_req_t. */
        interface Ilocate_topic_req_t {

            /** locate_topic_req_t topic */
            topic?: (string|null);

            /** locate_topic_req_t ref */
            ref?: (number|null);
        }

        /** Represents a locate_topic_req_t. */
        class locate_topic_req_t implements Ilocate_topic_req_t {

            /**
             * Constructs a new locate_topic_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ilocate_topic_req_t);

            /** locate_topic_req_t topic. */
            public topic: string;

            /** locate_topic_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified locate_topic_req_t message. Does not implicitly {@link maxwell.protocol.locate_topic_req_t.verify|verify} messages.
             * @param message locate_topic_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ilocate_topic_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a locate_topic_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns locate_topic_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.locate_topic_req_t;

            /**
             * Gets the default type url for locate_topic_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a locate_topic_rep_t. */
        interface Ilocate_topic_rep_t {

            /** locate_topic_rep_t endpoint */
            endpoint?: (string|null);

            /** locate_topic_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a locate_topic_rep_t. */
        class locate_topic_rep_t implements Ilocate_topic_rep_t {

            /**
             * Constructs a new locate_topic_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ilocate_topic_rep_t);

            /** locate_topic_rep_t endpoint. */
            public endpoint: string;

            /** locate_topic_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified locate_topic_rep_t message. Does not implicitly {@link maxwell.protocol.locate_topic_rep_t.verify|verify} messages.
             * @param message locate_topic_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ilocate_topic_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a locate_topic_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns locate_topic_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.locate_topic_rep_t;

            /**
             * Gets the default type url for locate_topic_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a resolve_ip_req_t. */
        interface Iresolve_ip_req_t {

            /** resolve_ip_req_t ref */
            ref?: (number|null);
        }

        /** Represents a resolve_ip_req_t. */
        class resolve_ip_req_t implements Iresolve_ip_req_t {

            /**
             * Constructs a new resolve_ip_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iresolve_ip_req_t);

            /** resolve_ip_req_t ref. */
            public ref: number;

            /**
             * Encodes the specified resolve_ip_req_t message. Does not implicitly {@link maxwell.protocol.resolve_ip_req_t.verify|verify} messages.
             * @param message resolve_ip_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iresolve_ip_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a resolve_ip_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns resolve_ip_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.resolve_ip_req_t;

            /**
             * Gets the default type url for resolve_ip_req_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a resolve_ip_rep_t. */
        interface Iresolve_ip_rep_t {

            /** resolve_ip_rep_t ip */
            ip?: (string|null);

            /** resolve_ip_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a resolve_ip_rep_t. */
        class resolve_ip_rep_t implements Iresolve_ip_rep_t {

            /**
             * Constructs a new resolve_ip_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iresolve_ip_rep_t);

            /** resolve_ip_rep_t ip. */
            public ip: string;

            /** resolve_ip_rep_t ref. */
            public ref: number;

            /**
             * Encodes the specified resolve_ip_rep_t message. Does not implicitly {@link maxwell.protocol.resolve_ip_rep_t.verify|verify} messages.
             * @param message resolve_ip_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iresolve_ip_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a resolve_ip_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns resolve_ip_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.resolve_ip_rep_t;

            /**
             * Gets the default type url for resolve_ip_rep_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a msg_t. */
        interface Imsg_t {

            /** msg_t offset */
            offset?: (bigint|null);

            /** msg_t value */
            value?: (Uint8Array|null);

            /** msg_t timestamp */
            timestamp?: (bigint|null);
        }

        /** Represents a msg_t. */
        class msg_t implements Imsg_t {

            /**
             * Constructs a new msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Imsg_t);

            /** msg_t offset. */
            public offset: bigint;

            /** msg_t value. */
            public value: Uint8Array;

            /** msg_t timestamp. */
            public timestamp: bigint;

            /**
             * Encodes the specified msg_t message. Does not implicitly {@link maxwell.protocol.msg_t.verify|verify} messages.
             * @param message msg_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Imsg_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a msg_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.msg_t;

            /**
             * Gets the default type url for msg_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a header_t. */
        interface Iheader_t {

            /** header_t agent */
            agent?: (string|null);

            /** header_t endpoint */
            endpoint?: (string|null);
        }

        /** Represents a header_t. */
        class header_t implements Iheader_t {

            /**
             * Constructs a new header_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iheader_t);

            /** header_t agent. */
            public agent: string;

            /** header_t endpoint. */
            public endpoint: string;

            /**
             * Encodes the specified header_t message. Does not implicitly {@link maxwell.protocol.header_t.verify|verify} messages.
             * @param message header_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iheader_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a header_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns header_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.header_t;

            /**
             * Gets the default type url for header_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a route_group_t. */
        interface Iroute_group_t {

            /** route_group_t path */
            path?: (string|null);

            /** route_group_t healthyEndpoints */
            healthyEndpoints?: (string[]|null);

            /** route_group_t unhealthyEndpoints */
            unhealthyEndpoints?: (string[]|null);
        }

        /** Represents a route_group_t. */
        class route_group_t implements Iroute_group_t {

            /**
             * Constructs a new route_group_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iroute_group_t);

            /** route_group_t path. */
            public path: string;

            /** route_group_t healthyEndpoints. */
            public healthyEndpoints: string[];

            /** route_group_t unhealthyEndpoints. */
            public unhealthyEndpoints: string[];

            /**
             * Encodes the specified route_group_t message. Does not implicitly {@link maxwell.protocol.route_group_t.verify|verify} messages.
             * @param message route_group_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iroute_group_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a route_group_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns route_group_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.route_group_t;

            /**
             * Gets the default type url for route_group_t
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
