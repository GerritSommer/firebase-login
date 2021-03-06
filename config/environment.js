/* jshint node: true */

module.exports = function(environment) {
  // global settings
  var ENV = {
    modulePrefix:     'sommer',
    podModulePrefix:  'sommer/pods',
    baseURL:          '/',
    locationType:     'auto',
    environment:      environment,

    firebase: 'https://sommer.firebaseio.com/',

    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com"
    },

    torii: {
      sessionServiceName: 'auth',
      providers: {
        'password': {}
      }
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    i18n: {
      defaultLocale: 'en'
    }

  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = { enabled: false }
    //
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL      = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS      = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
