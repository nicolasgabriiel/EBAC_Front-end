module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
        production: {
            options: {
                compress: true,
            },
            files:{
                'dist/styles/main.min.css': 'src/styles/main.less'
            }
        }
    },
    uglify: {
        target: {
            files: {
                'dist/scripts/main.min.js': 'src/scripts/main.js'
            }
        }
    },
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                'prebuild/index.html': 'src/index.html'
            }
        }
    },
    replace:{
        dist: {
            options: {
                patterns: [
                    {
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.min.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist/'
                }
            ]
        }
    },
    clean: ['prebuild'],
    
})

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-replace');
grunt.loadNpmTasks('grunt-contrib-clean');


grunt.registerTask('default', ['less:production', 'uglify', 'htmlmin:dist', 'replace:dist', 'clean'])

grunt.registerTask('build', 'htmlmin:dist', 'replace:dist', 'clean')

}