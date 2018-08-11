(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.component('addOffer', addOffer())
            .controller('addOfferController', addOfferController);
    };


    function addOffer() {
        return {
            template: require('./add-offer.component.html'),
            controller: 'addOfferController'
        };
    }


    function addOfferController(OffersService, $state) {
        var vm = this;

        vm.offer = {
            title: '',
            company: '',
            salaryMin: 0,
            salaryMax: 0,
            city: '',
            street: '',
            postalCode: ''
        };

        vm.addOffer = addOffer;


        function addOffer(newOffer) {
            OffersService.addOffer(newOffer);
            $state.go('listOffer')
        }
    }

})();
