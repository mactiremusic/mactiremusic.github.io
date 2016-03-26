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
    watch: {
        scripts: {
            files: ["./source/**/*"],
            tasks: ["includes"]
         }
    }
  });

  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['includes']);
  grunt.registerTask('default', ['watch']);
  

};