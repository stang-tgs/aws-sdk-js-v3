import {
  AcceptInvitationRequest,
  CreateGraphResponse,
  CreateMembersRequest,
  CreateMembersResponse,
  DeleteGraphRequest,
  DeleteMembersRequest,
  DeleteMembersResponse,
  DisassociateMembershipRequest,
  GetMembersRequest,
  GetMembersResponse,
  ListGraphsRequest,
  ListGraphsResponse,
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListMembersRequest,
  ListMembersResponse,
  RejectInvitationRequest
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | AcceptInvitationRequest
  | CreateMembersRequest
  | DeleteGraphRequest
  | DeleteMembersRequest
  | DisassociateMembershipRequest
  | GetMembersRequest
  | ListGraphsRequest
  | ListInvitationsRequest
  | ListMembersRequest
  | RejectInvitationRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CreateGraphResponse
  | CreateMembersResponse
  | DeleteMembersResponse
  | GetMembersResponse
  | ListGraphsResponse
  | ListInvitationsResponse
  | ListMembersResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type DetectiveClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DetectiveClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <important>
 *             <p>Amazon Detective is currently in preview. The Detective API can only be used by accounts that
 *             are admitted into the preview.</p>
 *          </important>
 *          <p>Detective uses machine learning and purpose-built visualizations to help you analyze and
 *          investigate security issues across your Amazon Web Services (AWS) workloads. Detective automatically
 *          extracts time-based events such as login attempts, API calls, and network traffic from
 *          AWS CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by
 *          Amazon GuardDuty.</p>
 *          <p>The Detective API primarily supports the creation and management of behavior graphs. A
 *          behavior graph contains the extracted data from a set of member accounts, and is created
 *          and managed by a master account.</p>
 *          <p>Every behavior graph is specific to a Region. You can only use the API to manage graphs
 *          that belong to the Region that is associated with the currently selected endpoint.</p>
 *          <p>A Detective master account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>View the list of member accounts in a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Add member accounts to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove member accounts from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>A member account can use the Detective API to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>View the list of behavior graphs that they are invited to.</p>
 *             </li>
 *             <li>
 *                <p>Accept an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Decline an invitation to contribute to a behavior graph.</p>
 *             </li>
 *             <li>
 *                <p>Remove their account from a behavior graph.</p>
 *             </li>
 *          </ul>
 *          <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p>
 */
export class DetectiveClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DetectiveClientResolvedConfig
> {
  readonly config: DetectiveClientResolvedConfig;

  constructor(configuration: DetectiveClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}