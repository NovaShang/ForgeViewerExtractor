const Vue = require('./node_modules/vue/dist/vue.js');
const electron = require('electron');
const currentWindow = electron.remote.getCurrentWindow();
const app = new Vue({
    el: "#app",
    data: {
        taskQueue: [],
        currentTask: {},
        advanceMode: false


    },
    methods: {
        min: function() {
            currentWindow.minimize();

        },
        max: function() {
            if (currentWindow.isMaximized()) {
                currentWindow.unmaximize();

            } else {
                currentWindow.maximize();
            }


        },
        close: function() {
            currentWindow.close();

        }

    }
})