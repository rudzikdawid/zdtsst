(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.component('listOffer', listOffer())
            .controller('listOfferController', listOfferController);
    };


    function listOffer() {
        return {
            template: require('./list-offer.component.html'),
            controller: 'listOfferController'
        };
    }


    function listOfferController(OffersService) {
        var vm = this;

        vm.$onInit = onInit;


        function onInit() {
            vm.offers = OffersService.getOffers();
        }
    }

})();