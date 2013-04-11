/*global module: true*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
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

  // Default task.
  grunt.registerTask('default', 'lint');

};
