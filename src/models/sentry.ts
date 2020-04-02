export interface SentryPayload {
  action: 'triggered' | 'error';
  actor: Actor;
  data: SentryPayloadData;
  installation: Installation;
}

export interface Actor {
  id: string;
  name: string;
  type: string;
}

export interface SentryPayloadData {
  error: Error;
  event: Event;
  triggered_rule: string;
}

export interface Event {
  _ref: number;
  _ref_version: number;
  contexts: Contexts;
  culprit: string;
  datetime: Date;
  dist: null;
  event_id: string;
  exception: Exception;
  fingerprint: string[];
  grouping_config: GroupingConfig;
  hashes: string[];
  issue_url: string;
  key_id: string;
  level: string;
  location: string;
  logger: string;
  message: string;
  metadata: Metadata;
  platform: string;
  project: number;
  received: number;
  release: null;
  request: Request;
  sdk: SDK;
  tags: Array<string[]>;
  time_spent: null;
  timestamp: number;
  title: string;
  type: string;
  url: string;
  user: User;
  version: string;
  web_url: string;
}

export interface Error {
  _ref: number;
  _ref_version: number;
  contexts: Contexts;
  culprit: string;
  datetime: Date;
  dist: null;
  event_id: string;
  exception: Exception;
  fingerprint: string[];
  grouping_config: GroupingConfig;
  hashes: string[];
  issue_url: string;
  key_id: string;
  level: string;
  location: string;
  logger: string;
  message: string;
  metadata: Metadata;
  platform: string;
  project: number;
  received: number;
  release: null;
  request: Request;
  sdk: SDK;
  tags: Array<string[]>;
  time_spent: null;
  timestamp: number;
  title: string;
  type: string;
  url: string;
  user: User;
  version: string;
  web_url: string;
}

export interface Contexts {
  browser: Browser;
  os: Browser;
}

export interface Browser {
  name: string;
  type: string;
  version: string;
}

export interface Exception {
  values: Value[];
}

export interface Value {
  mechanism: Mechanism;
  stacktrace: Stacktrace;
  type: string;
  value: string;
}

export interface Mechanism {
  data: MechanismData;
  description: null;
  handled: boolean;
  help_link: null;
  meta: null;
  synthetic: null;
  type: string;
}

export interface MechanismData {
  message: string;
  mode: string;
  name: string;
}

export interface Stacktrace {
  frames: Frame[];
}

export interface Frame {
  abs_path: string;
  colno: number;
  context_line: string;
  data: FrameData;
  errors: null;
  filename: string;
  function: null;
  image_addr: null;
  in_app: boolean;
  instruction_addr: null;
  lineno: number;
  module: string;
  package: null;
  platform: null;
  post_context: string[];
  pre_context: string[];
  raw_function: null;
  symbol: null;
  symbol_addr: null;
  trust: null;
  vars: null;
}

export interface FrameData {
  orig_in_app: number;
}

export interface GroupingConfig {
  enhancements: string;
  id: string;
}

export interface Metadata {
  filename: string;
  type: string;
  value: string;
}

export interface Request {
  cookies: null;
  data: null;
  env: null;
  fragment: null;
  headers: Array<string[]>;
  inferred_content_type: null;
  method: null;
  query_string: any[];
  url: string;
}

export interface SDK {
  integrations: string[];
  name: string;
  packages: Package[];
  version: string;
}

export interface Package {
  name: string;
  version: string;
}

export interface User {
  ip_address: string;
}

export interface Installation {
  uuid: string;
}

