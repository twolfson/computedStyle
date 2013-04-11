module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Lint options
    lint: {
      files: ['grunt.js']
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
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');

};
