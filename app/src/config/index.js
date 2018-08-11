'use strict';

module.exports = (ngApp) => {
    require('./locker.config')(ngApp);
    require('./theme.config')(ngApp);
    require('./routing-redirect.config')(ngApp);
};
