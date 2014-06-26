module.exports = function(grunt) {

    grunt.config('concurrent', {
        server: [
            'compass:server'
        ],
        test: [
            'compass'
        ],
        dist: [
            'compass',
            'imagemin',
            'svgmin'
        ]
    });

    grunt.loadNpmTasks('grunt-concurrent');

};
