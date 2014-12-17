module.exports = function (grunt) {
  // Helper function to resolve computedStyle
  var computedStyleJs = 'lib/computedStyle.js';
  function getVars() {
    return {
      computedStyle: grunt.file.read(computedStyleJs)
    };
  }

  // Project configuration.
  grunt.initConfig({
    // Build minified scripts
    uglify: {
      computedStyle: {
        src: computedStyleJs,
        dest: 'dist/computedStyle.min.js'
      }
    },

    // Generate templates for each flavor
    template: {
      vanilla: {
        src: 'lib/templates/vanilla.mustache.js',
        dest: 'dist/computedStyle.js',
        variables: getVars,
        engine: 'mustache'
      },
      amd: {
        src: 'lib/templates/amd.mustache.js',
        dest: 'dist/computedStyle.amd.js',
        variables: getVars,
        engine: 'mustache'
      },
      commonjs: {
        src: 'lib/templates/commonjs.mustache.js',
        dest: 'dist/computedStyle.commonjs.js',
        variables: getVars,
        engine: 'mustache'
      }
    }
  });

  // Load in grunt tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-templater');

  // Define common actions
  grunt.registerTask('build', ['uglify', 'template']);

  // Build as the default task
  grunt.registerTask('default', ['build']);
};
