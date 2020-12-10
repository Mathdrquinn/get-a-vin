if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

const VIN_DETAILS_DOMAIN = process.env.VIN_DETAILS_DOMAIN;

module.exports = {
    env: {
        VIN_DETAILS_DOMAIN,
    },
};
