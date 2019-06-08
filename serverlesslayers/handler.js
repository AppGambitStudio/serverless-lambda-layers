'use strict';
const 
moment = require('moment');

module.exports.helloWorld = (event, context, callback) => {    
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: `Today is ${moment().format('ddd')}`
    }),
  };

  callback(null, response);
};
