import * as $protobuf from "protobufjs";
/** Namespace maxwell. */
export namespace maxwell {

    /** Namespace protocol. */
    namespace protocol {

        /** msg_type_t enum. */
        enum msg_type_t {
            UNKNOWN = 0,
            PING_REQ = 1,
            PING_REP = 2,
            PULL_REQ = 3,
            PULL_REP = 4,
            PUSH_REQ = 5,
            PUSH_REP = 6,
            DO_REQ = 7,
            DO_REP = 8,
            DO2_REQ = 9,
            DO2_REP = 10,
            AUTH_REQ = 27,
            AUTH_REP = 28,
            OK_REP = 29,
            ERROR_REP = 30,
            OK2_REP = 31,
            ERROR2_REP = 32,
            REGISTER_FRONTEND_REQ = 65,
            REGISTER_FRONTEND_REP = 66,
            ADD_ROUTE_REQ = 67,
            ADD_ROUTE_REP = 68,
            DELETE_ROUTE_REQ = 69,
            DELETE_ROUTE_REP = 70,
            ADD_ROUTE_MSG = 71,
            DELETE_ROUTE_MSG = 72,
            PUSH_ROUTES_REQ = 73,
            PUSH_ROUTES_REP = 74,
            PULL_ROUTES_REQ = 75,
            PULL_ROUTES_REP = 76,
            REGISTER_BACKEND_REQ = 81,
            REGISTER_BACKEND_REP = 82,
            DELETE_TOPICS_REQ = 83,
            DELETE_TOPICS_REP = 84,
            RESOLVE_FRONTEND_REQ = 97,
            RESOLVE_FRONTEND_REP = 98,
            RESOLVE_BACKEND_REQ = 99,
            RESOLVE_BACKEND_REP = 100,
            WATCH_REQ = 105,
            WATCH_REP = 106,
            UNWATCH_REQ = 107,
            UNWATCH_REP = 108,
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
             * Creates a new ping_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ping_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iping_req_t): maxwell.protocol.ping_req_t;

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
             * Creates a new ping_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ping_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iping_rep_t): maxwell.protocol.ping_rep_t;

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
        }

        /** Properties of a pull_req_t. */
        interface Ipull_req_t {

            /** pull_req_t topic */
            topic?: (string|null);

            /** pull_req_t offset */
            offset?: (number|Long|null);

            /** pull_req_t limit */
            limit?: (number|null);

            /** pull_req_t puller */
            puller?: (number|null);

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
            public offset: (number|Long);

            /** pull_req_t limit. */
            public limit: number;

            /** pull_req_t puller. */
            public puller: number;

            /** pull_req_t ref. */
            public ref: number;

            /**
             * Creates a new pull_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns pull_req_t instance
             */
            public static create(properties?: maxwell.protocol.Ipull_req_t): maxwell.protocol.pull_req_t;

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
        }

        /** Properties of a pull_rep_t. */
        interface Ipull_rep_t {

            /** pull_rep_t msgs */
            msgs?: (maxwell.protocol.Imsg_t[]|null);

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

            /** pull_rep_t ref. */
            public ref: number;

            /**
             * Creates a new pull_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns pull_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ipull_rep_t): maxwell.protocol.pull_rep_t;

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
             * Creates a new push_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns push_req_t instance
             */
            public static create(properties?: maxwell.protocol.Ipush_req_t): maxwell.protocol.push_req_t;

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
             * Creates a new push_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns push_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ipush_rep_t): maxwell.protocol.push_rep_t;

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
        }

        /** Properties of a do_req_t. */
        interface Ido_req_t {

            /** do_req_t type */
            type?: (string|null);

            /** do_req_t value */
            value?: (string|null);

            /** do_req_t sourceEnabled */
            sourceEnabled?: (boolean|null);

            /** do_req_t source */
            source?: (maxwell.protocol.Isource_t|null);

            /** do_req_t traces */
            traces?: (maxwell.protocol.Itrace_t[]|null);
        }

        /** Represents a do_req_t. */
        class do_req_t implements Ido_req_t {

            /**
             * Constructs a new do_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ido_req_t);

            /** do_req_t type. */
            public type: string;

            /** do_req_t value. */
            public value: string;

            /** do_req_t sourceEnabled. */
            public sourceEnabled: boolean;

            /** do_req_t source. */
            public source?: (maxwell.protocol.Isource_t|null);

            /** do_req_t traces. */
            public traces: maxwell.protocol.Itrace_t[];

            /**
             * Creates a new do_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns do_req_t instance
             */
            public static create(properties?: maxwell.protocol.Ido_req_t): maxwell.protocol.do_req_t;

            /**
             * Encodes the specified do_req_t message. Does not implicitly {@link maxwell.protocol.do_req_t.verify|verify} messages.
             * @param message do_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ido_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a do_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns do_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.do_req_t;
        }

        /** Properties of a do_rep_t. */
        interface Ido_rep_t {

            /** do_rep_t value */
            value?: (string|null);

            /** do_rep_t traces */
            traces?: (maxwell.protocol.Itrace_t[]|null);
        }

        /** Represents a do_rep_t. */
        class do_rep_t implements Ido_rep_t {

            /**
             * Constructs a new do_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ido_rep_t);

            /** do_rep_t value. */
            public value: string;

            /** do_rep_t traces. */
            public traces: maxwell.protocol.Itrace_t[];

            /**
             * Creates a new do_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns do_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ido_rep_t): maxwell.protocol.do_rep_t;

            /**
             * Encodes the specified do_rep_t message. Does not implicitly {@link maxwell.protocol.do_rep_t.verify|verify} messages.
             * @param message do_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ido_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a do_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns do_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.do_rep_t;
        }

        /** Properties of a do2_req_t. */
        interface Ido2_req_t {

            /** do2_req_t type */
            type?: (string|null);

            /** do2_req_t sourceEnabled */
            sourceEnabled?: (boolean|null);

            /** do2_req_t source */
            source?: (maxwell.protocol.Isource_t|null);

            /** do2_req_t traces */
            traces?: (maxwell.protocol.Itrace_t[]|null);
        }

        /** Represents a do2_req_t. */
        class do2_req_t implements Ido2_req_t {

            /**
             * Constructs a new do2_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ido2_req_t);

            /** do2_req_t type. */
            public type: string;

            /** do2_req_t sourceEnabled. */
            public sourceEnabled: boolean;

            /** do2_req_t source. */
            public source?: (maxwell.protocol.Isource_t|null);

            /** do2_req_t traces. */
            public traces: maxwell.protocol.Itrace_t[];

            /**
             * Creates a new do2_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns do2_req_t instance
             */
            public static create(properties?: maxwell.protocol.Ido2_req_t): maxwell.protocol.do2_req_t;

            /**
             * Encodes the specified do2_req_t message. Does not implicitly {@link maxwell.protocol.do2_req_t.verify|verify} messages.
             * @param message do2_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ido2_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a do2_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns do2_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.do2_req_t;
        }

        /** Properties of a do2_rep_t. */
        interface Ido2_rep_t {

            /** do2_rep_t value */
            value?: (Uint8Array|null);

            /** do2_rep_t traces */
            traces?: (maxwell.protocol.Itrace_t[]|null);
        }

        /** Represents a do2_rep_t. */
        class do2_rep_t implements Ido2_rep_t {

            /**
             * Constructs a new do2_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ido2_rep_t);

            /** do2_rep_t value. */
            public value: Uint8Array;

            /** do2_rep_t traces. */
            public traces: maxwell.protocol.Itrace_t[];

            /**
             * Creates a new do2_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns do2_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ido2_rep_t): maxwell.protocol.do2_rep_t;

            /**
             * Encodes the specified do2_rep_t message. Does not implicitly {@link maxwell.protocol.do2_rep_t.verify|verify} messages.
             * @param message do2_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ido2_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a do2_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns do2_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.do2_rep_t;
        }

        /** Properties of an auth_req_t. */
        interface Iauth_req_t {

            /** auth_req_t token */
            token?: (string|null);

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

            /** auth_req_t ref. */
            public ref: number;

            /**
             * Creates a new auth_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns auth_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iauth_req_t): maxwell.protocol.auth_req_t;

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
        }

        /** Properties of an auth_rep_t. */
        interface Iauth_rep_t {

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

            /** auth_rep_t ref. */
            public ref: number;

            /**
             * Creates a new auth_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns auth_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iauth_rep_t): maxwell.protocol.auth_rep_t;

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
             * Creates a new ok_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ok_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iok_rep_t): maxwell.protocol.ok_rep_t;

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
             * Creates a new error_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns error_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ierror_rep_t): maxwell.protocol.error_rep_t;

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
        }

        /** Properties of an ok2_rep_t. */
        interface Iok2_rep_t {

            /** ok2_rep_t traces */
            traces?: (maxwell.protocol.Itrace_t[]|null);
        }

        /** Represents an ok2_rep_t. */
        class ok2_rep_t implements Iok2_rep_t {

            /**
             * Constructs a new ok2_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iok2_rep_t);

            /** ok2_rep_t traces. */
            public traces: maxwell.protocol.Itrace_t[];

            /**
             * Creates a new ok2_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ok2_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iok2_rep_t): maxwell.protocol.ok2_rep_t;

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
        }

        /** Properties of an error2_rep_t. */
        interface Ierror2_rep_t {

            /** error2_rep_t code */
            code?: (number|null);

            /** error2_rep_t desc */
            desc?: (string|null);

            /** error2_rep_t traces */
            traces?: (maxwell.protocol.Itrace_t[]|null);
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

            /** error2_rep_t traces. */
            public traces: maxwell.protocol.Itrace_t[];

            /**
             * Creates a new error2_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns error2_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ierror2_rep_t): maxwell.protocol.error2_rep_t;

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
        }

        /** Properties of a watch_req_t. */
        interface Iwatch_req_t {

            /** watch_req_t type */
            type?: (string|null);

            /** watch_req_t ref */
            ref?: (number|null);
        }

        /** Represents a watch_req_t. */
        class watch_req_t implements Iwatch_req_t {

            /**
             * Constructs a new watch_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iwatch_req_t);

            /** watch_req_t type. */
            public type: string;

            /** watch_req_t ref. */
            public ref: number;

            /**
             * Creates a new watch_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns watch_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iwatch_req_t): maxwell.protocol.watch_req_t;

            /**
             * Encodes the specified watch_req_t message. Does not implicitly {@link maxwell.protocol.watch_req_t.verify|verify} messages.
             * @param message watch_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iwatch_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a watch_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns watch_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.watch_req_t;
        }

        /** Properties of a watch_rep_t. */
        interface Iwatch_rep_t {

            /** watch_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a watch_rep_t. */
        class watch_rep_t implements Iwatch_rep_t {

            /**
             * Constructs a new watch_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iwatch_rep_t);

            /** watch_rep_t ref. */
            public ref: number;

            /**
             * Creates a new watch_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns watch_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iwatch_rep_t): maxwell.protocol.watch_rep_t;

            /**
             * Encodes the specified watch_rep_t message. Does not implicitly {@link maxwell.protocol.watch_rep_t.verify|verify} messages.
             * @param message watch_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iwatch_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a watch_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns watch_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.watch_rep_t;
        }

        /** Properties of an unwatch_req_t. */
        interface Iunwatch_req_t {

            /** unwatch_req_t type */
            type?: (string|null);

            /** unwatch_req_t ref */
            ref?: (number|null);
        }

        /** Represents an unwatch_req_t. */
        class unwatch_req_t implements Iunwatch_req_t {

            /**
             * Constructs a new unwatch_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iunwatch_req_t);

            /** unwatch_req_t type. */
            public type: string;

            /** unwatch_req_t ref. */
            public ref: number;

            /**
             * Creates a new unwatch_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns unwatch_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iunwatch_req_t): maxwell.protocol.unwatch_req_t;

            /**
             * Encodes the specified unwatch_req_t message. Does not implicitly {@link maxwell.protocol.unwatch_req_t.verify|verify} messages.
             * @param message unwatch_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iunwatch_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an unwatch_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns unwatch_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.unwatch_req_t;
        }

        /** Properties of an unwatch_rep_t. */
        interface Iunwatch_rep_t {

            /** unwatch_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an unwatch_rep_t. */
        class unwatch_rep_t implements Iunwatch_rep_t {

            /**
             * Constructs a new unwatch_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iunwatch_rep_t);

            /** unwatch_rep_t ref. */
            public ref: number;

            /**
             * Creates a new unwatch_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns unwatch_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iunwatch_rep_t): maxwell.protocol.unwatch_rep_t;

            /**
             * Encodes the specified unwatch_rep_t message. Does not implicitly {@link maxwell.protocol.unwatch_rep_t.verify|verify} messages.
             * @param message unwatch_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iunwatch_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an unwatch_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns unwatch_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.unwatch_rep_t;
        }

        /** Properties of a register_frontend_req_t. */
        interface Iregister_frontend_req_t {

            /** register_frontend_req_t endpoint */
            endpoint?: (string|null);

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

            /** register_frontend_req_t endpoint. */
            public endpoint: string;

            /** register_frontend_req_t ref. */
            public ref: number;

            /**
             * Creates a new register_frontend_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns register_frontend_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iregister_frontend_req_t): maxwell.protocol.register_frontend_req_t;

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
             * Creates a new register_frontend_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns register_frontend_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iregister_frontend_rep_t): maxwell.protocol.register_frontend_rep_t;

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
        }

        /** Properties of an add_route_req_t. */
        interface Iadd_route_req_t {

            /** add_route_req_t type */
            type?: (string|null);

            /** add_route_req_t ref */
            ref?: (number|null);
        }

        /** Represents an add_route_req_t. */
        class add_route_req_t implements Iadd_route_req_t {

            /**
             * Constructs a new add_route_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iadd_route_req_t);

            /** add_route_req_t type. */
            public type: string;

            /** add_route_req_t ref. */
            public ref: number;

            /**
             * Creates a new add_route_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns add_route_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iadd_route_req_t): maxwell.protocol.add_route_req_t;

            /**
             * Encodes the specified add_route_req_t message. Does not implicitly {@link maxwell.protocol.add_route_req_t.verify|verify} messages.
             * @param message add_route_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iadd_route_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an add_route_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns add_route_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.add_route_req_t;
        }

        /** Properties of an add_route_rep_t. */
        interface Iadd_route_rep_t {

            /** add_route_rep_t ref */
            ref?: (number|null);
        }

        /** Represents an add_route_rep_t. */
        class add_route_rep_t implements Iadd_route_rep_t {

            /**
             * Constructs a new add_route_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iadd_route_rep_t);

            /** add_route_rep_t ref. */
            public ref: number;

            /**
             * Creates a new add_route_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns add_route_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iadd_route_rep_t): maxwell.protocol.add_route_rep_t;

            /**
             * Encodes the specified add_route_rep_t message. Does not implicitly {@link maxwell.protocol.add_route_rep_t.verify|verify} messages.
             * @param message add_route_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iadd_route_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an add_route_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns add_route_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.add_route_rep_t;
        }

        /** Properties of a delete_route_req_t. */
        interface Idelete_route_req_t {

            /** delete_route_req_t type */
            type?: (string|null);

            /** delete_route_req_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_route_req_t. */
        class delete_route_req_t implements Idelete_route_req_t {

            /**
             * Constructs a new delete_route_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_route_req_t);

            /** delete_route_req_t type. */
            public type: string;

            /** delete_route_req_t ref. */
            public ref: number;

            /**
             * Creates a new delete_route_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns delete_route_req_t instance
             */
            public static create(properties?: maxwell.protocol.Idelete_route_req_t): maxwell.protocol.delete_route_req_t;

            /**
             * Encodes the specified delete_route_req_t message. Does not implicitly {@link maxwell.protocol.delete_route_req_t.verify|verify} messages.
             * @param message delete_route_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_route_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_route_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_route_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_route_req_t;
        }

        /** Properties of a delete_route_rep_t. */
        interface Idelete_route_rep_t {

            /** delete_route_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_route_rep_t. */
        class delete_route_rep_t implements Idelete_route_rep_t {

            /**
             * Constructs a new delete_route_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_route_rep_t);

            /** delete_route_rep_t ref. */
            public ref: number;

            /**
             * Creates a new delete_route_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns delete_route_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Idelete_route_rep_t): maxwell.protocol.delete_route_rep_t;

            /**
             * Encodes the specified delete_route_rep_t message. Does not implicitly {@link maxwell.protocol.delete_route_rep_t.verify|verify} messages.
             * @param message delete_route_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_route_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_route_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_route_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_route_rep_t;
        }

        /** Properties of an add_route_msg_t. */
        interface Iadd_route_msg_t {

            /** add_route_msg_t endpoint */
            endpoint?: (string|null);

            /** add_route_msg_t ref */
            ref?: (number|null);
        }

        /** Represents an add_route_msg_t. */
        class add_route_msg_t implements Iadd_route_msg_t {

            /**
             * Constructs a new add_route_msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iadd_route_msg_t);

            /** add_route_msg_t endpoint. */
            public endpoint: string;

            /** add_route_msg_t ref. */
            public ref: number;

            /**
             * Creates a new add_route_msg_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns add_route_msg_t instance
             */
            public static create(properties?: maxwell.protocol.Iadd_route_msg_t): maxwell.protocol.add_route_msg_t;

            /**
             * Encodes the specified add_route_msg_t message. Does not implicitly {@link maxwell.protocol.add_route_msg_t.verify|verify} messages.
             * @param message add_route_msg_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iadd_route_msg_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an add_route_msg_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns add_route_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.add_route_msg_t;
        }

        /** Properties of a delete_route_msg_t. */
        interface Idelete_route_msg_t {

            /** delete_route_msg_t type */
            type?: (string|null);

            /** delete_route_msg_t endpoint */
            endpoint?: (string|null);

            /** delete_route_msg_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_route_msg_t. */
        class delete_route_msg_t implements Idelete_route_msg_t {

            /**
             * Constructs a new delete_route_msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_route_msg_t);

            /** delete_route_msg_t type. */
            public type: string;

            /** delete_route_msg_t endpoint. */
            public endpoint: string;

            /** delete_route_msg_t ref. */
            public ref: number;

            /**
             * Creates a new delete_route_msg_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns delete_route_msg_t instance
             */
            public static create(properties?: maxwell.protocol.Idelete_route_msg_t): maxwell.protocol.delete_route_msg_t;

            /**
             * Encodes the specified delete_route_msg_t message. Does not implicitly {@link maxwell.protocol.delete_route_msg_t.verify|verify} messages.
             * @param message delete_route_msg_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_route_msg_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_route_msg_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_route_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_route_msg_t;
        }

        /** Properties of a push_routes_req_t. */
        interface Ipush_routes_req_t {

            /** push_routes_req_t types */
            types?: (string[]|null);

            /** push_routes_req_t ref */
            ref?: (number|null);
        }

        /** Represents a push_routes_req_t. */
        class push_routes_req_t implements Ipush_routes_req_t {

            /**
             * Constructs a new push_routes_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipush_routes_req_t);

            /** push_routes_req_t types. */
            public types: string[];

            /** push_routes_req_t ref. */
            public ref: number;

            /**
             * Creates a new push_routes_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns push_routes_req_t instance
             */
            public static create(properties?: maxwell.protocol.Ipush_routes_req_t): maxwell.protocol.push_routes_req_t;

            /**
             * Encodes the specified push_routes_req_t message. Does not implicitly {@link maxwell.protocol.push_routes_req_t.verify|verify} messages.
             * @param message push_routes_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipush_routes_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a push_routes_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns push_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.push_routes_req_t;
        }

        /** Properties of a push_routes_rep_t. */
        interface Ipush_routes_rep_t {

            /** push_routes_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a push_routes_rep_t. */
        class push_routes_rep_t implements Ipush_routes_rep_t {

            /**
             * Constructs a new push_routes_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipush_routes_rep_t);

            /** push_routes_rep_t ref. */
            public ref: number;

            /**
             * Creates a new push_routes_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns push_routes_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ipush_routes_rep_t): maxwell.protocol.push_routes_rep_t;

            /**
             * Encodes the specified push_routes_rep_t message. Does not implicitly {@link maxwell.protocol.push_routes_rep_t.verify|verify} messages.
             * @param message push_routes_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipush_routes_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a push_routes_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns push_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.push_routes_rep_t;
        }

        /** Properties of a pull_routes_req_t. */
        interface Ipull_routes_req_t {

            /** pull_routes_req_t ref */
            ref?: (number|null);
        }

        /** Represents a pull_routes_req_t. */
        class pull_routes_req_t implements Ipull_routes_req_t {

            /**
             * Constructs a new pull_routes_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipull_routes_req_t);

            /** pull_routes_req_t ref. */
            public ref: number;

            /**
             * Creates a new pull_routes_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns pull_routes_req_t instance
             */
            public static create(properties?: maxwell.protocol.Ipull_routes_req_t): maxwell.protocol.pull_routes_req_t;

            /**
             * Encodes the specified pull_routes_req_t message. Does not implicitly {@link maxwell.protocol.pull_routes_req_t.verify|verify} messages.
             * @param message pull_routes_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipull_routes_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a pull_routes_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns pull_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.pull_routes_req_t;
        }

        /** Properties of a pull_routes_rep_t. */
        interface Ipull_routes_rep_t {

            /** pull_routes_rep_t routeGroups */
            routeGroups?: (maxwell.protocol.Iroute_group_t[]|null);

            /** pull_routes_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a pull_routes_rep_t. */
        class pull_routes_rep_t implements Ipull_routes_rep_t {

            /**
             * Constructs a new pull_routes_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Ipull_routes_rep_t);

            /** pull_routes_rep_t routeGroups. */
            public routeGroups: maxwell.protocol.Iroute_group_t[];

            /** pull_routes_rep_t ref. */
            public ref: number;

            /**
             * Creates a new pull_routes_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns pull_routes_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Ipull_routes_rep_t): maxwell.protocol.pull_routes_rep_t;

            /**
             * Encodes the specified pull_routes_rep_t message. Does not implicitly {@link maxwell.protocol.pull_routes_rep_t.verify|verify} messages.
             * @param message pull_routes_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Ipull_routes_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a pull_routes_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns pull_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.pull_routes_rep_t;
        }

        /** Properties of a delete_topics_req_t. */
        interface Idelete_topics_req_t {

            /** delete_topics_req_t topics */
            topics?: (string[]|null);

            /** delete_topics_req_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_topics_req_t. */
        class delete_topics_req_t implements Idelete_topics_req_t {

            /**
             * Constructs a new delete_topics_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_topics_req_t);

            /** delete_topics_req_t topics. */
            public topics: string[];

            /** delete_topics_req_t ref. */
            public ref: number;

            /**
             * Creates a new delete_topics_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns delete_topics_req_t instance
             */
            public static create(properties?: maxwell.protocol.Idelete_topics_req_t): maxwell.protocol.delete_topics_req_t;

            /**
             * Encodes the specified delete_topics_req_t message. Does not implicitly {@link maxwell.protocol.delete_topics_req_t.verify|verify} messages.
             * @param message delete_topics_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_topics_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_topics_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_topics_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_topics_req_t;
        }

        /** Properties of a delete_topics_rep_t. */
        interface Idelete_topics_rep_t {

            /** delete_topics_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a delete_topics_rep_t. */
        class delete_topics_rep_t implements Idelete_topics_rep_t {

            /**
             * Constructs a new delete_topics_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Idelete_topics_rep_t);

            /** delete_topics_rep_t ref. */
            public ref: number;

            /**
             * Creates a new delete_topics_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns delete_topics_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Idelete_topics_rep_t): maxwell.protocol.delete_topics_rep_t;

            /**
             * Encodes the specified delete_topics_rep_t message. Does not implicitly {@link maxwell.protocol.delete_topics_rep_t.verify|verify} messages.
             * @param message delete_topics_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Idelete_topics_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a delete_topics_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns delete_topics_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.delete_topics_rep_t;
        }

        /** Properties of a register_backend_req_t. */
        interface Iregister_backend_req_t {

            /** register_backend_req_t endpoint */
            endpoint?: (string|null);

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

            /** register_backend_req_t endpoint. */
            public endpoint: string;

            /** register_backend_req_t ref. */
            public ref: number;

            /**
             * Creates a new register_backend_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns register_backend_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iregister_backend_req_t): maxwell.protocol.register_backend_req_t;

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
             * Creates a new register_backend_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns register_backend_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iregister_backend_rep_t): maxwell.protocol.register_backend_rep_t;

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
        }

        /** Properties of a resolve_frontend_req_t. */
        interface Iresolve_frontend_req_t {

            /** resolve_frontend_req_t ref */
            ref?: (number|null);
        }

        /** Represents a resolve_frontend_req_t. */
        class resolve_frontend_req_t implements Iresolve_frontend_req_t {

            /**
             * Constructs a new resolve_frontend_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iresolve_frontend_req_t);

            /** resolve_frontend_req_t ref. */
            public ref: number;

            /**
             * Creates a new resolve_frontend_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns resolve_frontend_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iresolve_frontend_req_t): maxwell.protocol.resolve_frontend_req_t;

            /**
             * Encodes the specified resolve_frontend_req_t message. Does not implicitly {@link maxwell.protocol.resolve_frontend_req_t.verify|verify} messages.
             * @param message resolve_frontend_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iresolve_frontend_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a resolve_frontend_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns resolve_frontend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.resolve_frontend_req_t;
        }

        /** Properties of a resolve_frontend_rep_t. */
        interface Iresolve_frontend_rep_t {

            /** resolve_frontend_rep_t endpoint */
            endpoint?: (string|null);

            /** resolve_frontend_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a resolve_frontend_rep_t. */
        class resolve_frontend_rep_t implements Iresolve_frontend_rep_t {

            /**
             * Constructs a new resolve_frontend_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iresolve_frontend_rep_t);

            /** resolve_frontend_rep_t endpoint. */
            public endpoint: string;

            /** resolve_frontend_rep_t ref. */
            public ref: number;

            /**
             * Creates a new resolve_frontend_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns resolve_frontend_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iresolve_frontend_rep_t): maxwell.protocol.resolve_frontend_rep_t;

            /**
             * Encodes the specified resolve_frontend_rep_t message. Does not implicitly {@link maxwell.protocol.resolve_frontend_rep_t.verify|verify} messages.
             * @param message resolve_frontend_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iresolve_frontend_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a resolve_frontend_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns resolve_frontend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.resolve_frontend_rep_t;
        }

        /** Properties of a resolve_backend_req_t. */
        interface Iresolve_backend_req_t {

            /** resolve_backend_req_t topic */
            topic?: (string|null);

            /** resolve_backend_req_t ref */
            ref?: (number|null);
        }

        /** Represents a resolve_backend_req_t. */
        class resolve_backend_req_t implements Iresolve_backend_req_t {

            /**
             * Constructs a new resolve_backend_req_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iresolve_backend_req_t);

            /** resolve_backend_req_t topic. */
            public topic: string;

            /** resolve_backend_req_t ref. */
            public ref: number;

            /**
             * Creates a new resolve_backend_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns resolve_backend_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iresolve_backend_req_t): maxwell.protocol.resolve_backend_req_t;

            /**
             * Encodes the specified resolve_backend_req_t message. Does not implicitly {@link maxwell.protocol.resolve_backend_req_t.verify|verify} messages.
             * @param message resolve_backend_req_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iresolve_backend_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a resolve_backend_req_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns resolve_backend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.resolve_backend_req_t;
        }

        /** Properties of a resolve_backend_rep_t. */
        interface Iresolve_backend_rep_t {

            /** resolve_backend_rep_t endpoint */
            endpoint?: (string|null);

            /** resolve_backend_rep_t ref */
            ref?: (number|null);
        }

        /** Represents a resolve_backend_rep_t. */
        class resolve_backend_rep_t implements Iresolve_backend_rep_t {

            /**
             * Constructs a new resolve_backend_rep_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iresolve_backend_rep_t);

            /** resolve_backend_rep_t endpoint. */
            public endpoint: string;

            /** resolve_backend_rep_t ref. */
            public ref: number;

            /**
             * Creates a new resolve_backend_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns resolve_backend_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iresolve_backend_rep_t): maxwell.protocol.resolve_backend_rep_t;

            /**
             * Encodes the specified resolve_backend_rep_t message. Does not implicitly {@link maxwell.protocol.resolve_backend_rep_t.verify|verify} messages.
             * @param message resolve_backend_rep_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Iresolve_backend_rep_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a resolve_backend_rep_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns resolve_backend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.resolve_backend_rep_t;
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
             * Creates a new resolve_ip_req_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns resolve_ip_req_t instance
             */
            public static create(properties?: maxwell.protocol.Iresolve_ip_req_t): maxwell.protocol.resolve_ip_req_t;

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
             * Creates a new resolve_ip_rep_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns resolve_ip_rep_t instance
             */
            public static create(properties?: maxwell.protocol.Iresolve_ip_rep_t): maxwell.protocol.resolve_ip_rep_t;

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
        }

        /** Properties of a msg_t. */
        interface Imsg_t {

            /** msg_t offset */
            offset?: (number|Long|null);

            /** msg_t value */
            value?: (Uint8Array|null);

            /** msg_t timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a msg_t. */
        class msg_t implements Imsg_t {

            /**
             * Constructs a new msg_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Imsg_t);

            /** msg_t offset. */
            public offset: (number|Long);

            /** msg_t value. */
            public value: Uint8Array;

            /** msg_t timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new msg_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns msg_t instance
             */
            public static create(properties?: maxwell.protocol.Imsg_t): maxwell.protocol.msg_t;

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
        }

        /** Properties of a source_t. */
        interface Isource_t {

            /** source_t agent */
            agent?: (string|null);

            /** source_t endpoint */
            endpoint?: (string|null);
        }

        /** Represents a source_t. */
        class source_t implements Isource_t {

            /**
             * Constructs a new source_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Isource_t);

            /** source_t agent. */
            public agent: string;

            /** source_t endpoint. */
            public endpoint: string;

            /**
             * Creates a new source_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns source_t instance
             */
            public static create(properties?: maxwell.protocol.Isource_t): maxwell.protocol.source_t;

            /**
             * Encodes the specified source_t message. Does not implicitly {@link maxwell.protocol.source_t.verify|verify} messages.
             * @param message source_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Isource_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a source_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns source_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.source_t;
        }

        /** Properties of a trace_t. */
        interface Itrace_t {

            /** trace_t ref */
            ref?: (number|null);

            /** trace_t handlerId */
            handlerId?: (number|null);

            /** trace_t nodeId */
            nodeId?: (Uint8Array|null);
        }

        /** Represents a trace_t. */
        class trace_t implements Itrace_t {

            /**
             * Constructs a new trace_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Itrace_t);

            /** trace_t ref. */
            public ref: number;

            /** trace_t handlerId. */
            public handlerId: number;

            /** trace_t nodeId. */
            public nodeId: Uint8Array;

            /**
             * Creates a new trace_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns trace_t instance
             */
            public static create(properties?: maxwell.protocol.Itrace_t): maxwell.protocol.trace_t;

            /**
             * Encodes the specified trace_t message. Does not implicitly {@link maxwell.protocol.trace_t.verify|verify} messages.
             * @param message trace_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: maxwell.protocol.Itrace_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a trace_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns trace_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maxwell.protocol.trace_t;
        }

        /** Properties of a route_group_t. */
        interface Iroute_group_t {

            /** route_group_t type */
            type?: (string|null);

            /** route_group_t endpoints */
            endpoints?: (string[]|null);
        }

        /** Represents a route_group_t. */
        class route_group_t implements Iroute_group_t {

            /**
             * Constructs a new route_group_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: maxwell.protocol.Iroute_group_t);

            /** route_group_t type. */
            public type: string;

            /** route_group_t endpoints. */
            public endpoints: string[];

            /**
             * Creates a new route_group_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns route_group_t instance
             */
            public static create(properties?: maxwell.protocol.Iroute_group_t): maxwell.protocol.route_group_t;

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
        }
    }
}
