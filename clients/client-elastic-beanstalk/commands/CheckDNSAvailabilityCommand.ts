import {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticBeanstalkClient";
import {
  CheckDNSAvailabilityMessage,
  CheckDNSAvailabilityResultMessage
} from "../models/index";
import {
  deserializeAws_queryCheckDNSAvailabilityCommand,
  serializeAws_queryCheckDNSAvailabilityCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CheckDNSAvailabilityCommandInput = CheckDNSAvailabilityMessage;
export type CheckDNSAvailabilityCommandOutput = CheckDNSAvailabilityResultMessage;

export class CheckDNSAvailabilityCommand extends $Command<
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckDNSAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CheckDNSAvailabilityCommandInput,
    CheckDNSAvailabilityCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CheckDNSAvailabilityCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCheckDNSAvailabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CheckDNSAvailabilityCommandOutput> {
    return deserializeAws_queryCheckDNSAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}