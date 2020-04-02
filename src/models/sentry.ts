export interface SentryPayload {
  project_name: string;
  message: string;
  id: string;
  culprit: string;
  project_slug: string;
  url: string;
  level: string;
  triggering_rules: any[];
  event: Event;
  project: string;
  logger: null;
}

export interface Event {
  stacktrace: Stacktrace;
  extra: Extra;
  modules: Modules;
  _ref_version: number;
  _ref: number;
  id: string;
  _metrics: Metrics;
  culprit: string;
  title: string;
  event_id: string;
  environment: string;
  platform: string;
  version: string;
  location: null;
  logger: string;
  type: string;
  metadata: Metadata;
  tags: Array<string[]>;
  timestamp: number;
  user: User;
  fingerprint: string[];
  hashes: string[];
  received: number;
  level: string;
  contexts: Contexts;
  request: Request;
  logentry: Logentry;
}

export interface Metrics {
  'bytes.stored.event': number;
}

export interface Contexts {
  client_os: Browser;
  browser: Browser;
}

export interface Browser {
  version: string;
  type: string;
  name: string;
}

export interface Extra {
  emptyList: any[];
  unauthorized: boolean;
  emptyMap: EmptyMap;
  url: string;
  results: number[];
  length: number;
  session: Session;
}

export interface EmptyMap {
}

export interface Session {
  foo: string;
}

export interface Logentry {
  message: null;
  params: null;
  formatted: string;
}

export interface Metadata {
  title: string;
}

export interface Modules {
  'my.package': string;
}

export interface Request {
  cookies: Array<string[]>;
  url: string;
  headers: Array<string[]>;
  env: Env;
  fragment: null;
  query_string: Array<string[]>;
  data: Data;
  method: string;
  inferred_content_type: string;
}

export interface Data {
  hello: string;
}

export interface Env {
  ENV: string;
}

export interface Stacktrace {
  frames: Frame[];
}

export interface Frame {
  function: string;
  symbol_addr: null;
  abs_path: string;
  errors: null;
  pre_context: string[];
  post_context: string[] | null;
  vars: Vars;
  package: null;
  instruction_addr: null;
  symbol: null;
  image_addr: null;
  module: string;
  filename: string;
  platform: null;
  lineno: number;
  colno: null;
  trust: null;
  in_app: boolean;
  data: EmptyMap;
  context_line: string;
  raw_function: null;
}

export interface Vars {
  '\'frames\''?: string;
  '\'culprit\''?: null;
  '\'event_type\''?: string;
  '\'date\''?: null | string;
  '\'extra\''?: VarsExtra;
  '\'v\''?: V;
  '\'kwargs\''?: Kwargs;
  '\'event_id\''?: string;
  '\'tags\''?: null;
  '\'data\''?: Result | null;
  '\'self\''?: string;
  '\'time_spent\''?: null;
  '\'result\''?: Result;
  '\'stack\''?: boolean;
  '\'handler\''?: string;
  '\'k\''?: string;
  '\'public_key\''?: null;
  '\'message\''?: string;
  '\'client\''?: string;
  '\'options\''?: Options;
  '\'root\''?: string;
  '\'parser\''?: string;
  '\'dsn\''?: string;
  '\'opts\''?: string;
  '\'args\''?: string[];
}

export interface Result {
  '\'sentry.interfaces.Message\'': V;
  '\'message\'': string;
}

export interface V {
  '\'message\'': string;
  '\'params\'': any[];
}

export interface VarsExtra {
  '\'go_deeper\'': Array<string[]>;
  '\'user\'': string;
  '\'loadavg\'': number[];
}

export interface Kwargs {
  '\'message\''?: string;
  '\'level\'': number;
  '\'extra\''?: KwargsExtra;
  '\'tags\''?: null;
  '\'data\''?: null;
  '\'stack\''?: boolean;
}

export interface KwargsExtra {
  '\'go_deeper\'': string[];
  '\'user\'': string;
  '\'loadavg\'': number[];
}

export interface Options {
  '\'tags\'': null;
  '\'data\'': null;
}

export interface User {
  username: string;
  name: string;
  ip_address: string;
  email: string;
  geo: Geo;
  id: string;
}

export interface Geo {
  city: string;
  region: string;
  country_code: string;
}
