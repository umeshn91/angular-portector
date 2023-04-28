var request = require('request');

var options = {
    method: 'GET',
    url: 'http://localhost:7000/api/v1.0/lms/courses/info/java',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type':'application/json',
        'Sec-Fetch-Mode': 'cors',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36'
    },
    body: '{ "headers":{"normalizedNames":{},"lazyUpdate":null}}'
};


it('Should reach get all courses by technology', done => {

        request(options, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            done();
    });
});