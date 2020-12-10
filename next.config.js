if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

const GET_VIN_URL = process.env.GET_VIN_URL;
const VIN_DETAILS_DOMAIN = process.env.VIN_DETAILS_DOMAIN;

module.exports = {
    env: {
        GET_VIN_URL,
        VIN_DETAILS_DOMAIN,
    },
};
