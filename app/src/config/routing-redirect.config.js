(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.config(appRouting);
    };


    function appRouting($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false).hashPrefix('');
        $urlRouterProvider.otherwise(goToOfferListState);


        function goToOfferListState($injector) {
            const OffersService = $injector.get('OffersService');
            OffersService.goToOfferListState();
        }
    }

})();
