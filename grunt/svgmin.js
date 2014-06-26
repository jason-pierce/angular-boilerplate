module.exports = function(grunt) {

    grunt.config('svgmin', {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-svgmin');

};