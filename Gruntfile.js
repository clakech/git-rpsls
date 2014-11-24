'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-conventional-changelog');

    grunt.initConfig({
        changelog: {
            options: {
                repository: 'https://github.com/joyent/node'
            }
        }
    });
};
