var wallabify = require('wallabify');

module.exports = function (wallaby) {
    var wallabyPostprocessor = wallabify({
            // browserify options, such as
            // insertGlobals: false
            extensions: '.jsx'
        }
        // you may also pass an initializer function to chain other
        // browserify options, such as transformers
        // , b => b.exclude('mkdirp').transform(require('babelify'))
    );

    return {
        files: [
            { pattern: 'tests/phantomPolyfill.js', instrument: false},
            { pattern: 'src/**/*.js', load: false },

            // Loading without browserify (load: true is default)
            { pattern: 'node_modules/unexpected/unexpected.js', instrument: false },
            { pattern: 'node_modules/unexpected-dom/unexpected-dom.min.js', instrument: false }
        ],

        tests: [
            { pattern: 'tests/*.spec.js', load: false}
        ],

        postprocessor: wallabyPostprocessor,

        bootstrap: function () {
            // Assigning globals to avoid the initialization in each test
            window.expect = weknowhow.expect;
            window.expect.installPlugin(unexpected.dom);
            // required to trigger tests loading
            window.__moduleBundler.loadTests();
        }
        // Can be used to provide some more diagnostics
        //, debug: true
    }
};