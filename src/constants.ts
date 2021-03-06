export const DEFAULT_CONFIG: Required<IOpConfig> = {
  VERSION: "0.0.1",
  INITIAL_CONTEXT: {},
  BASE_URL: "",
  ENV: {},
  DEFAULT: {
    CHECK: "= $.RESPONSE.STATUS_CODE < 300",
    DELAY: 1000,
    DEBUG: ["STATUS", "TITLE"],
    HEADERS: {},
    ASSIGN: {},
  },
  DEFAULT_CONNECT: {},
  DEFAULT_DELETE: {},
  DEFAULT_GET: {},
  DEFAULT_HEAD: {},
  DEFAULT_OPTIONS: {},
  DEFAULT_PATCH: {},
  DEFAULT_POST: {},
  DEFAULT_PUT: {},
  DEFAULT_TRACE: {},
};
