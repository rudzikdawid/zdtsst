(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.config(offersRouting);
    };


    function offersRouting($stateProvider) {
        $stateProvider
            .state('listOffer', {
                url: '/list-offer',
                component: 'listOffer'
            })

            .state('addOffer', {
                url: '/add-offer',
                component: 'addOffer'
            });
    }

})();
