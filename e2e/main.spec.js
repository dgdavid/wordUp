'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include app name', function() {
    expect(page.h1El.getText()).toBe('word Up!');
  });
});
