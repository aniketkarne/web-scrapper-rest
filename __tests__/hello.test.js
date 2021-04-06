'use strict';

// tests for hello

const handler = require('./../handler');

test("testMissingRequestBody", () => {
    let event = "";
    handler.hello(event, null, (err, expectedResult) => {
        expect("{\"message\":\"Missing request body\"}").toEqual(expectedResult.body);
        expect(expectedResult.statusCode).toEqual(400);
    });

});

test("testInvalidRequestRequestBody", () => {
    let event = {"body": "{\"er\": \"https://golive.dsjkdskjdsf\"}"};
    handler.hello(event, null, (err, expectedResult) => {
        expect(400).toEqual(expectedResult.statusCode);
    });
});

test("testInvalidUrl", () => {
    let event = {"body": "{\"url\": \"https://golive.dsjkdskjdsf\"}"};
    handler.hello(event, null, (err, expectedResult) => {
        expect(400).toEqual(expectedResult.statusCode);
    })
});

test("testValidUrl", () => {
    let event = {"body": "{\"url\": \"https://yahoo.com\"}"};
  handler.hello(event, null, (err, expectedResult) => {
    expect(200).toEqual(expectedResult.statusCode);
  })
});





