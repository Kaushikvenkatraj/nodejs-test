const assert = require('assert');
const http = require('http');

describe('Simple Node.js App', function() {
  it('should return 200 OK', function(done) {
    http.get('http://localhost:3000', function(res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

