module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          'js/utils.js',
          'js/game-controller.js',
          'js/score-controller.js',
          'js/timer.js',
          'js/leader-board.js',
          'js/modal.js',
          'js/main.js'
        ],
        dest: 'js/built/main.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/built/main.min.js': ['js/built/main.js']
        }
      }
    },

    watch: {
      files: ['js/*'],
      tasks: ['concat', 'uglify'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);
};