/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.maxwell = (function() {

    /**
     * Namespace maxwell.
     * @exports maxwell
     * @namespace
     */
    var maxwell = {};

    maxwell.protocol = (function() {

        /**
         * Namespace protocol.
         * @memberof maxwell
         * @namespace
         */
        var protocol = {};

        /**
         * msg_type_t enum.
         * @name maxwell.protocol.msg_type_t
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PING_REQ=1 PING_REQ value
         * @property {number} PING_REP=2 PING_REP value
         * @property {number} OK_REP=29 OK_REP value
         * @property {number} ERROR_REP=30 ERROR_REP value
         * @property {number} OK2_REP=31 OK2_REP value
         * @property {number} ERROR2_REP=32 ERROR2_REP value
         * @property {number} PUSH_REQ=33 PUSH_REQ value
         * @property {number} PUSH_REP=34 PUSH_REP value
         * @property {number} PULL_REQ=35 PULL_REQ value
         * @property {number} PULL_REP=36 PULL_REP value
         * @property {number} REQ_REQ=39 REQ_REQ value
         * @property {number} REQ_REP=40 REQ_REP value
         * @property {number} AUTH_REQ=41 AUTH_REQ value
         * @property {number} AUTH_REP=42 AUTH_REP value
         * @property {number} REGISTER_FRONTEND_REQ=65 REGISTER_FRONTEND_REQ value
         * @property {number} REGISTER_FRONTEND_REP=66 REGISTER_FRONTEND_REP value
         * @property {number} REGISTER_BACKEND_REQ=67 REGISTER_BACKEND_REQ value
         * @property {number} REGISTER_BACKEND_REP=68 REGISTER_BACKEND_REP value
         * @property {number} REGISTER_SERVICE_REQ=69 REGISTER_SERVICE_REQ value
         * @property {number} REGISTER_SERVICE_REP=70 REGISTER_SERVICE_REP value
         * @property {number} SET_ROUTES_REQ=71 SET_ROUTES_REQ value
         * @property {number} SET_ROUTES_REP=72 SET_ROUTES_REP value
         * @property {number} GET_ROUTES_REQ=75 GET_ROUTES_REQ value
         * @property {number} GET_ROUTES_REP=76 GET_ROUTES_REP value
         * @property {number} GET_TOPIC_DIST_CHECKSUM_REQ=77 GET_TOPIC_DIST_CHECKSUM_REQ value
         * @property {number} GET_TOPIC_DIST_CHECKSUM_REP=78 GET_TOPIC_DIST_CHECKSUM_REP value
         * @property {number} GET_ROUTE_DIST_CHECKSUM_REQ=79 GET_ROUTE_DIST_CHECKSUM_REQ value
         * @property {number} GET_ROUTE_DIST_CHECKSUM_REP=80 GET_ROUTE_DIST_CHECKSUM_REP value
         * @property {number} PICK_FRONTEND_REQ=81 PICK_FRONTEND_REQ value
         * @property {number} PICK_FRONTEND_REP=82 PICK_FRONTEND_REP value
         * @property {number} PICK_FRONTENDS_REQ=83 PICK_FRONTENDS_REQ value
         * @property {number} PICK_FRONTENDS_REP=84 PICK_FRONTENDS_REP value
         * @property {number} LOCATE_TOPIC_REQ=85 LOCATE_TOPIC_REQ value
         * @property {number} LOCATE_TOPIC_REP=86 LOCATE_TOPIC_REP value
         * @property {number} RESOLVE_IP_REQ=121 RESOLVE_IP_REQ value
         * @property {number} RESOLVE_IP_REP=122 RESOLVE_IP_REP value
         */
        protocol.msg_type_t = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PING_REQ"] = 1;
            values[valuesById[2] = "PING_REP"] = 2;
            values[valuesById[29] = "OK_REP"] = 29;
            values[valuesById[30] = "ERROR_REP"] = 30;
            values[valuesById[31] = "OK2_REP"] = 31;
            values[valuesById[32] = "ERROR2_REP"] = 32;
            values[valuesById[33] = "PUSH_REQ"] = 33;
            values[valuesById[34] = "PUSH_REP"] = 34;
            values[valuesById[35] = "PULL_REQ"] = 35;
            values[valuesById[36] = "PULL_REP"] = 36;
            values[valuesById[39] = "REQ_REQ"] = 39;
            values[valuesById[40] = "REQ_REP"] = 40;
            values[valuesById[41] = "AUTH_REQ"] = 41;
            values[valuesById[42] = "AUTH_REP"] = 42;
            values[valuesById[65] = "REGISTER_FRONTEND_REQ"] = 65;
            values[valuesById[66] = "REGISTER_FRONTEND_REP"] = 66;
            values[valuesById[67] = "REGISTER_BACKEND_REQ"] = 67;
            values[valuesById[68] = "REGISTER_BACKEND_REP"] = 68;
            values[valuesById[69] = "REGISTER_SERVICE_REQ"] = 69;
            values[valuesById[70] = "REGISTER_SERVICE_REP"] = 70;
            values[valuesById[71] = "SET_ROUTES_REQ"] = 71;
            values[valuesById[72] = "SET_ROUTES_REP"] = 72;
            values[valuesById[75] = "GET_ROUTES_REQ"] = 75;
            values[valuesById[76] = "GET_ROUTES_REP"] = 76;
            values[valuesById[77] = "GET_TOPIC_DIST_CHECKSUM_REQ"] = 77;
            values[valuesById[78] = "GET_TOPIC_DIST_CHECKSUM_REP"] = 78;
            values[valuesById[79] = "GET_ROUTE_DIST_CHECKSUM_REQ"] = 79;
            values[valuesById[80] = "GET_ROUTE_DIST_CHECKSUM_REP"] = 80;
            values[valuesById[81] = "PICK_FRONTEND_REQ"] = 81;
            values[valuesById[82] = "PICK_FRONTEND_REP"] = 82;
            values[valuesById[83] = "PICK_FRONTENDS_REQ"] = 83;
            values[valuesById[84] = "PICK_FRONTENDS_REP"] = 84;
            values[valuesById[85] = "LOCATE_TOPIC_REQ"] = 85;
            values[valuesById[86] = "LOCATE_TOPIC_REP"] = 86;
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ping_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for ping_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.ping_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ping_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.ping_req_t";
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ping_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for ping_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.ping_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ping_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.ping_rep_t";
            };

            return ping_rep_t;
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ok_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for ok_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.ok_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ok_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.ok_rep_t";
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.error_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.int32();
                            break;
                        }
                    case 2: {
                            message.desc = reader.string();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for error_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.error_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            error_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.error_rep_t";
            };

            return error_rep_t;
        })();

        protocol.ok2_rep_t = (function() {

            /**
             * Properties of an ok2_rep_t.
             * @memberof maxwell.protocol
             * @interface Iok2_rep_t
             * @property {number|null} [conn0Ref] ok2_rep_t conn0Ref
             * @property {number|null} [conn1Ref] ok2_rep_t conn1Ref
             * @property {number|null} [ref] ok2_rep_t ref
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
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ok2_rep_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.ok2_rep_t
             * @instance
             */
            ok2_rep_t.prototype.conn0Ref = 0;

            /**
             * ok2_rep_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.ok2_rep_t
             * @instance
             */
            ok2_rep_t.prototype.conn1Ref = 0;

            /**
             * ok2_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.ok2_rep_t
             * @instance
             */
            ok2_rep_t.prototype.ref = 0;

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
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.ok2_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for ok2_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.ok2_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ok2_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.ok2_rep_t";
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
             * @property {number|null} [conn0Ref] error2_rep_t conn0Ref
             * @property {number|null} [conn1Ref] error2_rep_t conn1Ref
             * @property {number|null} [ref] error2_rep_t ref
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
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
             * error2_rep_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.error2_rep_t
             * @instance
             */
            error2_rep_t.prototype.conn0Ref = 0;

            /**
             * error2_rep_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.error2_rep_t
             * @instance
             */
            error2_rep_t.prototype.conn1Ref = 0;

            /**
             * error2_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.error2_rep_t
             * @instance
             */
            error2_rep_t.prototype.ref = 0;

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
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.error2_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.int32();
                            break;
                        }
                    case 2: {
                            message.desc = reader.string();
                            break;
                        }
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for error2_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.error2_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            error2_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.error2_rep_t";
            };

            return error2_rep_t;
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.push_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.topic = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for push_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.push_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            push_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.push_req_t";
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.push_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for push_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.push_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            push_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.push_rep_t";
            };

            return push_rep_t;
        })();

        protocol.pull_req_t = (function() {

            /**
             * Properties of a pull_req_t.
             * @memberof maxwell.protocol
             * @interface Ipull_req_t
             * @property {string|null} [topic] pull_req_t topic
             * @property {number|null} [offset] pull_req_t offset
             * @property {number|null} [limit] pull_req_t limit
             * @property {number|null} [conn0Ref] pull_req_t conn0Ref
             * @property {number|null} [conn1Ref] pull_req_t conn1Ref
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
             * @member {number} offset
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
             * pull_req_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.conn0Ref = 0;

            /**
             * pull_req_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.conn1Ref = 0;

            /**
             * pull_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pull_req_t
             * @instance
             */
            pull_req_t.prototype.ref = 0;

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
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pull_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.topic = reader.string();
                            break;
                        }
                    case 2: {
                            message.offset = reader.int64();
                            break;
                        }
                    case 3: {
                            message.limit = reader.uint32();
                            break;
                        }
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for pull_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.pull_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            pull_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.pull_req_t";
            };

            return pull_req_t;
        })();

        protocol.pull_rep_t = (function() {

            /**
             * Properties of a pull_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipull_rep_t
             * @property {Array.<maxwell.protocol.Imsg_t>|null} [msgs] pull_rep_t msgs
             * @property {number|null} [conn0Ref] pull_rep_t conn0Ref
             * @property {number|null} [conn1Ref] pull_rep_t conn1Ref
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
             * pull_rep_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.pull_rep_t
             * @instance
             */
            pull_rep_t.prototype.conn0Ref = 0;

            /**
             * pull_rep_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.pull_rep_t
             * @instance
             */
            pull_rep_t.prototype.conn1Ref = 0;

            /**
             * pull_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pull_rep_t
             * @instance
             */
            pull_rep_t.prototype.ref = 0;

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
                    for (var i = 0; i < message.msgs.length; ++i)
                        $root.maxwell.protocol.msg_t.encode(message.msgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pull_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.msgs && message.msgs.length))
                                message.msgs = [];
                            message.msgs.push($root.maxwell.protocol.msg_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for pull_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.pull_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            pull_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.pull_rep_t";
            };

            return pull_rep_t;
        })();

        protocol.req_req_t = (function() {

            /**
             * Properties of a req_req_t.
             * @memberof maxwell.protocol
             * @interface Ireq_req_t
             * @property {string|null} [path] req_req_t path
             * @property {string|null} [payload] req_req_t payload
             * @property {maxwell.protocol.Iheader_t|null} [header] req_req_t header
             * @property {number|null} [conn0Ref] req_req_t conn0Ref
             * @property {number|null} [conn1Ref] req_req_t conn1Ref
             * @property {number|null} [ref] req_req_t ref
             */

            /**
             * Constructs a new req_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a req_req_t.
             * @implements Ireq_req_t
             * @constructor
             * @param {maxwell.protocol.Ireq_req_t=} [properties] Properties to set
             */
            function req_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * req_req_t path.
             * @member {string} path
             * @memberof maxwell.protocol.req_req_t
             * @instance
             */
            req_req_t.prototype.path = "";

            /**
             * req_req_t payload.
             * @member {string} payload
             * @memberof maxwell.protocol.req_req_t
             * @instance
             */
            req_req_t.prototype.payload = "";

            /**
             * req_req_t header.
             * @member {maxwell.protocol.Iheader_t|null|undefined} header
             * @memberof maxwell.protocol.req_req_t
             * @instance
             */
            req_req_t.prototype.header = null;

            /**
             * req_req_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.req_req_t
             * @instance
             */
            req_req_t.prototype.conn0Ref = 0;

            /**
             * req_req_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.req_req_t
             * @instance
             */
            req_req_t.prototype.conn1Ref = 0;

            /**
             * req_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.req_req_t
             * @instance
             */
            req_req_t.prototype.ref = 0;

            /**
             * Encodes the specified req_req_t message. Does not implicitly {@link maxwell.protocol.req_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.req_req_t
             * @static
             * @param {maxwell.protocol.Ireq_req_t} message req_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            req_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.payload);
                if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                    $root.maxwell.protocol.header_t.encode(message.header, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a req_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.req_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.req_req_t} req_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            req_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.req_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.path = reader.string();
                            break;
                        }
                    case 2: {
                            message.payload = reader.string();
                            break;
                        }
                    case 12: {
                            message.header = $root.maxwell.protocol.header_t.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for req_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.req_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            req_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.req_req_t";
            };

            return req_req_t;
        })();

        protocol.req_rep_t = (function() {

            /**
             * Properties of a req_rep_t.
             * @memberof maxwell.protocol
             * @interface Ireq_rep_t
             * @property {string|null} [payload] req_rep_t payload
             * @property {number|null} [conn0Ref] req_rep_t conn0Ref
             * @property {number|null} [conn1Ref] req_rep_t conn1Ref
             * @property {number|null} [ref] req_rep_t ref
             */

            /**
             * Constructs a new req_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a req_rep_t.
             * @implements Ireq_rep_t
             * @constructor
             * @param {maxwell.protocol.Ireq_rep_t=} [properties] Properties to set
             */
            function req_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * req_rep_t payload.
             * @member {string} payload
             * @memberof maxwell.protocol.req_rep_t
             * @instance
             */
            req_rep_t.prototype.payload = "";

            /**
             * req_rep_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.req_rep_t
             * @instance
             */
            req_rep_t.prototype.conn0Ref = 0;

            /**
             * req_rep_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.req_rep_t
             * @instance
             */
            req_rep_t.prototype.conn1Ref = 0;

            /**
             * req_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.req_rep_t
             * @instance
             */
            req_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified req_rep_t message. Does not implicitly {@link maxwell.protocol.req_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.req_rep_t
             * @static
             * @param {maxwell.protocol.Ireq_rep_t} message req_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            req_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.payload);
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a req_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.req_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.req_rep_t} req_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            req_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.req_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.payload = reader.string();
                            break;
                        }
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for req_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.req_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            req_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.req_rep_t";
            };

            return req_rep_t;
        })();

        protocol.auth_req_t = (function() {

            /**
             * Properties of an auth_req_t.
             * @memberof maxwell.protocol
             * @interface Iauth_req_t
             * @property {string|null} [token] auth_req_t token
             * @property {number|null} [conn0Ref] auth_req_t conn0Ref
             * @property {number|null} [conn1Ref] auth_req_t conn1Ref
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
             * auth_req_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.auth_req_t
             * @instance
             */
            auth_req_t.prototype.conn0Ref = 0;

            /**
             * auth_req_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.auth_req_t
             * @instance
             */
            auth_req_t.prototype.conn1Ref = 0;

            /**
             * auth_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.auth_req_t
             * @instance
             */
            auth_req_t.prototype.ref = 0;

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
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.auth_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.token = reader.string();
                            break;
                        }
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for auth_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.auth_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            auth_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.auth_req_t";
            };

            return auth_req_t;
        })();

        protocol.auth_rep_t = (function() {

            /**
             * Properties of an auth_rep_t.
             * @memberof maxwell.protocol
             * @interface Iauth_rep_t
             * @property {number|null} [conn0Ref] auth_rep_t conn0Ref
             * @property {number|null} [conn1Ref] auth_rep_t conn1Ref
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * auth_rep_t conn0Ref.
             * @member {number} conn0Ref
             * @memberof maxwell.protocol.auth_rep_t
             * @instance
             */
            auth_rep_t.prototype.conn0Ref = 0;

            /**
             * auth_rep_t conn1Ref.
             * @member {number} conn1Ref
             * @memberof maxwell.protocol.auth_rep_t
             * @instance
             */
            auth_rep_t.prototype.conn1Ref = 0;

            /**
             * auth_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.auth_rep_t
             * @instance
             */
            auth_rep_t.prototype.ref = 0;

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
                if (message.conn0Ref != null && Object.hasOwnProperty.call(message, "conn0Ref"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.conn0Ref);
                if (message.conn1Ref != null && Object.hasOwnProperty.call(message, "conn1Ref"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.conn1Ref);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.auth_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 13: {
                            message.conn0Ref = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.conn1Ref = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for auth_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.auth_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            auth_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.auth_rep_t";
            };

            return auth_rep_t;
        })();

        protocol.register_frontend_req_t = (function() {

            /**
             * Properties of a register_frontend_req_t.
             * @memberof maxwell.protocol
             * @interface Iregister_frontend_req_t
             * @property {string|null} [id] register_frontend_req_t id
             * @property {number|null} [httpPort] register_frontend_req_t httpPort
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_frontend_req_t id.
             * @member {string} id
             * @memberof maxwell.protocol.register_frontend_req_t
             * @instance
             */
            register_frontend_req_t.prototype.id = "";

            /**
             * register_frontend_req_t httpPort.
             * @member {number} httpPort
             * @memberof maxwell.protocol.register_frontend_req_t
             * @instance
             */
            register_frontend_req_t.prototype.httpPort = 0;

            /**
             * register_frontend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_frontend_req_t
             * @instance
             */
            register_frontend_req_t.prototype.ref = 0;

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
                if (message.httpPort != null && Object.hasOwnProperty.call(message, "httpPort"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.httpPort);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_frontend_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.id = reader.string();
                            break;
                        }
                    case 1: {
                            message.httpPort = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for register_frontend_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.register_frontend_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            register_frontend_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.register_frontend_req_t";
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_frontend_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for register_frontend_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.register_frontend_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            register_frontend_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.register_frontend_rep_t";
            };

            return register_frontend_rep_t;
        })();

        protocol.register_backend_req_t = (function() {

            /**
             * Properties of a register_backend_req_t.
             * @memberof maxwell.protocol
             * @interface Iregister_backend_req_t
             * @property {string|null} [id] register_backend_req_t id
             * @property {number|null} [httpPort] register_backend_req_t httpPort
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_backend_req_t id.
             * @member {string} id
             * @memberof maxwell.protocol.register_backend_req_t
             * @instance
             */
            register_backend_req_t.prototype.id = "";

            /**
             * register_backend_req_t httpPort.
             * @member {number} httpPort
             * @memberof maxwell.protocol.register_backend_req_t
             * @instance
             */
            register_backend_req_t.prototype.httpPort = 0;

            /**
             * register_backend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_backend_req_t
             * @instance
             */
            register_backend_req_t.prototype.ref = 0;

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
                if (message.httpPort != null && Object.hasOwnProperty.call(message, "httpPort"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.httpPort);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_backend_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.id = reader.string();
                            break;
                        }
                    case 1: {
                            message.httpPort = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for register_backend_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.register_backend_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            register_backend_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.register_backend_req_t";
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_backend_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for register_backend_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.register_backend_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            register_backend_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.register_backend_rep_t";
            };

            return register_backend_rep_t;
        })();

        protocol.register_service_req_t = (function() {

            /**
             * Properties of a register_service_req_t.
             * @memberof maxwell.protocol
             * @interface Iregister_service_req_t
             * @property {string|null} [id] register_service_req_t id
             * @property {number|null} [httpPort] register_service_req_t httpPort
             * @property {number|null} [ref] register_service_req_t ref
             */

            /**
             * Constructs a new register_service_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a register_service_req_t.
             * @implements Iregister_service_req_t
             * @constructor
             * @param {maxwell.protocol.Iregister_service_req_t=} [properties] Properties to set
             */
            function register_service_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_service_req_t id.
             * @member {string} id
             * @memberof maxwell.protocol.register_service_req_t
             * @instance
             */
            register_service_req_t.prototype.id = "";

            /**
             * register_service_req_t httpPort.
             * @member {number} httpPort
             * @memberof maxwell.protocol.register_service_req_t
             * @instance
             */
            register_service_req_t.prototype.httpPort = 0;

            /**
             * register_service_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_service_req_t
             * @instance
             */
            register_service_req_t.prototype.ref = 0;

            /**
             * Encodes the specified register_service_req_t message. Does not implicitly {@link maxwell.protocol.register_service_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.register_service_req_t
             * @static
             * @param {maxwell.protocol.Iregister_service_req_t} message register_service_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            register_service_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.httpPort != null && Object.hasOwnProperty.call(message, "httpPort"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.httpPort);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a register_service_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.register_service_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.register_service_req_t} register_service_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            register_service_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_service_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.id = reader.string();
                            break;
                        }
                    case 1: {
                            message.httpPort = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for register_service_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.register_service_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            register_service_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.register_service_req_t";
            };

            return register_service_req_t;
        })();

        protocol.register_service_rep_t = (function() {

            /**
             * Properties of a register_service_rep_t.
             * @memberof maxwell.protocol
             * @interface Iregister_service_rep_t
             * @property {number|null} [ref] register_service_rep_t ref
             */

            /**
             * Constructs a new register_service_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a register_service_rep_t.
             * @implements Iregister_service_rep_t
             * @constructor
             * @param {maxwell.protocol.Iregister_service_rep_t=} [properties] Properties to set
             */
            function register_service_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * register_service_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.register_service_rep_t
             * @instance
             */
            register_service_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified register_service_rep_t message. Does not implicitly {@link maxwell.protocol.register_service_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.register_service_rep_t
             * @static
             * @param {maxwell.protocol.Iregister_service_rep_t} message register_service_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            register_service_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a register_service_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.register_service_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.register_service_rep_t} register_service_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            register_service_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.register_service_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for register_service_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.register_service_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            register_service_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.register_service_rep_t";
            };

            return register_service_rep_t;
        })();

        protocol.set_routes_req_t = (function() {

            /**
             * Properties of a set_routes_req_t.
             * @memberof maxwell.protocol
             * @interface Iset_routes_req_t
             * @property {Array.<string>|null} [wsPaths] set_routes_req_t wsPaths
             * @property {Array.<string>|null} [getPaths] set_routes_req_t getPaths
             * @property {Array.<string>|null} [postPaths] set_routes_req_t postPaths
             * @property {Array.<string>|null} [putPaths] set_routes_req_t putPaths
             * @property {Array.<string>|null} [patchPaths] set_routes_req_t patchPaths
             * @property {Array.<string>|null} [deletePaths] set_routes_req_t deletePaths
             * @property {Array.<string>|null} [headPaths] set_routes_req_t headPaths
             * @property {Array.<string>|null} [optionsPaths] set_routes_req_t optionsPaths
             * @property {Array.<string>|null} [tracePaths] set_routes_req_t tracePaths
             * @property {number|null} [ref] set_routes_req_t ref
             */

            /**
             * Constructs a new set_routes_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a set_routes_req_t.
             * @implements Iset_routes_req_t
             * @constructor
             * @param {maxwell.protocol.Iset_routes_req_t=} [properties] Properties to set
             */
            function set_routes_req_t(properties) {
                this.wsPaths = [];
                this.getPaths = [];
                this.postPaths = [];
                this.putPaths = [];
                this.patchPaths = [];
                this.deletePaths = [];
                this.headPaths = [];
                this.optionsPaths = [];
                this.tracePaths = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * set_routes_req_t wsPaths.
             * @member {Array.<string>} wsPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.wsPaths = $util.emptyArray;

            /**
             * set_routes_req_t getPaths.
             * @member {Array.<string>} getPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.getPaths = $util.emptyArray;

            /**
             * set_routes_req_t postPaths.
             * @member {Array.<string>} postPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.postPaths = $util.emptyArray;

            /**
             * set_routes_req_t putPaths.
             * @member {Array.<string>} putPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.putPaths = $util.emptyArray;

            /**
             * set_routes_req_t patchPaths.
             * @member {Array.<string>} patchPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.patchPaths = $util.emptyArray;

            /**
             * set_routes_req_t deletePaths.
             * @member {Array.<string>} deletePaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.deletePaths = $util.emptyArray;

            /**
             * set_routes_req_t headPaths.
             * @member {Array.<string>} headPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.headPaths = $util.emptyArray;

            /**
             * set_routes_req_t optionsPaths.
             * @member {Array.<string>} optionsPaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.optionsPaths = $util.emptyArray;

            /**
             * set_routes_req_t tracePaths.
             * @member {Array.<string>} tracePaths
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.tracePaths = $util.emptyArray;

            /**
             * set_routes_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.set_routes_req_t
             * @instance
             */
            set_routes_req_t.prototype.ref = 0;

            /**
             * Encodes the specified set_routes_req_t message. Does not implicitly {@link maxwell.protocol.set_routes_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.set_routes_req_t
             * @static
             * @param {maxwell.protocol.Iset_routes_req_t} message set_routes_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            set_routes_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.wsPaths != null && message.wsPaths.length)
                    for (var i = 0; i < message.wsPaths.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.wsPaths[i]);
                if (message.getPaths != null && message.getPaths.length)
                    for (var i = 0; i < message.getPaths.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.getPaths[i]);
                if (message.postPaths != null && message.postPaths.length)
                    for (var i = 0; i < message.postPaths.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.postPaths[i]);
                if (message.putPaths != null && message.putPaths.length)
                    for (var i = 0; i < message.putPaths.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.putPaths[i]);
                if (message.patchPaths != null && message.patchPaths.length)
                    for (var i = 0; i < message.patchPaths.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.patchPaths[i]);
                if (message.deletePaths != null && message.deletePaths.length)
                    for (var i = 0; i < message.deletePaths.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.deletePaths[i]);
                if (message.headPaths != null && message.headPaths.length)
                    for (var i = 0; i < message.headPaths.length; ++i)
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.headPaths[i]);
                if (message.optionsPaths != null && message.optionsPaths.length)
                    for (var i = 0; i < message.optionsPaths.length; ++i)
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.optionsPaths[i]);
                if (message.tracePaths != null && message.tracePaths.length)
                    for (var i = 0; i < message.tracePaths.length; ++i)
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.tracePaths[i]);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a set_routes_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.set_routes_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.set_routes_req_t} set_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            set_routes_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.set_routes_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.wsPaths && message.wsPaths.length))
                                message.wsPaths = [];
                            message.wsPaths.push(reader.string());
                            break;
                        }
                    case 2: {
                            if (!(message.getPaths && message.getPaths.length))
                                message.getPaths = [];
                            message.getPaths.push(reader.string());
                            break;
                        }
                    case 3: {
                            if (!(message.postPaths && message.postPaths.length))
                                message.postPaths = [];
                            message.postPaths.push(reader.string());
                            break;
                        }
                    case 4: {
                            if (!(message.putPaths && message.putPaths.length))
                                message.putPaths = [];
                            message.putPaths.push(reader.string());
                            break;
                        }
                    case 5: {
                            if (!(message.patchPaths && message.patchPaths.length))
                                message.patchPaths = [];
                            message.patchPaths.push(reader.string());
                            break;
                        }
                    case 6: {
                            if (!(message.deletePaths && message.deletePaths.length))
                                message.deletePaths = [];
                            message.deletePaths.push(reader.string());
                            break;
                        }
                    case 7: {
                            if (!(message.headPaths && message.headPaths.length))
                                message.headPaths = [];
                            message.headPaths.push(reader.string());
                            break;
                        }
                    case 8: {
                            if (!(message.optionsPaths && message.optionsPaths.length))
                                message.optionsPaths = [];
                            message.optionsPaths.push(reader.string());
                            break;
                        }
                    case 9: {
                            if (!(message.tracePaths && message.tracePaths.length))
                                message.tracePaths = [];
                            message.tracePaths.push(reader.string());
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for set_routes_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.set_routes_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            set_routes_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.set_routes_req_t";
            };

            return set_routes_req_t;
        })();

        protocol.set_routes_rep_t = (function() {

            /**
             * Properties of a set_routes_rep_t.
             * @memberof maxwell.protocol
             * @interface Iset_routes_rep_t
             * @property {number|null} [ref] set_routes_rep_t ref
             */

            /**
             * Constructs a new set_routes_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a set_routes_rep_t.
             * @implements Iset_routes_rep_t
             * @constructor
             * @param {maxwell.protocol.Iset_routes_rep_t=} [properties] Properties to set
             */
            function set_routes_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * set_routes_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.set_routes_rep_t
             * @instance
             */
            set_routes_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified set_routes_rep_t message. Does not implicitly {@link maxwell.protocol.set_routes_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.set_routes_rep_t
             * @static
             * @param {maxwell.protocol.Iset_routes_rep_t} message set_routes_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            set_routes_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a set_routes_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.set_routes_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.set_routes_rep_t} set_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            set_routes_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.set_routes_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for set_routes_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.set_routes_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            set_routes_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.set_routes_rep_t";
            };

            return set_routes_rep_t;
        })();

        protocol.get_routes_req_t = (function() {

            /**
             * Properties of a get_routes_req_t.
             * @memberof maxwell.protocol
             * @interface Iget_routes_req_t
             * @property {number|null} [ref] get_routes_req_t ref
             */

            /**
             * Constructs a new get_routes_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a get_routes_req_t.
             * @implements Iget_routes_req_t
             * @constructor
             * @param {maxwell.protocol.Iget_routes_req_t=} [properties] Properties to set
             */
            function get_routes_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * get_routes_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.get_routes_req_t
             * @instance
             */
            get_routes_req_t.prototype.ref = 0;

            /**
             * Encodes the specified get_routes_req_t message. Does not implicitly {@link maxwell.protocol.get_routes_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.get_routes_req_t
             * @static
             * @param {maxwell.protocol.Iget_routes_req_t} message get_routes_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            get_routes_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a get_routes_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.get_routes_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.get_routes_req_t} get_routes_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            get_routes_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.get_routes_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for get_routes_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.get_routes_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            get_routes_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.get_routes_req_t";
            };

            return get_routes_req_t;
        })();

        protocol.get_routes_rep_t = (function() {

            /**
             * Properties of a get_routes_rep_t.
             * @memberof maxwell.protocol
             * @interface Iget_routes_rep_t
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [wsRouteGroups] get_routes_rep_t wsRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [getRouteGroups] get_routes_rep_t getRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [postRouteGroups] get_routes_rep_t postRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [putRouteGroups] get_routes_rep_t putRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [patchRouteGroups] get_routes_rep_t patchRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [deleteRouteGroups] get_routes_rep_t deleteRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [headRouteGroups] get_routes_rep_t headRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [optionsRouteGroups] get_routes_rep_t optionsRouteGroups
             * @property {Array.<maxwell.protocol.Iroute_group_t>|null} [traceRouteGroups] get_routes_rep_t traceRouteGroups
             * @property {number|null} [ref] get_routes_rep_t ref
             */

            /**
             * Constructs a new get_routes_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a get_routes_rep_t.
             * @implements Iget_routes_rep_t
             * @constructor
             * @param {maxwell.protocol.Iget_routes_rep_t=} [properties] Properties to set
             */
            function get_routes_rep_t(properties) {
                this.wsRouteGroups = [];
                this.getRouteGroups = [];
                this.postRouteGroups = [];
                this.putRouteGroups = [];
                this.patchRouteGroups = [];
                this.deleteRouteGroups = [];
                this.headRouteGroups = [];
                this.optionsRouteGroups = [];
                this.traceRouteGroups = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * get_routes_rep_t wsRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} wsRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.wsRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t getRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} getRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.getRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t postRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} postRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.postRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t putRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} putRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.putRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t patchRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} patchRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.patchRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t deleteRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} deleteRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.deleteRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t headRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} headRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.headRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t optionsRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} optionsRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.optionsRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t traceRouteGroups.
             * @member {Array.<maxwell.protocol.Iroute_group_t>} traceRouteGroups
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.traceRouteGroups = $util.emptyArray;

            /**
             * get_routes_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.get_routes_rep_t
             * @instance
             */
            get_routes_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified get_routes_rep_t message. Does not implicitly {@link maxwell.protocol.get_routes_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.get_routes_rep_t
             * @static
             * @param {maxwell.protocol.Iget_routes_rep_t} message get_routes_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            get_routes_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.wsRouteGroups != null && message.wsRouteGroups.length)
                    for (var i = 0; i < message.wsRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.wsRouteGroups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.getRouteGroups != null && message.getRouteGroups.length)
                    for (var i = 0; i < message.getRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.getRouteGroups[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.postRouteGroups != null && message.postRouteGroups.length)
                    for (var i = 0; i < message.postRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.postRouteGroups[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.putRouteGroups != null && message.putRouteGroups.length)
                    for (var i = 0; i < message.putRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.putRouteGroups[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.patchRouteGroups != null && message.patchRouteGroups.length)
                    for (var i = 0; i < message.patchRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.patchRouteGroups[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.deleteRouteGroups != null && message.deleteRouteGroups.length)
                    for (var i = 0; i < message.deleteRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.deleteRouteGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.headRouteGroups != null && message.headRouteGroups.length)
                    for (var i = 0; i < message.headRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.headRouteGroups[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.optionsRouteGroups != null && message.optionsRouteGroups.length)
                    for (var i = 0; i < message.optionsRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.optionsRouteGroups[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.traceRouteGroups != null && message.traceRouteGroups.length)
                    for (var i = 0; i < message.traceRouteGroups.length; ++i)
                        $root.maxwell.protocol.route_group_t.encode(message.traceRouteGroups[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a get_routes_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.get_routes_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.get_routes_rep_t} get_routes_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            get_routes_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.get_routes_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.wsRouteGroups && message.wsRouteGroups.length))
                                message.wsRouteGroups = [];
                            message.wsRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(message.getRouteGroups && message.getRouteGroups.length))
                                message.getRouteGroups = [];
                            message.getRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.postRouteGroups && message.postRouteGroups.length))
                                message.postRouteGroups = [];
                            message.postRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.putRouteGroups && message.putRouteGroups.length))
                                message.putRouteGroups = [];
                            message.putRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.patchRouteGroups && message.patchRouteGroups.length))
                                message.patchRouteGroups = [];
                            message.patchRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.deleteRouteGroups && message.deleteRouteGroups.length))
                                message.deleteRouteGroups = [];
                            message.deleteRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.headRouteGroups && message.headRouteGroups.length))
                                message.headRouteGroups = [];
                            message.headRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(message.optionsRouteGroups && message.optionsRouteGroups.length))
                                message.optionsRouteGroups = [];
                            message.optionsRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 9: {
                            if (!(message.traceRouteGroups && message.traceRouteGroups.length))
                                message.traceRouteGroups = [];
                            message.traceRouteGroups.push($root.maxwell.protocol.route_group_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for get_routes_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.get_routes_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            get_routes_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.get_routes_rep_t";
            };

            return get_routes_rep_t;
        })();

        protocol.get_topic_dist_checksum_req_t = (function() {

            /**
             * Properties of a get_topic_dist_checksum_req_t.
             * @memberof maxwell.protocol
             * @interface Iget_topic_dist_checksum_req_t
             * @property {number|null} [ref] get_topic_dist_checksum_req_t ref
             */

            /**
             * Constructs a new get_topic_dist_checksum_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a get_topic_dist_checksum_req_t.
             * @implements Iget_topic_dist_checksum_req_t
             * @constructor
             * @param {maxwell.protocol.Iget_topic_dist_checksum_req_t=} [properties] Properties to set
             */
            function get_topic_dist_checksum_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * get_topic_dist_checksum_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.get_topic_dist_checksum_req_t
             * @instance
             */
            get_topic_dist_checksum_req_t.prototype.ref = 0;

            /**
             * Encodes the specified get_topic_dist_checksum_req_t message. Does not implicitly {@link maxwell.protocol.get_topic_dist_checksum_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.get_topic_dist_checksum_req_t
             * @static
             * @param {maxwell.protocol.Iget_topic_dist_checksum_req_t} message get_topic_dist_checksum_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            get_topic_dist_checksum_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a get_topic_dist_checksum_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.get_topic_dist_checksum_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.get_topic_dist_checksum_req_t} get_topic_dist_checksum_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            get_topic_dist_checksum_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.get_topic_dist_checksum_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for get_topic_dist_checksum_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.get_topic_dist_checksum_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            get_topic_dist_checksum_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.get_topic_dist_checksum_req_t";
            };

            return get_topic_dist_checksum_req_t;
        })();

        protocol.get_topic_dist_checksum_rep_t = (function() {

            /**
             * Properties of a get_topic_dist_checksum_rep_t.
             * @memberof maxwell.protocol
             * @interface Iget_topic_dist_checksum_rep_t
             * @property {number|null} [checksum] get_topic_dist_checksum_rep_t checksum
             * @property {number|null} [ref] get_topic_dist_checksum_rep_t ref
             */

            /**
             * Constructs a new get_topic_dist_checksum_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a get_topic_dist_checksum_rep_t.
             * @implements Iget_topic_dist_checksum_rep_t
             * @constructor
             * @param {maxwell.protocol.Iget_topic_dist_checksum_rep_t=} [properties] Properties to set
             */
            function get_topic_dist_checksum_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * get_topic_dist_checksum_rep_t checksum.
             * @member {number} checksum
             * @memberof maxwell.protocol.get_topic_dist_checksum_rep_t
             * @instance
             */
            get_topic_dist_checksum_rep_t.prototype.checksum = 0;

            /**
             * get_topic_dist_checksum_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.get_topic_dist_checksum_rep_t
             * @instance
             */
            get_topic_dist_checksum_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified get_topic_dist_checksum_rep_t message. Does not implicitly {@link maxwell.protocol.get_topic_dist_checksum_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.get_topic_dist_checksum_rep_t
             * @static
             * @param {maxwell.protocol.Iget_topic_dist_checksum_rep_t} message get_topic_dist_checksum_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            get_topic_dist_checksum_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.checksum != null && Object.hasOwnProperty.call(message, "checksum"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.checksum);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a get_topic_dist_checksum_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.get_topic_dist_checksum_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.get_topic_dist_checksum_rep_t} get_topic_dist_checksum_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            get_topic_dist_checksum_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.get_topic_dist_checksum_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.checksum = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for get_topic_dist_checksum_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.get_topic_dist_checksum_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            get_topic_dist_checksum_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.get_topic_dist_checksum_rep_t";
            };

            return get_topic_dist_checksum_rep_t;
        })();

        protocol.get_route_dist_checksum_req_t = (function() {

            /**
             * Properties of a get_route_dist_checksum_req_t.
             * @memberof maxwell.protocol
             * @interface Iget_route_dist_checksum_req_t
             * @property {number|null} [ref] get_route_dist_checksum_req_t ref
             */

            /**
             * Constructs a new get_route_dist_checksum_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a get_route_dist_checksum_req_t.
             * @implements Iget_route_dist_checksum_req_t
             * @constructor
             * @param {maxwell.protocol.Iget_route_dist_checksum_req_t=} [properties] Properties to set
             */
            function get_route_dist_checksum_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * get_route_dist_checksum_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.get_route_dist_checksum_req_t
             * @instance
             */
            get_route_dist_checksum_req_t.prototype.ref = 0;

            /**
             * Encodes the specified get_route_dist_checksum_req_t message. Does not implicitly {@link maxwell.protocol.get_route_dist_checksum_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.get_route_dist_checksum_req_t
             * @static
             * @param {maxwell.protocol.Iget_route_dist_checksum_req_t} message get_route_dist_checksum_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            get_route_dist_checksum_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a get_route_dist_checksum_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.get_route_dist_checksum_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.get_route_dist_checksum_req_t} get_route_dist_checksum_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            get_route_dist_checksum_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.get_route_dist_checksum_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for get_route_dist_checksum_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.get_route_dist_checksum_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            get_route_dist_checksum_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.get_route_dist_checksum_req_t";
            };

            return get_route_dist_checksum_req_t;
        })();

        protocol.get_route_dist_checksum_rep_t = (function() {

            /**
             * Properties of a get_route_dist_checksum_rep_t.
             * @memberof maxwell.protocol
             * @interface Iget_route_dist_checksum_rep_t
             * @property {number|null} [checksum] get_route_dist_checksum_rep_t checksum
             * @property {number|null} [ref] get_route_dist_checksum_rep_t ref
             */

            /**
             * Constructs a new get_route_dist_checksum_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a get_route_dist_checksum_rep_t.
             * @implements Iget_route_dist_checksum_rep_t
             * @constructor
             * @param {maxwell.protocol.Iget_route_dist_checksum_rep_t=} [properties] Properties to set
             */
            function get_route_dist_checksum_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * get_route_dist_checksum_rep_t checksum.
             * @member {number} checksum
             * @memberof maxwell.protocol.get_route_dist_checksum_rep_t
             * @instance
             */
            get_route_dist_checksum_rep_t.prototype.checksum = 0;

            /**
             * get_route_dist_checksum_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.get_route_dist_checksum_rep_t
             * @instance
             */
            get_route_dist_checksum_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified get_route_dist_checksum_rep_t message. Does not implicitly {@link maxwell.protocol.get_route_dist_checksum_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.get_route_dist_checksum_rep_t
             * @static
             * @param {maxwell.protocol.Iget_route_dist_checksum_rep_t} message get_route_dist_checksum_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            get_route_dist_checksum_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.checksum != null && Object.hasOwnProperty.call(message, "checksum"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.checksum);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a get_route_dist_checksum_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.get_route_dist_checksum_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.get_route_dist_checksum_rep_t} get_route_dist_checksum_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            get_route_dist_checksum_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.get_route_dist_checksum_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.checksum = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for get_route_dist_checksum_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.get_route_dist_checksum_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            get_route_dist_checksum_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.get_route_dist_checksum_rep_t";
            };

            return get_route_dist_checksum_rep_t;
        })();

        protocol.pick_frontend_req_t = (function() {

            /**
             * Properties of a pick_frontend_req_t.
             * @memberof maxwell.protocol
             * @interface Ipick_frontend_req_t
             * @property {number|null} [ref] pick_frontend_req_t ref
             */

            /**
             * Constructs a new pick_frontend_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pick_frontend_req_t.
             * @implements Ipick_frontend_req_t
             * @constructor
             * @param {maxwell.protocol.Ipick_frontend_req_t=} [properties] Properties to set
             */
            function pick_frontend_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pick_frontend_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pick_frontend_req_t
             * @instance
             */
            pick_frontend_req_t.prototype.ref = 0;

            /**
             * Encodes the specified pick_frontend_req_t message. Does not implicitly {@link maxwell.protocol.pick_frontend_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pick_frontend_req_t
             * @static
             * @param {maxwell.protocol.Ipick_frontend_req_t} message pick_frontend_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pick_frontend_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pick_frontend_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pick_frontend_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pick_frontend_req_t} pick_frontend_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pick_frontend_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pick_frontend_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for pick_frontend_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.pick_frontend_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            pick_frontend_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.pick_frontend_req_t";
            };

            return pick_frontend_req_t;
        })();

        protocol.pick_frontend_rep_t = (function() {

            /**
             * Properties of a pick_frontend_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipick_frontend_rep_t
             * @property {string|null} [endpoint] pick_frontend_rep_t endpoint
             * @property {number|null} [ref] pick_frontend_rep_t ref
             */

            /**
             * Constructs a new pick_frontend_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pick_frontend_rep_t.
             * @implements Ipick_frontend_rep_t
             * @constructor
             * @param {maxwell.protocol.Ipick_frontend_rep_t=} [properties] Properties to set
             */
            function pick_frontend_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pick_frontend_rep_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.pick_frontend_rep_t
             * @instance
             */
            pick_frontend_rep_t.prototype.endpoint = "";

            /**
             * pick_frontend_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pick_frontend_rep_t
             * @instance
             */
            pick_frontend_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified pick_frontend_rep_t message. Does not implicitly {@link maxwell.protocol.pick_frontend_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pick_frontend_rep_t
             * @static
             * @param {maxwell.protocol.Ipick_frontend_rep_t} message pick_frontend_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pick_frontend_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pick_frontend_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pick_frontend_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pick_frontend_rep_t} pick_frontend_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pick_frontend_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pick_frontend_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.endpoint = reader.string();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for pick_frontend_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.pick_frontend_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            pick_frontend_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.pick_frontend_rep_t";
            };

            return pick_frontend_rep_t;
        })();

        protocol.pick_frontends_req_t = (function() {

            /**
             * Properties of a pick_frontends_req_t.
             * @memberof maxwell.protocol
             * @interface Ipick_frontends_req_t
             * @property {number|null} [ref] pick_frontends_req_t ref
             */

            /**
             * Constructs a new pick_frontends_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pick_frontends_req_t.
             * @implements Ipick_frontends_req_t
             * @constructor
             * @param {maxwell.protocol.Ipick_frontends_req_t=} [properties] Properties to set
             */
            function pick_frontends_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pick_frontends_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pick_frontends_req_t
             * @instance
             */
            pick_frontends_req_t.prototype.ref = 0;

            /**
             * Encodes the specified pick_frontends_req_t message. Does not implicitly {@link maxwell.protocol.pick_frontends_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pick_frontends_req_t
             * @static
             * @param {maxwell.protocol.Ipick_frontends_req_t} message pick_frontends_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pick_frontends_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pick_frontends_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pick_frontends_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pick_frontends_req_t} pick_frontends_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pick_frontends_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pick_frontends_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for pick_frontends_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.pick_frontends_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            pick_frontends_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.pick_frontends_req_t";
            };

            return pick_frontends_req_t;
        })();

        protocol.pick_frontends_rep_t = (function() {

            /**
             * Properties of a pick_frontends_rep_t.
             * @memberof maxwell.protocol
             * @interface Ipick_frontends_rep_t
             * @property {Array.<string>|null} [endpoints] pick_frontends_rep_t endpoints
             * @property {number|null} [ref] pick_frontends_rep_t ref
             */

            /**
             * Constructs a new pick_frontends_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a pick_frontends_rep_t.
             * @implements Ipick_frontends_rep_t
             * @constructor
             * @param {maxwell.protocol.Ipick_frontends_rep_t=} [properties] Properties to set
             */
            function pick_frontends_rep_t(properties) {
                this.endpoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * pick_frontends_rep_t endpoints.
             * @member {Array.<string>} endpoints
             * @memberof maxwell.protocol.pick_frontends_rep_t
             * @instance
             */
            pick_frontends_rep_t.prototype.endpoints = $util.emptyArray;

            /**
             * pick_frontends_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.pick_frontends_rep_t
             * @instance
             */
            pick_frontends_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified pick_frontends_rep_t message. Does not implicitly {@link maxwell.protocol.pick_frontends_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.pick_frontends_rep_t
             * @static
             * @param {maxwell.protocol.Ipick_frontends_rep_t} message pick_frontends_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            pick_frontends_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoints != null && message.endpoints.length)
                    for (var i = 0; i < message.endpoints.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoints[i]);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a pick_frontends_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.pick_frontends_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.pick_frontends_rep_t} pick_frontends_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            pick_frontends_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.pick_frontends_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.endpoints && message.endpoints.length))
                                message.endpoints = [];
                            message.endpoints.push(reader.string());
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for pick_frontends_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.pick_frontends_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            pick_frontends_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.pick_frontends_rep_t";
            };

            return pick_frontends_rep_t;
        })();

        protocol.locate_topic_req_t = (function() {

            /**
             * Properties of a locate_topic_req_t.
             * @memberof maxwell.protocol
             * @interface Ilocate_topic_req_t
             * @property {string|null} [topic] locate_topic_req_t topic
             * @property {number|null} [ref] locate_topic_req_t ref
             */

            /**
             * Constructs a new locate_topic_req_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a locate_topic_req_t.
             * @implements Ilocate_topic_req_t
             * @constructor
             * @param {maxwell.protocol.Ilocate_topic_req_t=} [properties] Properties to set
             */
            function locate_topic_req_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * locate_topic_req_t topic.
             * @member {string} topic
             * @memberof maxwell.protocol.locate_topic_req_t
             * @instance
             */
            locate_topic_req_t.prototype.topic = "";

            /**
             * locate_topic_req_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.locate_topic_req_t
             * @instance
             */
            locate_topic_req_t.prototype.ref = 0;

            /**
             * Encodes the specified locate_topic_req_t message. Does not implicitly {@link maxwell.protocol.locate_topic_req_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.locate_topic_req_t
             * @static
             * @param {maxwell.protocol.Ilocate_topic_req_t} message locate_topic_req_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            locate_topic_req_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a locate_topic_req_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.locate_topic_req_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.locate_topic_req_t} locate_topic_req_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            locate_topic_req_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.locate_topic_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.topic = reader.string();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for locate_topic_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.locate_topic_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            locate_topic_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.locate_topic_req_t";
            };

            return locate_topic_req_t;
        })();

        protocol.locate_topic_rep_t = (function() {

            /**
             * Properties of a locate_topic_rep_t.
             * @memberof maxwell.protocol
             * @interface Ilocate_topic_rep_t
             * @property {string|null} [endpoint] locate_topic_rep_t endpoint
             * @property {number|null} [ref] locate_topic_rep_t ref
             */

            /**
             * Constructs a new locate_topic_rep_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a locate_topic_rep_t.
             * @implements Ilocate_topic_rep_t
             * @constructor
             * @param {maxwell.protocol.Ilocate_topic_rep_t=} [properties] Properties to set
             */
            function locate_topic_rep_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * locate_topic_rep_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.locate_topic_rep_t
             * @instance
             */
            locate_topic_rep_t.prototype.endpoint = "";

            /**
             * locate_topic_rep_t ref.
             * @member {number} ref
             * @memberof maxwell.protocol.locate_topic_rep_t
             * @instance
             */
            locate_topic_rep_t.prototype.ref = 0;

            /**
             * Encodes the specified locate_topic_rep_t message. Does not implicitly {@link maxwell.protocol.locate_topic_rep_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.locate_topic_rep_t
             * @static
             * @param {maxwell.protocol.Ilocate_topic_rep_t} message locate_topic_rep_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            locate_topic_rep_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ref);
                return writer;
            };

            /**
             * Decodes a locate_topic_rep_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.locate_topic_rep_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.locate_topic_rep_t} locate_topic_rep_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            locate_topic_rep_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.locate_topic_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.endpoint = reader.string();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for locate_topic_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.locate_topic_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            locate_topic_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.locate_topic_rep_t";
            };

            return locate_topic_rep_t;
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_ip_req_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for resolve_ip_req_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.resolve_ip_req_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            resolve_ip_req_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.resolve_ip_req_t";
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.resolve_ip_rep_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ip = reader.string();
                            break;
                        }
                    case 15: {
                            message.ref = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for resolve_ip_rep_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.resolve_ip_rep_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            resolve_ip_rep_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.resolve_ip_rep_t";
            };

            return resolve_ip_rep_t;
        })();

        protocol.msg_t = (function() {

            /**
             * Properties of a msg_t.
             * @memberof maxwell.protocol
             * @interface Imsg_t
             * @property {number|null} [offset] msg_t offset
             * @property {Uint8Array|null} [value] msg_t value
             * @property {number|null} [timestamp] msg_t timestamp
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
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * msg_t offset.
             * @member {number} offset
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
             * @member {number} timestamp
             * @memberof maxwell.protocol.msg_t
             * @instance
             */
            msg_t.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.msg_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.offset = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for msg_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.msg_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            msg_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.msg_t";
            };

            return msg_t;
        })();

        protocol.header_t = (function() {

            /**
             * Properties of a header_t.
             * @memberof maxwell.protocol
             * @interface Iheader_t
             * @property {string|null} [agent] header_t agent
             * @property {string|null} [endpoint] header_t endpoint
             * @property {string|null} [token] header_t token
             */

            /**
             * Constructs a new header_t.
             * @memberof maxwell.protocol
             * @classdesc Represents a header_t.
             * @implements Iheader_t
             * @constructor
             * @param {maxwell.protocol.Iheader_t=} [properties] Properties to set
             */
            function header_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * header_t agent.
             * @member {string} agent
             * @memberof maxwell.protocol.header_t
             * @instance
             */
            header_t.prototype.agent = "";

            /**
             * header_t endpoint.
             * @member {string} endpoint
             * @memberof maxwell.protocol.header_t
             * @instance
             */
            header_t.prototype.endpoint = "";

            /**
             * header_t token.
             * @member {string} token
             * @memberof maxwell.protocol.header_t
             * @instance
             */
            header_t.prototype.token = "";

            /**
             * Encodes the specified header_t message. Does not implicitly {@link maxwell.protocol.header_t.verify|verify} messages.
             * @function encode
             * @memberof maxwell.protocol.header_t
             * @static
             * @param {maxwell.protocol.Iheader_t} message header_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            header_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.agent != null && Object.hasOwnProperty.call(message, "agent"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.agent);
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.endpoint);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                return writer;
            };

            /**
             * Decodes a header_t message from the specified reader or buffer.
             * @function decode
             * @memberof maxwell.protocol.header_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {maxwell.protocol.header_t} header_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            header_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.header_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.agent = reader.string();
                            break;
                        }
                    case 2: {
                            message.endpoint = reader.string();
                            break;
                        }
                    case 3: {
                            message.token = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for header_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.header_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            header_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.header_t";
            };

            return header_t;
        })();

        protocol.route_group_t = (function() {

            /**
             * Properties of a route_group_t.
             * @memberof maxwell.protocol
             * @interface Iroute_group_t
             * @property {string|null} [path] route_group_t path
             * @property {Array.<string>|null} [healthyEndpoints] route_group_t healthyEndpoints
             * @property {Array.<string>|null} [unhealthyEndpoints] route_group_t unhealthyEndpoints
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
                this.healthyEndpoints = [];
                this.unhealthyEndpoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * route_group_t path.
             * @member {string} path
             * @memberof maxwell.protocol.route_group_t
             * @instance
             */
            route_group_t.prototype.path = "";

            /**
             * route_group_t healthyEndpoints.
             * @member {Array.<string>} healthyEndpoints
             * @memberof maxwell.protocol.route_group_t
             * @instance
             */
            route_group_t.prototype.healthyEndpoints = $util.emptyArray;

            /**
             * route_group_t unhealthyEndpoints.
             * @member {Array.<string>} unhealthyEndpoints
             * @memberof maxwell.protocol.route_group_t
             * @instance
             */
            route_group_t.prototype.unhealthyEndpoints = $util.emptyArray;

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
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                if (message.healthyEndpoints != null && message.healthyEndpoints.length)
                    for (var i = 0; i < message.healthyEndpoints.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.healthyEndpoints[i]);
                if (message.unhealthyEndpoints != null && message.unhealthyEndpoints.length)
                    for (var i = 0; i < message.unhealthyEndpoints.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.unhealthyEndpoints[i]);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.maxwell.protocol.route_group_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.path = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.healthyEndpoints && message.healthyEndpoints.length))
                                message.healthyEndpoints = [];
                            message.healthyEndpoints.push(reader.string());
                            break;
                        }
                    case 3: {
                            if (!(message.unhealthyEndpoints && message.unhealthyEndpoints.length))
                                message.unhealthyEndpoints = [];
                            message.unhealthyEndpoints.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for route_group_t
             * @function getTypeUrl
             * @memberof maxwell.protocol.route_group_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            route_group_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/maxwell.protocol.route_group_t";
            };

            return route_group_t;
        })();

        /**
         * error_code_t enum.
         * @name maxwell.protocol.error_code_t
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} UNKNOWN_MSG=1 UNKNOWN_MSG value
         * @property {number} NOT_ALLOWED_TO_REGISTER_FRONTEND=100 NOT_ALLOWED_TO_REGISTER_FRONTEND value
         * @property {number} NOT_ALLOWED_TO_REGISTER_BACKEND=101 NOT_ALLOWED_TO_REGISTER_BACKEND value
         * @property {number} NOT_ALLOWED_TO_REGISTER_SERVICE=102 NOT_ALLOWED_TO_REGISTER_SERVICE value
         * @property {number} FAILED_TO_SET_ROUTES=103 FAILED_TO_SET_ROUTES value
         * @property {number} FAILED_TO_PICK_FRONTEND=104 FAILED_TO_PICK_FRONTEND value
         * @property {number} FAILED_TO_LOCATE_TOPIC=105 FAILED_TO_LOCATE_TOPIC value
         * @property {number} MASTER_ERROR=199 MASTER_ERROR value
         * @property {number} FAILED_TO_REQUEST_SERVICE=200 FAILED_TO_REQUEST_SERVICE value
         * @property {number} FAILED_TO_REQUEST_BACKEND=201 FAILED_TO_REQUEST_BACKEND value
         * @property {number} FRONTEND_ERROR=299 FRONTEND_ERROR value
         * @property {number} FAILED_TO_PUSH=300 FAILED_TO_PUSH value
         * @property {number} FAILED_TO_PULL=301 FAILED_TO_PULL value
         * @property {number} UNKNOWN_TOPIC=302 UNKNOWN_TOPIC value
         * @property {number} BACKEND_ERROR=399 BACKEND_ERROR value
         * @property {number} UNKNOWN_PATH=400 UNKNOWN_PATH value
         * @property {number} SERVICE_ERROR=499 SERVICE_ERROR value
         * @property {number} CLIENT_ERROR=599 CLIENT_ERROR value
         */
        protocol.error_code_t = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "UNKNOWN_MSG"] = 1;
            values[valuesById[100] = "NOT_ALLOWED_TO_REGISTER_FRONTEND"] = 100;
            values[valuesById[101] = "NOT_ALLOWED_TO_REGISTER_BACKEND"] = 101;
            values[valuesById[102] = "NOT_ALLOWED_TO_REGISTER_SERVICE"] = 102;
            values[valuesById[103] = "FAILED_TO_SET_ROUTES"] = 103;
            values[valuesById[104] = "FAILED_TO_PICK_FRONTEND"] = 104;
            values[valuesById[105] = "FAILED_TO_LOCATE_TOPIC"] = 105;
            values[valuesById[199] = "MASTER_ERROR"] = 199;
            values[valuesById[200] = "FAILED_TO_REQUEST_SERVICE"] = 200;
            values[valuesById[201] = "FAILED_TO_REQUEST_BACKEND"] = 201;
            values[valuesById[299] = "FRONTEND_ERROR"] = 299;
            values[valuesById[300] = "FAILED_TO_PUSH"] = 300;
            values[valuesById[301] = "FAILED_TO_PULL"] = 301;
            values[valuesById[302] = "UNKNOWN_TOPIC"] = 302;
            values[valuesById[399] = "BACKEND_ERROR"] = 399;
            values[valuesById[400] = "UNKNOWN_PATH"] = 400;
            values[valuesById[499] = "SERVICE_ERROR"] = 499;
            values[valuesById[599] = "CLIENT_ERROR"] = 599;
            return values;
        })();

        return protocol;
    })();

    return maxwell;
})();

module.exports = $root;
