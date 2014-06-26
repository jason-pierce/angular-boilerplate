module.exports = function(grunt) {

    grunt.config('bower-linker', {

        dev: {
            options: {
                cwd   : '.',
                root  : 'bower_components',
                copy  : true,
                vendor: true,
                map   : {
                    '*.js' : '/js',
                    '*.css': '/css',
                    '*': '/'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-linker');

};