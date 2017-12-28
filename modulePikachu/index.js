var postcss = require('postcss');

// https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md
module.exports = postcss.plugin('modulePikachu', function modulePikachu(options) {
    return function (css) {
        options = options || {};
        console.log('My plugin works!');
        // Your code will go here
        css.walkRules(function (rule) {

            rule.walkDecls(function (decl, i) {
                decl.prop = '-pikachu-' + decl.prop
            });

        });
    }
});