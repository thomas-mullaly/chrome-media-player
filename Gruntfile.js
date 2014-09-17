module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: ['**/*.js', 'manifest.json', '**/*.html'],
                    dest: 'build',
                    cwd: "src/"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", ["dev"]);
    grunt.registerTask("dev", ["copy:dev"]);
};