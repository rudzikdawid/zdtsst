'use strict';

const ngApp = angular.module('app', [
    require('@uirouter/angularjs').default,
    require('angular-aria'),
    require('angular-animate'),
    require('angular-material'),
    require('angular-messages'),
    require('angular-sanitize'),
    require('angular-locker')
]);

require('./src/config')(ngApp);
require('./src/offers')(ngApp);
