onsole.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => {
          renderRawResponse(jsonResponse)
        })
      }
    };

    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(isMatchOne , 'Did you call `renderRawResponse(jsonResponse)` in the code block of the callback?');
  });
});
