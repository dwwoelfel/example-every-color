// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type NpmPackageInput = {
  name: string;
};

export type NpmPackage = {
  /**
   * Any data from the function will be returned here
   */
  data: /** No fields, named fragments, or inline fragments found */ Record<
    string,
    unknown
  >;
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchNpmPackage(
  variables: NpmPackageInput,
  options?: NetlifyGraphFunctionOptions
): Promise<NpmPackage>;
