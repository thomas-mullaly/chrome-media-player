module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: ["**/*.js", "manifest.json", "**/*.html"],
                    dest: 'build',
                    cwd: "src/"
                }]
            }
        },

        bower: {
            dev: {
                dest: "build/",
                js_dest: "build/scripts/libs",
                css_dest: "build/styles/libs",
                options: {
                    expand: true
                }
            }
        },

        clean: ["build"]
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-bower");

    grunt.registerTask("default", ["dev"]);
    grunt.registerTask("dev", ["copy:dev", "bower:dev"]);
};
