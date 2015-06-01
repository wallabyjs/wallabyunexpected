module.exports = function () {
  return {
    files: [
      {pattern: 'src/**/*.js*'}
    ],

    tests: [
      {pattern: 'tests/*.spec.js'}
    ],

    env: {
      type: 'node'
    },

    preprocessors: {
      'src/**/*.jsx': file => require('babel').transform(file.changeExt('js').content, {sourceMap: true})
    },

    bootstrap: function () {
      global.React = require('react');
      global.expect = require('unexpected');
      global.expect.installPlugin(require('unexpected-dom'));
    }
  }
};