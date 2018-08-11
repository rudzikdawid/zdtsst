(function () {
    'use strict';

    module.exports = (ngApp) => {
        ngApp.config(lockerConfig);
    };


    function lockerConfig(lockerProvider) {
        lockerProvider.defaults({
            driver: 'local',
            namespace: 'rudzik',
            separator: '.',
            eventsEnabled: false
        });
    }

})();
