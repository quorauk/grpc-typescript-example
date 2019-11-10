import { message } from "./proto/service_pb";
import * as grpc from "grpc";
import { greeterclient } from "./proto/service_grpc_pb";

function main() {
  const client = new greeterclient(
    "0.0.0.0:50051",
    grpc.credentials.createinsecure()
  );
  const request = new message();
  request.setmessage("max");
  client.greet(request, (error: grpc.serviceerror, value: message) => {
    if (error != null) {
        console.log(error);
        return
    }
    console.log(value.getmessage());
  });
}

main();
