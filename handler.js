'use strict';

const Meta = require('html-metadata-parser');

module.exports.hello = (event, context, callback) => {
    if (!event || !event.body) {
        return sendResponse(400, 'Invalid Request Body');
    }

    const requestBody = JSON.parse(event.body);
    let originalUrl = requestBody.url;
    Meta.parser(originalUrl, function (err, result) {
        if(!err)
        {
            let meta = result.meta;
            let response = {};
            response.title = meta.title;
            response.description = meta.description;
            if (result.og && result.og.images) {
                response.images = result.og.images
            }
            sendResponse(200, response);
        }
    }).catch((err) => {
        console.error(err);
        sendResponse(500, 'Invalid URL');
    });

    function sendResponse(status, body) {
        let resBody = {};
        if (typeof body === 'object') {
            resBody = body;
        } else if (typeof body === 'string') {
            resBody = {message: body};
        }

        const response = {
            statusCode: status,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(resBody),
        };
        console.log(response)
        callback(null, response);
    }
};
