module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:computedStyle.jquery.json>',
    lint: {
      files: ['grunt.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
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
