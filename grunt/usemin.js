module.exports = function(grunt) {

    grunt.config('usemin', {
        html: ['<%= yeoman.dist %>/{,*/}*.html'],
        options: {
            assetsDirs: ['<%= yeoman.dist %>']
        }
    });

    grunt.loadNpmTasks('grunt-usemin');

};