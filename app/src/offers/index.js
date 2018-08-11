'use strict';

require('./list/list-offer.scss');

module.exports = (ngApp) => {
    require('./offers.service')(ngApp);
    require('./offers.routing')(ngApp);
    require('./list/list-offer.component')(ngApp);
    require('./add/add-offer.component')(ngApp);
};
