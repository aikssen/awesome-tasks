/**
 * The karma-test-shim tells Karma what files to pre-load
 * and primes the Angular test framework with test versions
 * of the providers that every app expects to be pre-loaded.
 */
Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

// find and load the test files (the files ending in .spec.ts)
const appContext = require.context('../src/application', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);