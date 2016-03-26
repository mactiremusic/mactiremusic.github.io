module.exports = function(grunt) {

  grunt.initConfig({
    includes: {
      files: {
        src: ['source/pages/*.html'], // Source files
        dest: 'build', // Destination directory
        flatten: true,
        cwd: '.',
        options: {
          silent: false,
          
        }
      }
    },
    sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'compressed'
          },
          files: {                         // Dictionary of files
            'build/css/main.css': 'source/style/main.scss'       // 'destination': 'source'
          }
        }
      },
    watch: {
        scripts: {
            files: ["./source/**/*"],
            tasks: ["includes", "style"]
         }
    }
  });

  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['includes']);
  grunt.registerTask('style', ['sass']);
  grunt.registerTask('default', ['watch']);
  

};