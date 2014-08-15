
module.exports = function(grunt){
  "use strict";

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jasmine");

  grunt.initConfig({
    jasmine: {
      test: {
        options: {
          specs: 'test/*.js'
        },
        src: [
          'bower_components/momentjs/moment.js',
          'moment.parseTime.js'
        ]
      }
    },
    watch: {
      test: {
        files: [
          'test/*.js',
          'moment.parseTime.js'
        ],
        tasks: ['jasmine']
      }
    }
  });

  grunt.registerTask("default", ["mocha"]);

};
