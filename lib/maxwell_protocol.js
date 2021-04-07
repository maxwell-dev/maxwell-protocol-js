/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const maxwell = $root.maxwell = (() => {

    /**
     * Namespace maxwell.
     * @exports maxwell
     * @namespace
     */
    const maxwell = {};

    maxwell.protocol = (function() {

        /**
         * Namespace protocol.
         * @memberof maxwell
         * @namespace
         */
        const protocol = {};

        /**
         * msg_type_t enum.
         * @name maxwell.protocol.msg_type_t
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PING_REQ=1 PING_REQ value
         * @property {number} PING_REP=2 PING_REP value
         * @property {number} PULL_REQ=3 PULL_REQ value
         * @property {number} PULL_REP=4 PULL_REP value
         * @property {number} PUSH_REQ=5 PUSH_REQ value
         * @property {number} PUSH_REP=6 PUSH_REP value
         * @property {number} DO_REQ=7 DO_REQ value
         * @property {number} DO_REP=8 DO_REP value
         * @property {number} DO2_REQ=9 DO2_REQ value
         * @property {number} DO2_REP=10 DO2_REP value
         * @property {number} AUTH_REQ=27 AUTH_REQ value
         * @property {number} AUTH_REP=28 AUTH_REP value
         * @property {number} OK_REP=29 OK_REP value
         * @property {number} ERROR_REP=30 ERROR_REP value
         * @property {number} OK2_REP=31 OK2_REP value
         * @property {number} ERROR2_REP=32 ERROR2_REP value
         * @property {number} REGISTER_FRONTEND_REQ=65 REGISTER_FRONTEND_REQ value
         * @property {number} REGISTER_FRONTEND_REP=66 REGISTER_FRONTEND_REP value
         * @property {number} ADD_ROUTE_REQ=67 ADD_ROUTE_REQ value
         * @property {number} ADD_ROUTE_REP=68 ADD_ROUTE_REP value
         * @property {number} DELETE_ROUTE_REQ=69 DELETE_ROUTE_REQ value
         * @property {number} DELETE_ROUTE_REP=70 DELETE_ROUTE_REP value
         * @property {number} ADD_ROUTE_MSG=71 ADD_ROUTE_MSG value
         * @property {number} DELETE_ROUTE_MSG=72 DELETE_ROUTE_MSG value
         * @property {number} PUSH_ROUTES_REQ=73 PUSH_ROUTES_REQ value
         * @property {number} PUSH_ROUTES_REP=74 PUSH_ROUTES_REP value
         * @property {number} PULL_ROUTES_REQ=75 PULL_ROUTES_REQ value
         * @property {number} PULL_ROUTES_REP=76 PULL_ROUTES_REP value
         * @property {number} REGISTER_BACKEND_REQ=81 REGISTER_BACKEND_REQ value
         * @property {number} REGISTER_BACKEND_REP=82 REGISTER_BACKEND_REP value
         * @property {number} DELETE_TOPICS_REQ=83 DELETE_TOPICS_REQ value
         * @property {number} DELETE_TOPICS_REP=84 DELETE_TOPICS_REP value
         * @property {number} RESOLVE_FRONTEND_REQ=97 RESOLVE_FRONTEND_REQ value
         * @property {number} RESOLVE_FRONTEND_REP=98 RESOLVE_FRONTEND_REP value
         * @property {number} RESOLVE_BACKEND_REQ=99 RESOLVE_BACKEND_REQ value
         * @property {number} RESOLVE_BACKEND_REP=100 RESOLVE_BACKEND_REP value
         * @property {number} WATCH_REQ=105 WATCH_REQ value
         * @property {number} WATCH_REP=106 WATCH_REP value
         * @property {number} UNWATCH_REQ=107 UNWATCH_REQ value
         * @property {number} UNWATCH_REP=108 UNWATCH_REP value
         * @property {number} RESOLVE_IP_REQ=121 RESOLVE_IP_REQ value
         * @property {number} RESOLVE_IP_REP=122 RESOLVE_IP_REP value
         */
        protocol.msg_type_t = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PING_REQ"] = 1;
            values[valuesById[2] = "PING_REP"] = 2;
            values[valuesById[3] = "PULL_REQ"] = 3;
            values[valuesById[4] = "PULL_REP"] = 4;
            values[valuesById[5] = "PUSH_REQ"] = 5;
            values[valuesById[6] = "PUSH_REP"] = 6;
            values[valuesById[7] = "DO_REQ"] = 7;
            values[valuesById[8] = "DO_REP"] = 8;
            values[valuesById[9] = "DO2_REQ"] = 9;
            values[valuesById[10] = "DO2_REP"] = 10;
            values[valuesById[27] = "AUTH_REQ"] = 27;
            values[valuesById[28] = "AUTH_REP"] = 28;
            values[valuesById[29] = "OK_REP"] = 29;
            values[valuesById[30] = "ERROR_REP"] = 30;
            values[valuesById[31] = "OK2_REP"] = 31;
            values[valuesById[32] = "ERROR2_REP"] = 32;
            values[valuesById[65] = "REGISTER_FRONTEND_REQ"] = 65;
            values[valuesById[66] = "REGISTER_FRONTEND_REP"] = 66;
            values[valuesById[67] = "ADD_ROUTE_REQ"] = 67;
            values[valuesById[68] = "ADD_ROUTE_REP"] = 68;
            values[valuesById[69] = "DELETE_ROUTE_REQ"] = 69;
            values[valuesById[70] = "DELETE_ROUTE_REP"] = 70;
            values[valuesById[71] = "ADD_ROUTE_MSG"] = 71;
            values[valuesById[72] = "DELETE_ROUTE_MSG"] = 72;
            values[valuesById[73] = "PUSH_ROUTES_REQ"] = 73;
            values[valuesById[74] = "PUSH_ROUTES_REP"] = 74;
            values[valuesById[75] = "PULL_ROUTES_REQ"] = 75;
            values[valuesById[76] = "PULL_ROUTES_REP"] = 76;
            values[valuesById[81] = "REGISTER_BACKEND_REQ"] = 81;
            values[valuesById[82] = "REGISTER_BACKEND_REP"] = 82;
            values[valuesById[83] = "DELETE_TOPICS_REQ"] = 83;
            values[valuesById[84] = "DELETE_TOPICS_REP"] = 84;
            values[valuesById[97] = "RESOLVE_FRONTEND_REQ"] = 97;
            values[valuesById[98] = "RESOLVE_FRONTEND_REP"] = 98;
            values[valuesById[99] = "RESOLVE_BACKEND_REQ"] = 99;
            values[valuesById[100] = "RESOLVE_BACKEND_REP"] = 100;
            values[valuesById[105] = "WATCH_REQ"] = 105;
            values[valuesById[106] = "WATCH_REP"] = 106;
            values[valuesById[107] = "UNWATCH_REQ"] = 107;
            values[valuesById[108] = "UNWATCH_REP"] = 108;
            values[valuesById[121] = "RESOLVE_IP_REQ"] = 121;
            values[valuesById[122] = "RESOLVE_IP_REP"] = 122;
            return values;
        })();

        protocol.ping_req_t = (function() {

            /**
             * Properties of a ping_req_t.
             * @memberof maxwell.protocol
             * @interface Iping_req_t
             * @property {number|null} [ref] ping_req_t ref
             */

            /**
             * Constructs a new ping_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a ping_req_t.
             * @implements Iping_req_t
             * @constructor
             * @param {maxwell.protocol.Iping_req_t=} [properties] Properties to set
             */
            function ping_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ping_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.ping_req_t
             * @instance
             */
            ping_req_t.prototype.ref = 0;

            /**
             * Creates a new ping_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.ping_req_t
             * @static
             * @param {maxwell.protocol.Iping_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.ping_req_t} ping_req_t instance
             */
            ping_req_t.create = function create(properties) {
                return new ping_req_t(properties);
            };

            /**
             * Encodes the specified ping_req_t message. Does not implicitly {@link maxwell.protocol.ping_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.ping_req_t
             * @static
             * @param {maxwell.protocol.Iping_req_t} message ping_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ping_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a ping_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.ping_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.ping_req_t} ping_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ping_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ping_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ping_req_t;
        })();

        protocol.ping_rep_t = (function() {

            /**
             * Properties of a ping_rep_t.
             * @memberof maxwell.protocol
             * @interface Iping_rep_t
             * @property {number|null} [ref] ping_rep_t ref
             */

            /**
             * Constructs a new ping_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a ping_rep_t.
             * @implements Iping_rep_t
             * @constructor
             * @param {maxwell.protocol.Iping_rep_t=} [properties] Properties to set
             */
            function ping_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ping_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.ping_rep_t
             * @instance
             */
            ping_rep_t.prototype.ref = 0;

            /**
             * Creates a new ping_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.ping_rep_t
             * @static
             * @param {maxwell.protocol.Iping_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.ping_rep_t} ping_rep_t instance
             */
            ping_rep_t.create = function create(properties) {
                return new ping_rep_t(properties);
            };

            /**
             * Encodes the specified ping_rep_t message. Does not implicitly {@link maxwell.protocol.ping_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.ping_rep_t
             * @static
             * @param {maxwell.protocol.Iping_rep_t} message ping_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ping_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a ping_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.ping_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.ping_rep_t} ping_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ping_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ping_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ping_rep_t;
        })();

        protocol.pull_req_t = (function() {

            /**
             * Properties of a pull_req_t.
             * @memberof maxwell.protocol
             * @interface Ipull_req_t
             * @property {string|null} [topic] pull_req_t topic
             * @property {number|Long|null} [offset] pull_req_t offset
             * @property {number|null} [limit] pull_req_t limit
             * @property {number|null} [puller] pull_req_t puller
             * @property {number|null} [ref] pull_req_t ref
             */

            /**
             * Constructs a new pull_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pull_req_t.
             * @implements Ipull_req_t
             * @constructor
             * @param {maxwell.protocol.Ipull_req_t=} [properties] Properties to set
             */
            function pull_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pull_req_t topic.
             * @member {string} topic
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.topic = "";

            /**
             * pull_req_t offset.
             * @member {number|Long} offset
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * pull_req_t limit.
             * @member {number} limit
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.limit = 0;

            /**
             * pull_req_t puller.
             * @member {number} puller
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.puller = 0;

            /**
             * pull_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.ref = 0;

            /**
             * Creates a new pull_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.pull_req_t
             * @static
             * @param {maxwell.protocol.Ipull_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.pull_req_t} pull_req_t instance
             */
            pull_req_t.create = function create(properties) {
                return new pull_req_t(properties);
            };

            /**
             * Encodes the specified pull_req_t message. Does not implicitly {@link maxwell.protocol.pull_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pull_req_t
             * @static
             * @param {maxwell.protocol.Ipull_req_t} message pull_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pull_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.offset);
                if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.limit);
                if (message.puller != null && Object.hasOwnProperty.call(message, "puller"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.puller);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pull_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pull_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pull_req_t} pull_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pull_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pull_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.offset = reader.int64();
                        break;
                    case 3:
                        message.limit = reader.uint32();
                        break;
                    case 4:
                        message.puller = reader.uint32();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return pull_req_t;
        })();

        protocol.pull_rep_t = (function() {

            /**
             * Properties of a pull_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipull_rep_t
             * @property {Array.<maxwell.protocol.Imsg_t>|null} [msgs] pull_rep_t msgs
             * @property {number|null} [ref] pull_rep_t ref
             */

            /**
             * Constructs a new pull_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pull_rep_t.
             * @implements Ipull_rep_t
             * @constructor
             * @param {maxwell.protocol.Ipull_rep_t=} [properties] Properties to set
             */
            function pull_rep_t(properties) {
                this.msgs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pull_rep_t msgs.
             * @member {Array.<maxwell.protocol.Imsg_t>} msgs
             * @memberof maxwell.protocol.pull_rep_t
             * @instance
             */
            pull_rep_t.prototype.msgs = $util.emptyArray;

            /**
             * pull_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pull_rep_t
             * @instance
             */
            pull_rep_t.prototype.ref = 0;

            /**
             * Creates a new pull_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.pull_rep_t
             * @static
             * @param {maxwell.protocol.Ipull_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.pull_rep_t} pull_rep_t instance
             */
            pull_rep_t.create = function create(properties) {
                return new pull_rep_t(properties);
            };

            /**
             * Encodes the specified pull_rep_t message. Does not implicitly {@link maxwell.protocol.pull_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pull_rep_t
             * @static
             * @param {maxwell.protocol.Ipull_rep_t} message pull_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pull_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgs != null && message.msgs.length)
                    for (let i = 0; i < message.msgs.length; ++i)
                        $root.maxwell.protocol.msg_t.encode(message.msgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pull_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pull_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pull_rep_t} pull_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pull_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pull_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.msgs && message.msgs.length))
                            message.msgs = [];
                        message.msgs.push($root.maxwell.protocol.msg_t.decode(reader, reader.uint32()));
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return pull_rep_t;
        })();

        protocol.push_req_t = (function() {

            /**
             * Properties of a push_req_t.
             * @memberof maxwell.protocol
             * @interface Ipush_req_t
             * @property {string|null} [topic] push_req_t topic
             * @property {Uint8Array|null} [value] push_req_t value
             * @property {number|null} [ref] push_req_t ref
             */

            /**
             * Constructs a new push_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a push_req_t.
             * @implements Ipush_req_t
             * @constructor
             * @param {maxwell.protocol.Ipush_req_t=} [properties] Properties to set
             */
            function push_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * push_req_t topic.
             * @member {string} topic
             * @memberof maxwell.protocol.push_req_t
             * @instance
             */
            push_req_t.prototype.topic = "";

            /**
             * push_req_t value.
             * @member {Uint8Array} value
             * @memberof maxwell.protocol.push_req_t
             * @instance
             */
            push_req_t.prototype.value = $util.newBuffer([]);

            /**
             * push_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.push_req_t
             * @instance
             */
            push_req_t.prototype.ref = 0;

            /**
             * Creates a new push_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.push_req_t
             * @static
             * @param {maxwell.protocol.Ipush_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.push_req_t} push_req_t instance
             */
            push_req_t.create = function create(properties) {
                return new push_req_t(properties);
            };

            /**
             * Encodes the specified push_req_t message. Does not implicitly {@link maxwell.protocol.push_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.push_req_t
             * @static
             * @param {maxwell.protocol.Ipush_req_t} message push_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            push_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a push_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.push_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.push_req_t} push_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            push_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.push_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return push_req_t;
        })();

        protocol.push_rep_t = (function() {

            /**
             * Properties of a push_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipush_rep_t
             * @property {number|null} [ref] push_rep_t ref
             */

            /**
             * Constructs a new push_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a push_rep_t.
             * @implements Ipush_rep_t
             * @constructor
             * @param {maxwell.protocol.Ipush_rep_t=} [properties] Properties to set
             */
            function push_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * push_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.push_rep_t
             * @instance
             */
            push_rep_t.prototype.ref = 0;

            /**
             * Creates a new push_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.push_rep_t
             * @static
             * @param {maxwell.protocol.Ipush_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.push_rep_t} push_rep_t instance
             */
            push_rep_t.create = function create(properties) {
                return new push_rep_t(properties);
            };

            /**
             * Encodes the specified push_rep_t message. Does not implicitly {@link maxwell.protocol.push_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.push_rep_t
             * @static
             * @param {maxwell.protocol.Ipush_rep_t} message push_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            push_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a push_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.push_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.push_rep_t} push_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            push_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.push_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return push_rep_t;
        })();

        protocol.do_req_t = (function() {

            /**
             * Properties of a do_req_t.
             * @memberof maxwell.protocol
             * @interface Ido_req_t
             * @property {string|null} [type] do_req_t type
             * @property {string|null} [value] do_req_t value
             * @property {boolean|null} [sourceEnabled] do_req_t sourceEnabled
             * @property {maxwell.protocol.Isource_t|null} [source] do_req_t source
             * @property {Array.<maxwell.protocol.Itrace_t>|null} [traces] do_req_t traces
             */

            /**
             * Constructs a new do_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a do_req_t.
             * @implements Ido_req_t
             * @constructor
             * @param {maxwell.protocol.Ido_req_t=} [properties] Properties to set
             */
            function do_req_t(properties) {
                this.traces = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * do_req_t type.
             * @member {string} type
             * @memberof maxwell.protocol.do_req_t
             * @instance
             */
            do_req_t.prototype.type = "";

            /**
             * do_req_t value.
             * @member {string} value
             * @memberof maxwell.protocol.do_req_t
             * @instance
             */
            do_req_t.prototype.value = "";

            /**
             * do_req_t sourceEnabled.
             * @member {boolean} sourceEnabled
             * @memberof maxwell.protocol.do_req_t
             * @instance
             */
            do_req_t.prototype.sourceEnabled = false;

            /**
             * do_req_t source.
             * @member {maxwell.protocol.Isource_t|null|undefined} source
             * @memberof maxwell.protocol.do_req_t
             * @instance
             */
            do_req_t.prototype.source = null;

            /**
             * do_req_t traces.
             * @member {Array.<maxwell.protocol.Itrace_t>} traces
             * @memberof maxwell.protocol.do_req_t
             * @instance
             */
            do_req_t.prototype.traces = $util.emptyArray;

            /**
             * Creates a new do_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.do_req_t
             * @static
             * @param {maxwell.protocol.Ido_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.do_req_t} do_req_t instance
             */
            do_req_t.create = function create(properties) {
                return new do_req_t(properties);
            };

            /**
             * Encodes the specified do_req_t message. Does not implicitly {@link maxwell.protocol.do_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.do_req_t
             * @static
             * @param {maxwell.protocol.Ido_req_t} message do_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            do_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                if (message.sourceEnabled != null && Object.hasOwnProperty.call(message, "sourceEnabled"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.sourceEnabled);
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    $root.maxwell.protocol.source_t.encode(message.source, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.traces != null && message.traces.length)
                    for (let i = 0; i < message.traces.length; ++i)
                        $root.maxwell.protocol.trace_t.encode(message.traces[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a do_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.do_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.do_req_t} do_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            do_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.do_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 2:
                        message.value = reader.string();
                        break;
                    case 13:
                        message.sourceEnabled = reader.bool();
                        break;
                    case 14:
                        message.source = $root.maxwell.protocol.source_t.decode(reader, reader.uint32());
                        break;
                    case 15:
                        if (!(message.traces && message.traces.length))
                            message.traces = [];
                        message.traces.push($root.maxwell.protocol.trace_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return do_req_t;
        })();

        protocol.do_rep_t = (function() {

            /**
             * Properties of a do_rep_t.
             * @memberof maxwell.protocol
             * @interface Ido_rep_t
             * @property {string|null} [value] do_rep_t value
             * @property {Array.<maxwell.protocol.Itrace_t>|null} [traces] do_rep_t traces
             */

            /**
             * Constructs a new do_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a do_rep_t.
             * @implements Ido_rep_t
             * @constructor
             * @param {maxwell.protocol.Ido_rep_t=} [properties] Properties to set
             */
            function do_rep_t(properties) {
                this.traces = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * do_rep_t value.
             * @member {string} value
             * @memberof maxwell.protocol.do_rep_t
             * @instance
             */
            do_rep_t.prototype.value = "";

            /**
             * do_rep_t traces.
             * @member {Array.<maxwell.protocol.Itrace_t>} traces
             * @memberof maxwell.protocol.do_rep_t
             * @instance
             */
            do_rep_t.prototype.traces = $util.emptyArray;

            /**
             * Creates a new do_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.do_rep_t
             * @static
             * @param {maxwell.protocol.Ido_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.do_rep_t} do_rep_t instance
             */
            do_rep_t.create = function create(properties) {
                return new do_rep_t(properties);
            };

            /**
             * Encodes the specified do_rep_t message. Does not implicitly {@link maxwell.protocol.do_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.do_rep_t
             * @static
             * @param {maxwell.protocol.Ido_rep_t} message do_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            do_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                if (message.traces != null && message.traces.length)
                    for (let i = 0; i < message.traces.length; ++i)
                        $root.maxwell.protocol.trace_t.encode(message.traces[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a do_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.do_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.do_rep_t} do_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            do_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.do_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    case 15:
                        if (!(message.traces && message.traces.length))
                            message.traces = [];
                        message.traces.push($root.maxwell.protocol.trace_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return do_rep_t;
        })();

        protocol.do2_req_t = (function() {

            /**
             * Properties of a do2_req_t.
             * @memberof maxwell.protocol
             * @interface Ido2_req_t
             * @property {string|null} [type] do2_req_t type
             * @property {boolean|null} [sourceEnabled] do2_req_t sourceEnabled
             * @property {maxwell.protocol.Isource_t|null} [source] do2_req_t source
             * @property {Array.<maxwell.protocol.Itrace_t>|null} [traces] do2_req_t traces
             */

            /**
             * Constructs a new do2_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a do2_req_t.
             * @implements Ido2_req_t
             * @constructor
             * @param {maxwell.protocol.Ido2_req_t=} [properties] Properties to set
             */
            function do2_req_t(properties) {
                this.traces = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * do2_req_t type.
             * @member {string} type
             * @memberof maxwell.protocol.do2_req_t
             * @instance
             */
            do2_req_t.prototype.type = "";

            /**
             * do2_req_t sourceEnabled.
             * @member {boolean} sourceEnabled
             * @memberof maxwell.protocol.do2_req_t
             * @instance
             */
            do2_req_t.prototype.sourceEnabled = false;

            /**
             * do2_req_t source.
             * @member {maxwell.protocol.Isource_t|null|undefined} source
             * @memberof maxwell.protocol.do2_req_t
             * @instance
             */
            do2_req_t.prototype.source = null;

            /**
             * do2_req_t traces.
             * @member {Array.<maxwell.protocol.Itrace_t>} traces
             * @memberof maxwell.protocol.do2_req_t
             * @instance
             */
            do2_req_t.prototype.traces = $util.emptyArray;

            /**
             * Creates a new do2_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.do2_req_t
             * @static
             * @param {maxwell.protocol.Ido2_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.do2_req_t} do2_req_t instance
             */
            do2_req_t.create = function create(properties) {
                return new do2_req_t(properties);
            };

            /**
             * Encodes the specified do2_req_t message. Does not implicitly {@link maxwell.protocol.do2_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.do2_req_t
             * @static
             * @param {maxwell.protocol.Ido2_req_t} message do2_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            do2_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.sourceEnabled != null && Object.hasOwnProperty.call(message, "sourceEnabled"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.sourceEnabled);
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    $root.maxwell.protocol.source_t.encode(message.source, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.traces != null && message.traces.length)
                    for (let i = 0; i < message.traces.length; ++i)
                        $root.maxwell.protocol.trace_t.encode(message.traces[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a do2_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.do2_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.do2_req_t} do2_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            do2_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.do2_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 13:
                        message.sourceEnabled = reader.bool();
                        break;
                    case 14:
                        message.source = $root.maxwell.protocol.source_t.decode(reader, reader.uint32());
                        break;
                    case 15:
                        if (!(message.traces && message.traces.length))
                            message.traces = [];
                        message.traces.push($root.maxwell.protocol.trace_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return do2_req_t;
        })();

        protocol.do2_rep_t = (function() {

            /**
             * Properties of a do2_rep_t.
             * @memberof maxwell.protocol
             * @interface Ido2_rep_t
             * @property {Uint8Array|null} [value] do2_rep_t value
             * @property {Array.<maxwell.protocol.Itrace_t>|null} [traces] do2_rep_t traces
             */

            /**
             * Constructs a new do2_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a do2_rep_t.
             * @implements Ido2_rep_t
             * @constructor
             * @param {maxwell.protocol.Ido2_rep_t=} [properties] Properties to set
             */
            function do2_rep_t(properties) {
                this.traces = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * do2_rep_t value.
             * @member {Uint8Array} value
             * @memberof maxwell.protocol.do2_rep_t
             * @instance
             */
            do2_rep_t.prototype.value = $util.newBuffer([]);

            /**
             * do2_rep_t traces.
             * @member {Array.<maxwell.protocol.Itrace_t>} traces
             * @memberof maxwell.protocol.do2_rep_t
             * @instance
             */
            do2_rep_t.prototype.traces = $util.emptyArray;

            /**
             * Creates a new do2_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.do2_rep_t
             * @static
             * @param {maxwell.protocol.Ido2_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.do2_rep_t} do2_rep_t instance
             */
            do2_rep_t.create = function create(properties) {
                return new do2_rep_t(properties);
            };

            /**
             * Encodes the specified do2_rep_t message. Does not implicitly {@link maxwell.protocol.do2_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.do2_rep_t
             * @static
             * @param {maxwell.protocol.Ido2_rep_t} message do2_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            do2_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                if (message.traces != null && message.traces.length)
                    for (let i = 0; i < message.traces.length; ++i)
                        $root.maxwell.protocol.trace_t.encode(message.traces[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a do2_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.do2_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.do2_rep_t} do2_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            do2_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.do2_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    case 15:
                        if (!(message.traces && message.traces.length))
                            message.traces = [];
                        message.traces.push($root.maxwell.protocol.trace_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return do2_rep_t;
        })();

        protocol.auth_req_t = (function() {

            /**
             * Properties of an auth_req_t.
             * @memberof maxwell.protocol
             * @interface Iauth_req_t
             * @property {string|null} [token] auth_req_t token
             * @property {number|null} [ref] auth_req_t ref
             */

            /**
             * Constructs a new auth_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an auth_req_t.
             * @implements Iauth_req_t
             * @constructor
             * @param {maxwell.protocol.Iauth_req_t=} [properties] Properties to set
             */
            function auth_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * auth_req_t token.
             * @member {string} token
             * @memberof maxwell.protocol.auth_req_t
             * @instance
             */
            auth_req_t.prototype.token = "";

            /**
             * auth_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.auth_req_t
             * @instance
             */
            auth_req_t.prototype.ref = 0;

            /**
             * Creates a new auth_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.auth_req_t
             * @static
             * @param {maxwell.protocol.Iauth_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.auth_req_t} auth_req_t instance
             */
            auth_req_t.create = function create(properties) {
                return new auth_req_t(properties);
            };

            /**
             * Encodes the specified auth_req_t message. Does not implicitly {@link maxwell.protocol.auth_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.auth_req_t
             * @static
             * @param {maxwell.protocol.Iauth_req_t} message auth_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            auth_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an auth_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.auth_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.auth_req_t} auth_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            auth_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.auth_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.token = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return auth_req_t;
        })();

        protocol.auth_rep_t = (function() {

            /**
             * Properties of an auth_rep_t.
             * @memberof maxwell.protocol
             * @interface Iauth_rep_t
             * @property {number|null} [ref] auth_rep_t ref
             */

            /**
             * Constructs a new auth_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an auth_rep_t.
             * @implements Iauth_rep_t
             * @constructor
             * @param {maxwell.protocol.Iauth_rep_t=} [properties] Properties to set
             */
            function auth_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * auth_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.auth_rep_t
             * @instance
             */
            auth_rep_t.prototype.ref = 0;

            /**
             * Creates a new auth_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.auth_rep_t
             * @static
             * @param {maxwell.protocol.Iauth_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.auth_rep_t} auth_rep_t instance
             */
            auth_rep_t.create = function create(properties) {
                return new auth_rep_t(properties);
            };

            /**
             * Encodes the specified auth_rep_t message. Does not implicitly {@link maxwell.protocol.auth_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.auth_rep_t
             * @static
             * @param {maxwell.protocol.Iauth_rep_t} message auth_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            auth_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an auth_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.auth_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.auth_rep_t} auth_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            auth_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.auth_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return auth_rep_t;
        })();

        protocol.ok_rep_t = (function() {

            /**
             * Properties of an ok_rep_t.
             * @memberof maxwell.protocol
             * @interface Iok_rep_t
             * @property {number|null} [ref] ok_rep_t ref
             */

            /**
             * Constructs a new ok_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an ok_rep_t.
             * @implements Iok_rep_t
             * @constructor
             * @param {maxwell.protocol.Iok_rep_t=} [properties] Properties to set
             */
            function ok_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ok_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.ok_rep_t
             * @instance
             */
            ok_rep_t.prototype.ref = 0;

            /**
             * Creates a new ok_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.ok_rep_t
             * @static
             * @param {maxwell.protocol.Iok_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.ok_rep_t} ok_rep_t instance
             */
            ok_rep_t.create = function create(properties) {
                return new ok_rep_t(properties);
            };

            /**
             * Encodes the specified ok_rep_t message. Does not implicitly {@link maxwell.protocol.ok_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.ok_rep_t
             * @static
             * @param {maxwell.protocol.Iok_rep_t} message ok_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ok_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an ok_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.ok_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.ok_rep_t} ok_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ok_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ok_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ok_rep_t;
        })();

        protocol.error_rep_t = (function() {

            /**
             * Properties of an error_rep_t.
             * @memberof maxwell.protocol
             * @interface Ierror_rep_t
             * @property {number|null} [code] error_rep_t code
             * @property {string|null} [desc] error_rep_t desc
             * @property {number|null} [ref] error_rep_t ref
             */

            /**
             * Constructs a new error_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an error_rep_t.
             * @implements Ierror_rep_t
             * @constructor
             * @param {maxwell.protocol.Ierror_rep_t=} [properties] Properties to set
             */
            function error_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * error_rep_t code.
             * @member {number} code
             * @memberof maxwell.protocol.error_rep_t
             * @instance
             */
            error_rep_t.prototype.code = 0;

            /**
             * error_rep_t desc.
             * @member {string} desc
             * @memberof maxwell.protocol.error_rep_t
             * @instance
             */
            error_rep_t.prototype.desc = "";

            /**
             * error_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.error_rep_t
             * @instance
             */
            error_rep_t.prototype.ref = 0;

            /**
             * Creates a new error_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.error_rep_t
             * @static
             * @param {maxwell.protocol.Ierror_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.error_rep_t} error_rep_t instance
             */
            error_rep_t.create = function create(properties) {
                return new error_rep_t(properties);
            };

            /**
             * Encodes the specified error_rep_t message. Does not implicitly {@link maxwell.protocol.error_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.error_rep_t
             * @static
             * @param {maxwell.protocol.Ierror_rep_t} message error_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            error_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an error_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.error_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.error_rep_t} error_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            error_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.error_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.desc = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return error_rep_t;
        })();

        protocol.ok2_rep_t = (function() {

            /**
             * Properties of an ok2_rep_t.
             * @memberof maxwell.protocol
             * @interface Iok2_rep_t
             * @property {Array.<maxwell.protocol.Itrace_t>|null} [traces] ok2_rep_t traces
             */

            /**
             * Constructs a new ok2_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an ok2_rep_t.
             * @implements Iok2_rep_t
             * @constructor
             * @param {maxwell.protocol.Iok2_rep_t=} [properties] Properties to set
             */
            function ok2_rep_t(properties) {
                this.traces = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ok2_rep_t traces.
             * @member {Array.<maxwell.protocol.Itrace_t>} traces
             * @memberof maxwell.protocol.ok2_rep_t
             * @instance
             */
            ok2_rep_t.prototype.traces = $util.emptyArray;

            /**
             * Creates a new ok2_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.ok2_rep_t
             * @static
             * @param {maxwell.protocol.Iok2_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.ok2_rep_t} ok2_rep_t instance
             */
            ok2_rep_t.create = function create(properties) {
                return new ok2_rep_t(properties);
            };

            /**
             * Encodes the specified ok2_rep_t message. Does not implicitly {@link maxwell.protocol.ok2_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.ok2_rep_t
             * @static
             * @param {maxwell.protocol.Iok2_rep_t} message ok2_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ok2_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traces != null && message.traces.length)
                    for (let i = 0; i < message.traces.length; ++i)
                        $root.maxwell.protocol.trace_t.encode(message.traces[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an ok2_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.ok2_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.ok2_rep_t} ok2_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ok2_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ok2_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        if (!(message.traces && message.traces.length))
                            message.traces = [];
                        message.traces.push($root.maxwell.protocol.trace_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ok2_rep_t;
        })();

        protocol.error2_rep_t = (function() {

            /**
             * Properties of an error2_rep_t.
             * @memberof maxwell.protocol
             * @interface Ierror2_rep_t
             * @property {number|null} [code] error2_rep_t code
             * @property {string|null} [desc] error2_rep_t desc
             * @property {Array.<maxwell.protocol.Itrace_t>|null} [traces] error2_rep_t traces
             */

            /**
             * Constructs a new error2_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an error2_rep_t.
             * @implements Ierror2_rep_t
             * @constructor
             * @param {maxwell.protocol.Ierror2_rep_t=} [properties] Properties to set
             */
            function error2_rep_t(properties) {
                this.traces = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * error2_rep_t code.
             * @member {number} code
             * @memberof maxwell.protocol.error2_rep_t
             * @instance
             */
            error2_rep_t.prototype.code = 0;

            /**
             * error2_rep_t desc.
             * @member {string} desc
             * @memberof maxwell.protocol.error2_rep_t
             * @instance
             */
            error2_rep_t.prototype.desc = "";

            /**
             * error2_rep_t traces.
             * @member {Array.<maxwell.protocol.Itrace_t>} traces
             * @memberof maxwell.protocol.error2_rep_t
             * @instance
             */
            error2_rep_t.prototype.traces = $util.emptyArray;

            /**
             * Creates a new error2_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.error2_rep_t
             * @static
             * @param {maxwell.protocol.Ierror2_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.error2_rep_t} error2_rep_t instance
             */
            error2_rep_t.create = function create(properties) {
                return new error2_rep_t(properties);
            };

            /**
             * Encodes the specified error2_rep_t message. Does not implicitly {@link maxwell.protocol.error2_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.error2_rep_t
             * @static
             * @param {maxwell.protocol.Ierror2_rep_t} message error2_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            error2_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
                if (message.traces != null && message.traces.length)
                    for (let i = 0; i < message.traces.length; ++i)
                        $root.maxwell.protocol.trace_t.encode(message.traces[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an error2_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.error2_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.error2_rep_t} error2_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            error2_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.error2_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.desc = reader.string();
                        break;
                    case 15:
                        if (!(message.traces && message.traces.length))
                            message.traces = [];
                        message.traces.push($root.maxwell.protocol.trace_t.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return error2_rep_t;
        })();

        protocol.watch_req_t = (function() {

            /**
             * Properties of a watch_req_t.
             * @memberof maxwell.protocol
             * @interface Iwatch_req_t
             * @property {string|null} [type] watch_req_t type
             * @property {number|null} [ref] watch_req_t ref
             */

            /**
             * Constructs a new watch_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a watch_req_t.
             * @implements Iwatch_req_t
             * @constructor
             * @param {maxwell.protocol.Iwatch_req_t=} [properties] Properties to set
             */
            function watch_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * watch_req_t type.
             * @member {string} type
             * @memberof maxwell.protocol.watch_req_t
             * @instance
             */
            watch_req_t.prototype.type = "";

            /**
             * watch_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.watch_req_t
             * @instance
             */
            watch_req_t.prototype.ref = 0;

            /**
             * Creates a new watch_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.watch_req_t
             * @static
             * @param {maxwell.protocol.Iwatch_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.watch_req_t} watch_req_t instance
             */
            watch_req_t.create = function create(properties) {
                return new watch_req_t(properties);
            };

            /**
             * Encodes the specified watch_req_t message. Does not implicitly {@link maxwell.protocol.watch_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.watch_req_t
             * @static
             * @param {maxwell.protocol.Iwatch_req_t} message watch_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            watch_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a watch_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.watch_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.watch_req_t} watch_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            watch_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.watch_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return watch_req_t;
        })();

        protocol.watch_rep_t = (function() {

            /**
             * Properties of a watch_rep_t.
             * @memberof maxwell.protocol
             * @interface Iwatch_rep_t
             * @property {number|null} [ref] watch_rep_t ref
             */

            /**
             * Constructs a new watch_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a watch_rep_t.
             * @implements Iwatch_rep_t
             * @constructor
             * @param {maxwell.protocol.Iwatch_rep_t=} [properties] Properties to set
             */
            function watch_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * watch_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.watch_rep_t
             * @instance
             */
            watch_rep_t.prototype.ref = 0;

            /**
             * Creates a new watch_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.watch_rep_t
             * @static
             * @param {maxwell.protocol.Iwatch_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.watch_rep_t} watch_rep_t instance
             */
            watch_rep_t.create = function create(properties) {
                return new watch_rep_t(properties);
            };

            /**
             * Encodes the specified watch_rep_t message. Does not implicitly {@link maxwell.protocol.watch_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.watch_rep_t
             * @static
             * @param {maxwell.protocol.Iwatch_rep_t} message watch_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            watch_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a watch_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.watch_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.watch_rep_t} watch_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            watch_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.watch_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return watch_rep_t;
        })();

        protocol.unwatch_req_t = (function() {

            /**
             * Properties of an unwatch_req_t.
             * @memberof maxwell.protocol
             * @interface Iunwatch_req_t
             * @property {string|null} [type] unwatch_req_t type
             * @property {number|null} [ref] unwatch_req_t ref
             */

            /**
             * Constructs a new unwatch_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an unwatch_req_t.
             * @implements Iunwatch_req_t
             * @constructor
             * @param {maxwell.protocol.Iunwatch_req_t=} [properties] Properties to set
             */
            function unwatch_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * unwatch_req_t type.
             * @member {string} type
             * @memberof maxwell.protocol.unwatch_req_t
             * @instance
             */
            unwatch_req_t.prototype.type = "";

            /**
             * unwatch_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.unwatch_req_t
             * @instance
             */
            unwatch_req_t.prototype.ref = 0;

            /**
             * Creates a new unwatch_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.unwatch_req_t
             * @static
             * @param {maxwell.protocol.Iunwatch_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.unwatch_req_t} unwatch_req_t instance
             */
            unwatch_req_t.create = function create(properties) {
                return new unwatch_req_t(properties);
            };

            /**
             * Encodes the specified unwatch_req_t message. Does not implicitly {@link maxwell.protocol.unwatch_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.unwatch_req_t
             * @static
             * @param {maxwell.protocol.Iunwatch_req_t} message unwatch_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            unwatch_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an unwatch_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.unwatch_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.unwatch_req_t} unwatch_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            unwatch_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.unwatch_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return unwatch_req_t;
        })();

        protocol.unwatch_rep_t = (function() {

            /**
             * Properties of an unwatch_rep_t.
             * @memberof maxwell.protocol
             * @interface Iunwatch_rep_t
             * @property {number|null} [ref] unwatch_rep_t ref
             */

            /**
             * Constructs a new unwatch_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an unwatch_rep_t.
             * @implements Iunwatch_rep_t
             * @constructor
             * @param {maxwell.protocol.Iunwatch_rep_t=} [properties] Properties to set
             */
            function unwatch_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * unwatch_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.unwatch_rep_t
             * @instance
             */
            unwatch_rep_t.prototype.ref = 0;

            /**
             * Creates a new unwatch_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.unwatch_rep_t
             * @static
             * @param {maxwell.protocol.Iunwatch_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.unwatch_rep_t} unwatch_rep_t instance
             */
            unwatch_rep_t.create = function create(properties) {
                return new unwatch_rep_t(properties);
            };

            /**
             * Encodes the specified unwatch_rep_t message. Does not implicitly {@link maxwell.protocol.unwatch_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.unwatch_rep_t
             * @static
             * @param {maxwell.protocol.Iunwatch_rep_t} message unwatch_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            unwatch_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an unwatch_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.unwatch_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.unwatch_rep_t} unwatch_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            unwatch_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.unwatch_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return unwatch_rep_t;
        })();

        protocol.register_frontend_req_t = (function() {

            /**
             * Properties of a register_frontend_req_t.
             * @memberof maxwell.protocol
             * @interface Iregister_frontend_req_t
             * @property {string|null} [endpoint] register_frontend_req_t endpoint
             * @property {number|null} [ref] register_frontend_req_t ref
             */

            /**
             * Constructs a new register_frontend_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a register_frontend_req_t.
             * @implements Iregister_frontend_req_t
             * @constructor
             * @param {maxwell.protocol.Iregister_frontend_req_t=} [properties] Properties to set
             */
            function register_frontend_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_frontend_req_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.register_frontend_req_t
             * @instance
             */
            register_frontend_req_t.prototype.endpoint = "";

            /**
             * register_frontend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_frontend_req_t
             * @instance
             */
            register_frontend_req_t.prototype.ref = 0;

            /**
             * Creates a new register_frontend_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.register_frontend_req_t
             * @static
             * @param {maxwell.protocol.Iregister_frontend_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.register_frontend_req_t} register_frontend_req_t instance
             */
            register_frontend_req_t.create = function create(properties) {
                return new register_frontend_req_t(properties);
            };

            /**
             * Encodes the specified register_frontend_req_t message. Does not implicitly {@link maxwell.protocol.register_frontend_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.register_frontend_req_t
             * @static
             * @param {maxwell.protocol.Iregister_frontend_req_t} message register_frontend_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            register_frontend_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a register_frontend_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.register_frontend_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.register_frontend_req_t} register_frontend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            register_frontend_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_frontend_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.endpoint = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return register_frontend_req_t;
        })();

        protocol.register_frontend_rep_t = (function() {

            /**
             * Properties of a register_frontend_rep_t.
             * @memberof maxwell.protocol
             * @interface Iregister_frontend_rep_t
             * @property {number|null} [ref] register_frontend_rep_t ref
             */

            /**
             * Constructs a new register_frontend_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a register_frontend_rep_t.
             * @implements Iregister_frontend_rep_t
             * @constructor
             * @param {maxwell.protocol.Iregister_frontend_rep_t=} [properties] Properties to set
             */
            function register_frontend_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_frontend_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_frontend_rep_t
             * @instance
             */
            register_frontend_rep_t.prototype.ref = 0;

            /**
             * Creates a new register_frontend_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.register_frontend_rep_t
             * @static
             * @param {maxwell.protocol.Iregister_frontend_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.register_frontend_rep_t} register_frontend_rep_t instance
             */
            register_frontend_rep_t.create = function create(properties) {
                return new register_frontend_rep_t(properties);
            };

            /**
             * Encodes the specified register_frontend_rep_t message. Does not implicitly {@link maxwell.protocol.register_frontend_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.register_frontend_rep_t
             * @static
             * @param {maxwell.protocol.Iregister_frontend_rep_t} message register_frontend_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            register_frontend_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a register_frontend_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.register_frontend_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.register_frontend_rep_t} register_frontend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            register_frontend_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_frontend_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return register_frontend_rep_t;
        })();

        protocol.add_route_req_t = (function() {

            /**
             * Properties of an add_route_req_t.
             * @memberof maxwell.protocol
             * @interface Iadd_route_req_t
             * @property {string|null} [type] add_route_req_t type
             * @property {number|null} [ref] add_route_req_t ref
             */

            /**
             * Constructs a new add_route_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an add_route_req_t.
             * @implements Iadd_route_req_t
             * @constructor
             * @param {maxwell.protocol.Iadd_route_req_t=} [properties] Properties to set
             */
            function add_route_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * add_route_req_t type.
             * @member {string} type
             * @memberof maxwell.protocol.add_route_req_t
             * @instance
             */
            add_route_req_t.prototype.type = "";

            /**
             * add_route_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.add_route_req_t
             * @instance
             */
            add_route_req_t.prototype.ref = 0;

            /**
             * Creates a new add_route_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.add_route_req_t
             * @static
             * @param {maxwell.protocol.Iadd_route_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.add_route_req_t} add_route_req_t instance
             */
            add_route_req_t.create = function create(properties) {
                return new add_route_req_t(properties);
            };

            /**
             * Encodes the specified add_route_req_t message. Does not implicitly {@link maxwell.protocol.add_route_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.add_route_req_t
             * @static
             * @param {maxwell.protocol.Iadd_route_req_t} message add_route_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            add_route_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an add_route_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.add_route_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.add_route_req_t} add_route_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            add_route_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.add_route_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return add_route_req_t;
        })();

        protocol.add_route_rep_t = (function() {

            /**
             * Properties of an add_route_rep_t.
             * @memberof maxwell.protocol
             * @interface Iadd_route_rep_t
             * @property {number|null} [ref] add_route_rep_t ref
             */

            /**
             * Constructs a new add_route_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an add_route_rep_t.
             * @implements Iadd_route_rep_t
             * @constructor
             * @param {maxwell.protocol.Iadd_route_rep_t=} [properties] Properties to set
             */
            function add_route_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * add_route_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.add_route_rep_t
             * @instance
             */
            add_route_rep_t.prototype.ref = 0;

            /**
             * Creates a new add_route_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.add_route_rep_t
             * @static
             * @param {maxwell.protocol.Iadd_route_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.add_route_rep_t} add_route_rep_t instance
             */
            add_route_rep_t.create = function create(properties) {
                return new add_route_rep_t(properties);
            };

            /**
             * Encodes the specified add_route_rep_t message. Does not implicitly {@link maxwell.protocol.add_route_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.add_route_rep_t
             * @static
             * @param {maxwell.protocol.Iadd_route_rep_t} message add_route_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            add_route_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an add_route_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.add_route_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.add_route_rep_t} add_route_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            add_route_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.add_route_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return add_route_rep_t;
        })();

        protocol.delete_route_req_t = (function() {

            /**
             * Properties of a delete_route_req_t.
             * @memberof maxwell.protocol
             * @interface Idelete_route_req_t
             * @property {string|null} [type] delete_route_req_t type
             * @property {number|null} [ref] delete_route_req_t ref
             */

            /**
             * Constructs a new delete_route_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a delete_route_req_t.
             * @implements Idelete_route_req_t
             * @constructor
             * @param {maxwell.protocol.Idelete_route_req_t=} [properties] Properties to set
             */
            function delete_route_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * delete_route_req_t type.
             * @member {string} type
             * @memberof maxwell.protocol.delete_route_req_t
             * @instance
             */
            delete_route_req_t.prototype.type = "";

            /**
             * delete_route_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.delete_route_req_t
             * @instance
             */
            delete_route_req_t.prototype.ref = 0;

            /**
             * Creates a new delete_route_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.delete_route_req_t
             * @static
             * @param {maxwell.protocol.Idelete_route_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.delete_route_req_t} delete_route_req_t instance
             */
            delete_route_req_t.create = function create(properties) {
                return new delete_route_req_t(properties);
            };

            /**
             * Encodes the specified delete_route_req_t message. Does not implicitly {@link maxwell.protocol.delete_route_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.delete_route_req_t
             * @static
             * @param {maxwell.protocol.Idelete_route_req_t} message delete_route_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            delete_route_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a delete_route_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.delete_route_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.delete_route_req_t} delete_route_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            delete_route_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.delete_route_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return delete_route_req_t;
        })();

        protocol.delete_route_rep_t = (function() {

            /**
             * Properties of a delete_route_rep_t.
             * @memberof maxwell.protocol
             * @interface Idelete_route_rep_t
             * @property {number|null} [ref] delete_route_rep_t ref
             */

            /**
             * Constructs a new delete_route_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a delete_route_rep_t.
             * @implements Idelete_route_rep_t
             * @constructor
             * @param {maxwell.protocol.Idelete_route_rep_t=} [properties] Properties to set
             */
            function delete_route_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * delete_route_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.delete_route_rep_t
             * @instance
             */
            delete_route_rep_t.prototype.ref = 0;

            /**
             * Creates a new delete_route_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.delete_route_rep_t
             * @static
             * @param {maxwell.protocol.Idelete_route_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.delete_route_rep_t} delete_route_rep_t instance
             */
            delete_route_rep_t.create = function create(properties) {
                return new delete_route_rep_t(properties);
            };

            /**
             * Encodes the specified delete_route_rep_t message. Does not implicitly {@link maxwell.protocol.delete_route_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.delete_route_rep_t
             * @static
             * @param {maxwell.protocol.Idelete_route_rep_t} message delete_route_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            delete_route_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a delete_route_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.delete_route_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.delete_route_rep_t} delete_route_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            delete_route_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.delete_route_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return delete_route_rep_t;
        })();

        protocol.add_route_msg_t = (function() {

            /**
             * Properties of an add_route_msg_t.
             * @memberof maxwell.protocol
             * @interface Iadd_route_msg_t
             * @property {string|null} [endpoint] add_route_msg_t endpoint
             * @property {number|null} [ref] add_route_msg_t ref
             */

            /**
             * Constructs a new add_route_msg_t.
             * @memberof maxwell.protocol
             * @classdesc Represents an add_route_msg_t.
             * @implements Iadd_route_msg_t
             * @constructor
             * @param {maxwell.protocol.Iadd_route_msg_t=} [properties] Properties to set
             */
            function add_route_msg_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * add_route_msg_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.add_route_msg_t
             * @instance
             */
            add_route_msg_t.prototype.endpoint = "";

            /**
             * add_route_msg_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.add_route_msg_t
             * @instance
             */
            add_route_msg_t.prototype.ref = 0;

            /**
             * Creates a new add_route_msg_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.add_route_msg_t
             * @static
             * @param {maxwell.protocol.Iadd_route_msg_t=} [properties] Properties to set
             * @returns {maxwell.protocol.add_route_msg_t} add_route_msg_t instance
             */
            add_route_msg_t.create = function create(properties) {
                return new add_route_msg_t(properties);
            };

            /**
             * Encodes the specified add_route_msg_t message. Does not implicitly {@link maxwell.protocol.add_route_msg_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.add_route_msg_t
             * @static
             * @param {maxwell.protocol.Iadd_route_msg_t} message add_route_msg_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            add_route_msg_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes an add_route_msg_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.add_route_msg_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.add_route_msg_t} add_route_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            add_route_msg_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.add_route_msg_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.endpoint = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return add_route_msg_t;
        })();

        protocol.delete_route_msg_t = (function() {

            /**
             * Properties of a delete_route_msg_t.
             * @memberof maxwell.protocol
             * @interface Idelete_route_msg_t
             * @property {string|null} [type] delete_route_msg_t type
             * @property {string|null} [endpoint] delete_route_msg_t endpoint
             * @property {number|null} [ref] delete_route_msg_t ref
             */

            /**
             * Constructs a new delete_route_msg_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a delete_route_msg_t.
             * @implements Idelete_route_msg_t
             * @constructor
             * @param {maxwell.protocol.Idelete_route_msg_t=} [properties] Properties to set
             */
            function delete_route_msg_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * delete_route_msg_t type.
             * @member {string} type
             * @memberof maxwell.protocol.delete_route_msg_t
             * @instance
             */
            delete_route_msg_t.prototype.type = "";

            /**
             * delete_route_msg_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.delete_route_msg_t
             * @instance
             */
            delete_route_msg_t.prototype.endpoint = "";

            /**
             * delete_route_msg_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.delete_route_msg_t
             * @instance
             */
            delete_route_msg_t.prototype.ref = 0;

            /**
             * Creates a new delete_route_msg_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.delete_route_msg_t
             * @static
             * @param {maxwell.protocol.Idelete_route_msg_t=} [properties] Properties to set
             * @returns {maxwell.protocol.delete_route_msg_t} delete_route_msg_t instance
             */
            delete_route_msg_t.create = function create(properties) {
                return new delete_route_msg_t(properties);
            };

            /**
             * Encodes the specified delete_route_msg_t message. Does not implicitly {@link maxwell.protocol.delete_route_msg_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.delete_route_msg_t
             * @static
             * @param {maxwell.protocol.Idelete_route_msg_t} message delete_route_msg_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            delete_route_msg_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a delete_route_msg_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.delete_route_msg_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.delete_route_msg_t} delete_route_msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            delete_route_msg_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.delete_route_msg_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 2:
                        message.endpoint = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return delete_route_msg_t;
        })();

        protocol.push_routes_req_t = (function() {

            /**
             * Properties of a push_routes_req_t.
             * @memberof maxwell.protocol
             * @interface Ipush_routes_req_t
             * @property {Array.<string>|null} [types] push_routes_req_t types
             * @property {number|null} [ref] push_routes_req_t ref
             */

            /**
             * Constructs a new push_routes_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a push_routes_req_t.
             * @implements Ipush_routes_req_t
             * @constructor
             * @param {maxwell.protocol.Ipush_routes_req_t=} [properties] Properties to set
             */
            function push_routes_req_t(properties) {
                this.types = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * push_routes_req_t types.
             * @member {Array.<string>} types
             * @memberof maxwell.protocol.push_routes_req_t
             * @instance
             */
            push_routes_req_t.prototype.types = $util.emptyArray;

            /**
             * push_routes_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.push_routes_req_t
             * @instance
             */
            push_routes_req_t.prototype.ref = 0;

            /**
             * Creates a new push_routes_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.push_routes_req_t
             * @static
             * @param {maxwell.protocol.Ipush_routes_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.push_routes_req_t} push_routes_req_t instance
             */
            push_routes_req_t.create = function create(properties) {
                return new push_routes_req_t(properties);
            };

            /**
             * Encodes the specified push_routes_req_t message. Does not implicitly {@link maxwell.protocol.push_routes_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.push_routes_req_t
             * @static
             * @param {maxwell.protocol.Ipush_routes_req_t} message push_routes_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            push_routes_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.types != null && message.types.length)
                    for (let i = 0; i < message.types.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.types[i]);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a push_routes_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.push_routes_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.push_routes_req_t} push_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            push_routes_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.push_routes_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.types && message.types.length))
                            message.types = [];
                        message.types.push(reader.string());
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return push_routes_req_t;
        })();

        protocol.push_routes_rep_t = (function() {

            /**
             * Properties of a push_routes_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipush_routes_rep_t
             * @property {number|null} [ref] push_routes_rep_t ref
             */

            /**
             * Constructs a new push_routes_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a push_routes_rep_t.
             * @implements Ipush_routes_rep_t
             * @constructor
             * @param {maxwell.protocol.Ipush_routes_rep_t=} [properties] Properties to set
             */
            function push_routes_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * push_routes_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.push_routes_rep_t
             * @instance
             */
            push_routes_rep_t.prototype.ref = 0;

            /**
             * Creates a new push_routes_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.push_routes_rep_t
             * @static
             * @param {maxwell.protocol.Ipush_routes_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.push_routes_rep_t} push_routes_rep_t instance
             */
            push_routes_rep_t.create = function create(properties) {
                return new push_routes_rep_t(properties);
            };

            /**
             * Encodes the specified push_routes_rep_t message. Does not implicitly {@link maxwell.protocol.push_routes_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.push_routes_rep_t
             * @static
             * @param {maxwell.protocol.Ipush_routes_rep_t} message push_routes_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            push_routes_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a push_routes_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.push_routes_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.push_routes_rep_t} push_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            push_routes_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.push_routes_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return push_routes_rep_t;
        })();

        protocol.pull_routes_req_t = (function() {

            /**
             * Properties of a pull_routes_req_t.
             * @memberof maxwell.protocol
             * @interface Ipull_routes_req_t
             * @property {number|null} [ref] pull_routes_req_t ref
             */

            /**
             * Constructs a new pull_routes_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pull_routes_req_t.
             * @implements Ipull_routes_req_t
             * @constructor
             * @param {maxwell.protocol.Ipull_routes_req_t=} [properties] Properties to set
             */
            function pull_routes_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pull_routes_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pull_routes_req_t
             * @instance
             */
            pull_routes_req_t.prototype.ref = 0;

            /**
             * Creates a new pull_routes_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.pull_routes_req_t
             * @static
             * @param {maxwell.protocol.Ipull_routes_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.pull_routes_req_t} pull_routes_req_t instance
             */
            pull_routes_req_t.create = function create(properties) {
                return new pull_routes_req_t(properties);
            };

            /**
             * Encodes the specified pull_routes_req_t message. Does not implicitly {@link maxwell.protocol.pull_routes_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pull_routes_req_t
             * @static
             * @param {maxwell.protocol.Ipull_routes_req_t} message pull_routes_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pull_routes_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pull_routes_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pull_routes_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pull_routes_req_t} pull_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pull_routes_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pull_routes_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return pull_routes_req_t;
        })();

        protocol.pull_routes_rep_t = (function() {

            /**
             * Properties of a pull_routes_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipull_routes_rep_t
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [routeGroups] pull_routes_rep_t routeGroups
             * @property {number|null} [ref] pull_routes_rep_t ref
             */

            /**
             * Constructs a new pull_routes_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pull_routes_rep_t.
             * @implements Ipull_routes_rep_t
             * @constructor
             * @param {maxwell.protocol.Ipull_routes_rep_t=} [properties] Properties to set
             */
            function pull_routes_rep_t(properties) {
                this.routeGroups = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pull_routes_rep_t routeGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} routeGroups
             * @memberof maxwell.protocol.pull_routes_rep_t
             * @instance
             */
            pull_routes_rep_t.prototype.routeGroups = $util.emptyArray;

            /**
             * pull_routes_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pull_routes_rep_t
             * @instance
             */
            pull_routes_rep_t.prototype.ref = 0;

            /**
             * Creates a new pull_routes_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.pull_routes_rep_t
             * @static
             * @param {maxwell.protocol.Ipull_routes_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.pull_routes_rep_t} pull_routes_rep_t instance
             */
            pull_routes_rep_t.create = function create(properties) {
                return new pull_routes_rep_t(properties);
            };

            /**
             * Encodes the specified pull_routes_rep_t message. Does not implicitly {@link maxwell.protocol.pull_routes_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pull_routes_rep_t
             * @static
             * @param {maxwell.protocol.Ipull_routes_rep_t} message pull_routes_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pull_routes_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.routeGroups != null && message.routeGroups.length)
                    for (let i = 0; i < message.routeGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.routeGroups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pull_routes_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pull_routes_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pull_routes_rep_t} pull_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pull_routes_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pull_routes_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.routeGroups && message.routeGroups.length))
                            message.routeGroups = [];
                        message.routeGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return pull_routes_rep_t;
        })();

        protocol.delete_topics_req_t = (function() {

            /**
             * Properties of a delete_topics_req_t.
             * @memberof maxwell.protocol
             * @interface Idelete_topics_req_t
             * @property {Array.<string>|null} [topics] delete_topics_req_t topics
             * @property {number|null} [ref] delete_topics_req_t ref
             */

            /**
             * Constructs a new delete_topics_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a delete_topics_req_t.
             * @implements Idelete_topics_req_t
             * @constructor
             * @param {maxwell.protocol.Idelete_topics_req_t=} [properties] Properties to set
             */
            function delete_topics_req_t(properties) {
                this.topics = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * delete_topics_req_t topics.
             * @member {Array.<string>} topics
             * @memberof maxwell.protocol.delete_topics_req_t
             * @instance
             */
            delete_topics_req_t.prototype.topics = $util.emptyArray;

            /**
             * delete_topics_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.delete_topics_req_t
             * @instance
             */
            delete_topics_req_t.prototype.ref = 0;

            /**
             * Creates a new delete_topics_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.delete_topics_req_t
             * @static
             * @param {maxwell.protocol.Idelete_topics_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.delete_topics_req_t} delete_topics_req_t instance
             */
            delete_topics_req_t.create = function create(properties) {
                return new delete_topics_req_t(properties);
            };

            /**
             * Encodes the specified delete_topics_req_t message. Does not implicitly {@link maxwell.protocol.delete_topics_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.delete_topics_req_t
             * @static
             * @param {maxwell.protocol.Idelete_topics_req_t} message delete_topics_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            delete_topics_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topics != null && message.topics.length)
                    for (let i = 0; i < message.topics.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.topics[i]);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a delete_topics_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.delete_topics_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.delete_topics_req_t} delete_topics_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            delete_topics_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.delete_topics_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.topics && message.topics.length))
                            message.topics = [];
                        message.topics.push(reader.string());
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return delete_topics_req_t;
        })();

        protocol.delete_topics_rep_t = (function() {

            /**
             * Properties of a delete_topics_rep_t.
             * @memberof maxwell.protocol
             * @interface Idelete_topics_rep_t
             * @property {number|null} [ref] delete_topics_rep_t ref
             */

            /**
             * Constructs a new delete_topics_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a delete_topics_rep_t.
             * @implements Idelete_topics_rep_t
             * @constructor
             * @param {maxwell.protocol.Idelete_topics_rep_t=} [properties] Properties to set
             */
            function delete_topics_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * delete_topics_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.delete_topics_rep_t
             * @instance
             */
            delete_topics_rep_t.prototype.ref = 0;

            /**
             * Creates a new delete_topics_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.delete_topics_rep_t
             * @static
             * @param {maxwell.protocol.Idelete_topics_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.delete_topics_rep_t} delete_topics_rep_t instance
             */
            delete_topics_rep_t.create = function create(properties) {
                return new delete_topics_rep_t(properties);
            };

            /**
             * Encodes the specified delete_topics_rep_t message. Does not implicitly {@link maxwell.protocol.delete_topics_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.delete_topics_rep_t
             * @static
             * @param {maxwell.protocol.Idelete_topics_rep_t} message delete_topics_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            delete_topics_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a delete_topics_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.delete_topics_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.delete_topics_rep_t} delete_topics_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            delete_topics_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.delete_topics_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return delete_topics_rep_t;
        })();

        protocol.register_backend_req_t = (function() {

            /**
             * Properties of a register_backend_req_t.
             * @memberof maxwell.protocol
             * @interface Iregister_backend_req_t
             * @property {string|null} [endpoint] register_backend_req_t endpoint
             * @property {number|null} [ref] register_backend_req_t ref
             */

            /**
             * Constructs a new register_backend_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a register_backend_req_t.
             * @implements Iregister_backend_req_t
             * @constructor
             * @param {maxwell.protocol.Iregister_backend_req_t=} [properties] Properties to set
             */
            function register_backend_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_backend_req_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.register_backend_req_t
             * @instance
             */
            register_backend_req_t.prototype.endpoint = "";

            /**
             * register_backend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_backend_req_t
             * @instance
             */
            register_backend_req_t.prototype.ref = 0;

            /**
             * Creates a new register_backend_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.register_backend_req_t
             * @static
             * @param {maxwell.protocol.Iregister_backend_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.register_backend_req_t} register_backend_req_t instance
             */
            register_backend_req_t.create = function create(properties) {
                return new register_backend_req_t(properties);
            };

            /**
             * Encodes the specified register_backend_req_t message. Does not implicitly {@link maxwell.protocol.register_backend_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.register_backend_req_t
             * @static
             * @param {maxwell.protocol.Iregister_backend_req_t} message register_backend_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            register_backend_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a register_backend_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.register_backend_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.register_backend_req_t} register_backend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            register_backend_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_backend_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.endpoint = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return register_backend_req_t;
        })();

        protocol.register_backend_rep_t = (function() {

            /**
             * Properties of a register_backend_rep_t.
             * @memberof maxwell.protocol
             * @interface Iregister_backend_rep_t
             * @property {number|null} [ref] register_backend_rep_t ref
             */

            /**
             * Constructs a new register_backend_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a register_backend_rep_t.
             * @implements Iregister_backend_rep_t
             * @constructor
             * @param {maxwell.protocol.Iregister_backend_rep_t=} [properties] Properties to set
             */
            function register_backend_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_backend_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_backend_rep_t
             * @instance
             */
            register_backend_rep_t.prototype.ref = 0;

            /**
             * Creates a new register_backend_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.register_backend_rep_t
             * @static
             * @param {maxwell.protocol.Iregister_backend_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.register_backend_rep_t} register_backend_rep_t instance
             */
            register_backend_rep_t.create = function create(properties) {
                return new register_backend_rep_t(properties);
            };

            /**
             * Encodes the specified register_backend_rep_t message. Does not implicitly {@link maxwell.protocol.register_backend_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.register_backend_rep_t
             * @static
             * @param {maxwell.protocol.Iregister_backend_rep_t} message register_backend_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            register_backend_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a register_backend_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.register_backend_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.register_backend_rep_t} register_backend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            register_backend_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_backend_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return register_backend_rep_t;
        })();

        protocol.resolve_frontend_req_t = (function() {

            /**
             * Properties of a resolve_frontend_req_t.
             * @memberof maxwell.protocol
             * @interface Iresolve_frontend_req_t
             * @property {number|null} [ref] resolve_frontend_req_t ref
             */

            /**
             * Constructs a new resolve_frontend_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a resolve_frontend_req_t.
             * @implements Iresolve_frontend_req_t
             * @constructor
             * @param {maxwell.protocol.Iresolve_frontend_req_t=} [properties] Properties to set
             */
            function resolve_frontend_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * resolve_frontend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.resolve_frontend_req_t
             * @instance
             */
            resolve_frontend_req_t.prototype.ref = 0;

            /**
             * Creates a new resolve_frontend_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.resolve_frontend_req_t
             * @static
             * @param {maxwell.protocol.Iresolve_frontend_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.resolve_frontend_req_t} resolve_frontend_req_t instance
             */
            resolve_frontend_req_t.create = function create(properties) {
                return new resolve_frontend_req_t(properties);
            };

            /**
             * Encodes the specified resolve_frontend_req_t message. Does not implicitly {@link maxwell.protocol.resolve_frontend_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.resolve_frontend_req_t
             * @static
             * @param {maxwell.protocol.Iresolve_frontend_req_t} message resolve_frontend_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            resolve_frontend_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a resolve_frontend_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.resolve_frontend_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.resolve_frontend_req_t} resolve_frontend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            resolve_frontend_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_frontend_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return resolve_frontend_req_t;
        })();

        protocol.resolve_frontend_rep_t = (function() {

            /**
             * Properties of a resolve_frontend_rep_t.
             * @memberof maxwell.protocol
             * @interface Iresolve_frontend_rep_t
             * @property {string|null} [endpoint] resolve_frontend_rep_t endpoint
             * @property {number|null} [ref] resolve_frontend_rep_t ref
             */

            /**
             * Constructs a new resolve_frontend_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a resolve_frontend_rep_t.
             * @implements Iresolve_frontend_rep_t
             * @constructor
             * @param {maxwell.protocol.Iresolve_frontend_rep_t=} [properties] Properties to set
             */
            function resolve_frontend_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * resolve_frontend_rep_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.resolve_frontend_rep_t
             * @instance
             */
            resolve_frontend_rep_t.prototype.endpoint = "";

            /**
             * resolve_frontend_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.resolve_frontend_rep_t
             * @instance
             */
            resolve_frontend_rep_t.prototype.ref = 0;

            /**
             * Creates a new resolve_frontend_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.resolve_frontend_rep_t
             * @static
             * @param {maxwell.protocol.Iresolve_frontend_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.resolve_frontend_rep_t} resolve_frontend_rep_t instance
             */
            resolve_frontend_rep_t.create = function create(properties) {
                return new resolve_frontend_rep_t(properties);
            };

            /**
             * Encodes the specified resolve_frontend_rep_t message. Does not implicitly {@link maxwell.protocol.resolve_frontend_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.resolve_frontend_rep_t
             * @static
             * @param {maxwell.protocol.Iresolve_frontend_rep_t} message resolve_frontend_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            resolve_frontend_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a resolve_frontend_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.resolve_frontend_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.resolve_frontend_rep_t} resolve_frontend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            resolve_frontend_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_frontend_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.endpoint = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return resolve_frontend_rep_t;
        })();

        protocol.resolve_backend_req_t = (function() {

            /**
             * Properties of a resolve_backend_req_t.
             * @memberof maxwell.protocol
             * @interface Iresolve_backend_req_t
             * @property {string|null} [topic] resolve_backend_req_t topic
             * @property {number|null} [ref] resolve_backend_req_t ref
             */

            /**
             * Constructs a new resolve_backend_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a resolve_backend_req_t.
             * @implements Iresolve_backend_req_t
             * @constructor
             * @param {maxwell.protocol.Iresolve_backend_req_t=} [properties] Properties to set
             */
            function resolve_backend_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * resolve_backend_req_t topic.
             * @member {string} topic
             * @memberof maxwell.protocol.resolve_backend_req_t
             * @instance
             */
            resolve_backend_req_t.prototype.topic = "";

            /**
             * resolve_backend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.resolve_backend_req_t
             * @instance
             */
            resolve_backend_req_t.prototype.ref = 0;

            /**
             * Creates a new resolve_backend_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.resolve_backend_req_t
             * @static
             * @param {maxwell.protocol.Iresolve_backend_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.resolve_backend_req_t} resolve_backend_req_t instance
             */
            resolve_backend_req_t.create = function create(properties) {
                return new resolve_backend_req_t(properties);
            };

            /**
             * Encodes the specified resolve_backend_req_t message. Does not implicitly {@link maxwell.protocol.resolve_backend_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.resolve_backend_req_t
             * @static
             * @param {maxwell.protocol.Iresolve_backend_req_t} message resolve_backend_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            resolve_backend_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a resolve_backend_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.resolve_backend_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.resolve_backend_req_t} resolve_backend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            resolve_backend_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_backend_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return resolve_backend_req_t;
        })();

        protocol.resolve_backend_rep_t = (function() {

            /**
             * Properties of a resolve_backend_rep_t.
             * @memberof maxwell.protocol
             * @interface Iresolve_backend_rep_t
             * @property {string|null} [endpoint] resolve_backend_rep_t endpoint
             * @property {number|null} [ref] resolve_backend_rep_t ref
             */

            /**
             * Constructs a new resolve_backend_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a resolve_backend_rep_t.
             * @implements Iresolve_backend_rep_t
             * @constructor
             * @param {maxwell.protocol.Iresolve_backend_rep_t=} [properties] Properties to set
             */
            function resolve_backend_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * resolve_backend_rep_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.resolve_backend_rep_t
             * @instance
             */
            resolve_backend_rep_t.prototype.endpoint = "";

            /**
             * resolve_backend_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.resolve_backend_rep_t
             * @instance
             */
            resolve_backend_rep_t.prototype.ref = 0;

            /**
             * Creates a new resolve_backend_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.resolve_backend_rep_t
             * @static
             * @param {maxwell.protocol.Iresolve_backend_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.resolve_backend_rep_t} resolve_backend_rep_t instance
             */
            resolve_backend_rep_t.create = function create(properties) {
                return new resolve_backend_rep_t(properties);
            };

            /**
             * Encodes the specified resolve_backend_rep_t message. Does not implicitly {@link maxwell.protocol.resolve_backend_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.resolve_backend_rep_t
             * @static
             * @param {maxwell.protocol.Iresolve_backend_rep_t} message resolve_backend_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            resolve_backend_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a resolve_backend_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.resolve_backend_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.resolve_backend_rep_t} resolve_backend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            resolve_backend_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_backend_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.endpoint = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return resolve_backend_rep_t;
        })();

        protocol.resolve_ip_req_t = (function() {

            /**
             * Properties of a resolve_ip_req_t.
             * @memberof maxwell.protocol
             * @interface Iresolve_ip_req_t
             * @property {number|null} [ref] resolve_ip_req_t ref
             */

            /**
             * Constructs a new resolve_ip_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a resolve_ip_req_t.
             * @implements Iresolve_ip_req_t
             * @constructor
             * @param {maxwell.protocol.Iresolve_ip_req_t=} [properties] Properties to set
             */
            function resolve_ip_req_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * resolve_ip_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.resolve_ip_req_t
             * @instance
             */
            resolve_ip_req_t.prototype.ref = 0;

            /**
             * Creates a new resolve_ip_req_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.resolve_ip_req_t
             * @static
             * @param {maxwell.protocol.Iresolve_ip_req_t=} [properties] Properties to set
             * @returns {maxwell.protocol.resolve_ip_req_t} resolve_ip_req_t instance
             */
            resolve_ip_req_t.create = function create(properties) {
                return new resolve_ip_req_t(properties);
            };

            /**
             * Encodes the specified resolve_ip_req_t message. Does not implicitly {@link maxwell.protocol.resolve_ip_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.resolve_ip_req_t
             * @static
             * @param {maxwell.protocol.Iresolve_ip_req_t} message resolve_ip_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            resolve_ip_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a resolve_ip_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.resolve_ip_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.resolve_ip_req_t} resolve_ip_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            resolve_ip_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_ip_req_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return resolve_ip_req_t;
        })();

        protocol.resolve_ip_rep_t = (function() {

            /**
             * Properties of a resolve_ip_rep_t.
             * @memberof maxwell.protocol
             * @interface Iresolve_ip_rep_t
             * @property {string|null} [ip] resolve_ip_rep_t ip
             * @property {number|null} [ref] resolve_ip_rep_t ref
             */

            /**
             * Constructs a new resolve_ip_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a resolve_ip_rep_t.
             * @implements Iresolve_ip_rep_t
             * @constructor
             * @param {maxwell.protocol.Iresolve_ip_rep_t=} [properties] Properties to set
             */
            function resolve_ip_rep_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * resolve_ip_rep_t ip.
             * @member {string} ip
             * @memberof maxwell.protocol.resolve_ip_rep_t
             * @instance
             */
            resolve_ip_rep_t.prototype.ip = "";

            /**
             * resolve_ip_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.resolve_ip_rep_t
             * @instance
             */
            resolve_ip_rep_t.prototype.ref = 0;

            /**
             * Creates a new resolve_ip_rep_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.resolve_ip_rep_t
             * @static
             * @param {maxwell.protocol.Iresolve_ip_rep_t=} [properties] Properties to set
             * @returns {maxwell.protocol.resolve_ip_rep_t} resolve_ip_rep_t instance
             */
            resolve_ip_rep_t.create = function create(properties) {
                return new resolve_ip_rep_t(properties);
            };

            /**
             * Encodes the specified resolve_ip_rep_t message. Does not implicitly {@link maxwell.protocol.resolve_ip_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.resolve_ip_rep_t
             * @static
             * @param {maxwell.protocol.Iresolve_ip_rep_t} message resolve_ip_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            resolve_ip_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a resolve_ip_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.resolve_ip_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.resolve_ip_rep_t} resolve_ip_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            resolve_ip_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_ip_rep_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ip = reader.string();
                        break;
                    case 15:
                        message.ref = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return resolve_ip_rep_t;
        })();

        protocol.msg_t = (function() {

            /**
             * Properties of a msg_t.
             * @memberof maxwell.protocol
             * @interface Imsg_t
             * @property {number|Long|null} [offset] msg_t offset
             * @property {Uint8Array|null} [value] msg_t value
             * @property {number|Long|null} [timestamp] msg_t timestamp
             */

            /**
             * Constructs a new msg_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a msg_t.
             * @implements Imsg_t
             * @constructor
             * @param {maxwell.protocol.Imsg_t=} [properties] Properties to set
             */
            function msg_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * msg_t offset.
             * @member {number|Long} offset
             * @memberof maxwell.protocol.msg_t
             * @instance
             */
            msg_t.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * msg_t value.
             * @member {Uint8Array} value
             * @memberof maxwell.protocol.msg_t
             * @instance
             */
            msg_t.prototype.value = $util.newBuffer([]);

            /**
             * msg_t timestamp.
             * @member {number|Long} timestamp
             * @memberof maxwell.protocol.msg_t
             * @instance
             */
            msg_t.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new msg_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.msg_t
             * @static
             * @param {maxwell.protocol.Imsg_t=} [properties] Properties to set
             * @returns {maxwell.protocol.msg_t} msg_t instance
             */
            msg_t.create = function create(properties) {
                return new msg_t(properties);
            };

            /**
             * Encodes the specified msg_t message. Does not implicitly {@link maxwell.protocol.msg_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.msg_t
             * @static
             * @param {maxwell.protocol.Imsg_t} message msg_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            msg_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.offset);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestamp);
                return writer;
            };

            /**
             * Decodes a msg_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.msg_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.msg_t} msg_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            msg_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.msg_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.offset = reader.uint64();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    case 3:
                        message.timestamp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return msg_t;
        })();

        protocol.source_t = (function() {

            /**
             * Properties of a source_t.
             * @memberof maxwell.protocol
             * @interface Isource_t
             * @property {string|null} [agent] source_t agent
             * @property {string|null} [endpoint] source_t endpoint
             */

            /**
             * Constructs a new source_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a source_t.
             * @implements Isource_t
             * @constructor
             * @param {maxwell.protocol.Isource_t=} [properties] Properties to set
             */
            function source_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * source_t agent.
             * @member {string} agent
             * @memberof maxwell.protocol.source_t
             * @instance
             */
            source_t.prototype.agent = "";

            /**
             * source_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.source_t
             * @instance
             */
            source_t.prototype.endpoint = "";

            /**
             * Creates a new source_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.source_t
             * @static
             * @param {maxwell.protocol.Isource_t=} [properties] Properties to set
             * @returns {maxwell.protocol.source_t} source_t instance
             */
            source_t.create = function create(properties) {
                return new source_t(properties);
            };

            /**
             * Encodes the specified source_t message. Does not implicitly {@link maxwell.protocol.source_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.source_t
             * @static
             * @param {maxwell.protocol.Isource_t} message source_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            source_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.agent != null && Object.hasOwnProperty.call(message, "agent"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.agent);
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.endpoint);
                return writer;
            };

            /**
             * Decodes a source_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.source_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.source_t} source_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            source_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.source_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.agent = reader.string();
                        break;
                    case 2:
                        message.endpoint = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return source_t;
        })();

        protocol.trace_t = (function() {

            /**
             * Properties of a trace_t.
             * @memberof maxwell.protocol
             * @interface Itrace_t
             * @property {number|null} [ref] trace_t ref
             * @property {number|null} [handlerId] trace_t handlerId
             * @property {Uint8Array|null} [nodeId] trace_t nodeId
             */

            /**
             * Constructs a new trace_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a trace_t.
             * @implements Itrace_t
             * @constructor
             * @param {maxwell.protocol.Itrace_t=} [properties] Properties to set
             */
            function trace_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * trace_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.trace_t
             * @instance
             */
            trace_t.prototype.ref = 0;

            /**
             * trace_t handlerId.
             * @member {number} handlerId
             * @memberof maxwell.protocol.trace_t
             * @instance
             */
            trace_t.prototype.handlerId = 0;

            /**
             * trace_t nodeId.
             * @member {Uint8Array} nodeId
             * @memberof maxwell.protocol.trace_t
             * @instance
             */
            trace_t.prototype.nodeId = $util.newBuffer([]);

            /**
             * Creates a new trace_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.trace_t
             * @static
             * @param {maxwell.protocol.Itrace_t=} [properties] Properties to set
             * @returns {maxwell.protocol.trace_t} trace_t instance
             */
            trace_t.create = function create(properties) {
                return new trace_t(properties);
            };

            /**
             * Encodes the specified trace_t message. Does not implicitly {@link maxwell.protocol.trace_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.trace_t
             * @static
             * @param {maxwell.protocol.Itrace_t} message trace_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            trace_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ref);
                if (message.handlerId != null && Object.hasOwnProperty.call(message, "handlerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.handlerId);
                if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nodeId);
                return writer;
            };

            /**
             * Decodes a trace_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.trace_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.trace_t} trace_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            trace_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.trace_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ref = reader.uint32();
                        break;
                    case 2:
                        message.handlerId = reader.uint32();
                        break;
                    case 3:
                        message.nodeId = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return trace_t;
        })();

        protocol.route_group_t = (function() {

            /**
             * Properties of a route_group_t.
             * @memberof maxwell.protocol
             * @interface Iroute_group_t
             * @property {string|null} [type] route_group_t type
             * @property {Array.<string>|null} [endpoints] route_group_t endpoints
             */

            /**
             * Constructs a new route_group_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a route_group_t.
             * @implements Iroute_group_t
             * @constructor
             * @param {maxwell.protocol.Iroute_group_t=} [properties] Properties to set
             */
            function route_group_t(properties) {
                this.endpoints = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * route_group_t type.
             * @member {string} type
             * @memberof maxwell.protocol.route_group_t
             * @instance
             */
            route_group_t.prototype.type = "";

            /**
             * route_group_t endpoints.
             * @member {Array.<string>} endpoints
             * @memberof maxwell.protocol.route_group_t
             * @instance
             */
            route_group_t.prototype.endpoints = $util.emptyArray;

            /**
             * Creates a new route_group_t instance using the specified properties.
             * @function create
             * @memberof maxwell.protocol.route_group_t
             * @static
             * @param {maxwell.protocol.Iroute_group_t=} [properties] Properties to set
             * @returns {maxwell.protocol.route_group_t} route_group_t instance
             */
            route_group_t.create = function create(properties) {
                return new route_group_t(properties);
            };

            /**
             * Encodes the specified route_group_t message. Does not implicitly {@link maxwell.protocol.route_group_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.route_group_t
             * @static
             * @param {maxwell.protocol.Iroute_group_t} message route_group_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            route_group_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.endpoints != null && message.endpoints.length)
                    for (let i = 0; i < message.endpoints.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.endpoints[i]);
                return writer;
            };

            /**
             * Decodes a route_group_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.route_group_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.route_group_t} route_group_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            route_group_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.route_group_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 2:
                        if (!(message.endpoints && message.endpoints.length))
                            message.endpoints = [];
                        message.endpoints.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return route_group_t;
        })();

        return protocol;
    })();

    return maxwell;
})();

export { $root as default };
