module.exports = function(grunt) {

    grunt.config('autoprefixer', {
        // Add vendor prefixed styles
        options: {
            browsers: ['last 1 version']
        },
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');

};