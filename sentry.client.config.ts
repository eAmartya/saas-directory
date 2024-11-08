import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://12de2d1cef4d50a02e9ac8bb2cc64032@o4508261096488960.ingest.de.sentry.io/4508261133975632",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
