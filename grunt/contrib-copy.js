module.exports = function(grunt) {

    grunt.config('copy', {
        // Copies remaining files to places other tasks can use
        dist: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'views/{,*/}*.html',
                        'images/{,*/}*.{webp}',
                        'fonts/*'
                    ]
                },
                {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                },
                {
                    expand: true,
                    cwd: '.',
                    src: 'bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*',
                    dest: '<%= yeoman.dist %>'
                }
            ]
        },
        styles: {
            expand: true,
            cwd: '<%= yeoman.app %>/styles',
            dest: '.tmp/styles/',
            src: '{,*/}*.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};