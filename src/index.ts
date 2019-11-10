import { Message } from "./proto/service_pb";
import * as grpc from "grpc";
import { GreeterService } from "./proto/service_grpc_pb";

function greet(
  call: grpc.ServerUnaryCall<Message>,
  callback: grpc.requestCallback<Message>
) {
  console.log(call.request);
  const resp = new Message();
  resp.setMessage(`hello ${call.request.getMessage()}`);
  callback(null, resp);
}

function main() {
  const server = new grpc.Server();
  server.addService(GreeterService, {
    greet: greet
  });
  const bindto = `0.0.0.0:50051`;
  server.bind(bindto, grpc.ServerCredentials.createInsecure());
  console.log(`STARTING SERVER ON ${bindto}`);
  server.start();
}

main();
