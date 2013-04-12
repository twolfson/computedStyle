/*global module: true*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Trim out comments and whitespace
    'jsmin-sourcemap': {
      computedStyle: {
        src: 'lib/computedStyle.js',
        dest: 'tmp/computedStyle.comment_free.js',
      }
    },

    // Manually compress words for 140 bytes
    replace: {
      computedStyle: {
        src: 'tmp/computedStyle.comment_free.js',
        dest: 'tmp/computedStyle.140.js',
        replacements: [{
        }]
      }
    },

    // Lint options
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.{js,json}', 'package.json']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        // Our library
        computedStyle: true,

        // Mocha
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }
  });

  // Load in grunt-templater, grunt-text-replace, and grunt-jsmin-sourcemap
  grunt.loadNpmTasks('grunt-templater');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-jsmin-sourcemap');

  // Build task
  grunt.registerTask('build', 'jsmin-sourcemap replace');

  // Default task.
  grunt.registerTask('default', 'lint build');

};
