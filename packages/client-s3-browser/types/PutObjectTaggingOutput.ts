import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutObjectTaggingOutput shape
 */
export interface PutObjectTaggingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * _ObjectVersionId shape
   */
  VersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}