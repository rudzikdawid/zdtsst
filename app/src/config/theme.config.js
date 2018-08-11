(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.config(themeConfig);
    };


    function themeConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('orange')
            .dark();
    }

})();
