module.exports = function(grunt) {
// Empties folders to start fresh
    grunt.config('clean', {
        dist: {
            files: [
                {
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }
            ]
        },
        server: '.tmp'
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};