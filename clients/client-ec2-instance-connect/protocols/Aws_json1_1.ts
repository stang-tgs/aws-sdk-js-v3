import {
  SendSSHPublicKeyCommandInput,
  SendSSHPublicKeyCommandOutput
} from "../commands/SendSSHPublicKeyCommand";
import {
  AuthException,
  EC2InstanceNotFoundException,
  InvalidArgsException,
  SendSSHPublicKeyRequest,
  SendSSHPublicKeyResponse,
  ServiceException,
  ThrottlingException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1SendSSHPublicKeyCommand(
  input: SendSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEC2InstanceConnectService.SendSSHPublicKey";
  let body: any = {};
  const wrappedBody: any = {
    SendSSHPublicKeyRequest: serializeAws_json1_1SendSSHPublicKeyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SendSSHPublicKey",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1SendSSHPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SendSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendSSHPublicKeyResponse(
    data.SendSSHPublicKeyResponse,
    context
  );
  const response: SendSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendSSHPublicKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SendSSHPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthException":
    case "com.amazon.aws.sshaccessproxyservice#AuthException":
      response = await deserializeAws_json1_1AuthExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "EC2InstanceNotFoundException":
    case "com.amazon.aws.sshaccessproxyservice#EC2InstanceNotFoundException":
      response = await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgsException":
    case "com.amazon.aws.sshaccessproxyservice#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.aws.sshaccessproxyservice#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.aws.sshaccessproxyservice#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.aws.sshaccessproxyservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AuthExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AuthException> => {
  const deserialized: any = deserializeAws_json1_1AuthException(
    output.body,
    context
  );
  const contents: AuthException = {
    __type: "AuthException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<EC2InstanceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1EC2InstanceNotFoundException(
    output.body,
    context
  );
  const contents: EC2InstanceNotFoundException = {
    __type: "EC2InstanceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(
    output.body,
    context
  );
  const contents: InvalidArgsException = {
    __type: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const deserialized: any = deserializeAws_json1_1ServiceException(
    output.body,
    context
  );
  const contents: ServiceException = {
    __type: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    output.body,
    context
  );
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1SendSSHPublicKeyRequest = (
  input: SendSSHPublicKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.InstanceOSUser !== undefined) {
    bodyParams["InstanceOSUser"] = input.InstanceOSUser;
  }
  if (input.SSHPublicKey !== undefined) {
    bodyParams["SSHPublicKey"] = input.SSHPublicKey;
  }
  return bodyParams;
};

const deserializeAws_json1_1AuthException = (
  output: any,
  context: __SerdeContext
): AuthException => {
  let contents: any = {
    __type: "AuthException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EC2InstanceNotFoundException = (
  output: any,
  context: __SerdeContext
): EC2InstanceNotFoundException => {
  let contents: any = {
    __type: "EC2InstanceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgsException = (
  output: any,
  context: __SerdeContext
): InvalidArgsException => {
  let contents: any = {
    __type: "InvalidArgsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SendSSHPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): SendSSHPublicKeyResponse => {
  let contents: any = {
    __type: "SendSSHPublicKeyResponse",
    RequestId: undefined,
    Success: undefined
  };
  if (output.RequestId !== undefined) {
    contents.RequestId = output.RequestId;
  }
  if (output.Success !== undefined) {
    contents.Success = output.Success;
  }
  return contents;
};

const deserializeAws_json1_1ServiceException = (
  output: any,
  context: __SerdeContext
): ServiceException => {
  let contents: any = {
    __type: "ServiceException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};