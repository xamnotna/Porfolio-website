/* import React from "react";

const dotenv = require('dotenv');
dotenv.config(); */

const env = process.env;

const config = {
    serviceID: env.REACT_APP_SERVICE_ID,
    templateID: env.REACT_APP_TEMPLATE_ID,
    publicKey: env.REACT_APP_PUBLIC_KEY,
}

export default config;