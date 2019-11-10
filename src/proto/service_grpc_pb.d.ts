// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: service.proto

import * as service_pb from "./service_pb";
import * as grpc from "grpc";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  greet: grpc.MethodDefinition<service_pb.Message, service_pb.Message>;
}

export const GreeterService: IGreeterService;

export class GreeterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  greet(argument: service_pb.Message, callback: grpc.requestCallback<service_pb.Message>): grpc.ClientUnaryCall;
  greet(argument: service_pb.Message, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Message>): grpc.ClientUnaryCall;
  greet(argument: service_pb.Message, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.Message>): grpc.ClientUnaryCall;
}
