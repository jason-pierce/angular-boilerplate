module.exports = function(grunt) {

    grunt.config('connect', {
        // The actual grunt server settings
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: true,
                middleware: function (connect) {
                    return [
                        connect.static('.tmp'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect.static('app')
                    ];
                }
            }
        },
        test: {
            options: {
                port: 9001,
                middleware: function (connect) {
                    return [
                        connect.static('.tmp'),
                        connect.static('test'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect.static('app')
                    ];
                }
            }
        },
        dist: {
            options: {
                open: true,
                base: '<%= yeoman.dist %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

};