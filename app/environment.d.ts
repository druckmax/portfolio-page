declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY: string;
    FORM_SECRET: string;
    LIGHTHOUSE_URL: string;
    GEEKFLARE_API_KEY: string;
    TURNSTILE_SITE_KEY: string;
    TURNSTILE_SECRET: string;
  }
}
