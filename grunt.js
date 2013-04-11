module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Remote scripts
    curl: {
      'vendor/mocha.js': 'https://raw.github.com/visionmedia/mocha/master/mocha.js',
      'vendor/mocha.css': 'https://raw.github.com/visionmedia/mocha/master/mocha.css'
    },

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

  // Load in grunt-curl
  grunt.loadNpmTasks('grunt-curl');

  // Default task.
  grunt.registerTask('default', 'lint');

};
