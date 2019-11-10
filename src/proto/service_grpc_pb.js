// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');

function serialize_Message(arg) {
  if (!(arg instanceof service_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return service_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  greet: {
    path: '/Greeter/greet',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.Message,
    responseType: service_pb.Message,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
