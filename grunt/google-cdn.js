module.exports = function(grunt) {

    grunt.config('cdnify', {
        dist: {
            html: ['<%= yeoman.dist %>/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-google-cdn');

};
