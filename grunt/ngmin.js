module.exports = function(grunt) {

    grunt.config('autoprefixer', {
        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-ngmin');

};