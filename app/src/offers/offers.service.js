(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.service('OffersService', OffersService);
    };


    function OffersService($interval, $state, locker) {
        var offers = [];

        return {
            addOffer,
            getOffers,
            goToOfferListState,
        };


        function addOffer(newOffer) {
            if (!offers.length) {
                getOffers();
            }

            locker.put('offers', JSON.stringify([newOffer, ...offers]));
        }


        function getOffers() {
            if (locker.has('offers')) {
                offers = JSON.parse(locker.get('offers'))
            }

            return offers;
        }


        function goToOfferListState() {
            $state.go('listOffer');
        }

    }

})();
