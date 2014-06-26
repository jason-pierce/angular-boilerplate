module.exports = function(grunt) {

    grunt.config('karma', {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    });

    grunt.loadNpmTasks('grunt-karma');

};
