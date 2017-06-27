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
    created: function() {
        this.setAdvanceMode(false)
    },
    methods: {
        setAdvanceMode: function(value) {
            let currentSize = currentWindow.getSize();
            if (value) {
                currentWindow.setMinimumSize(600, 400);
                currentWindow.setMaximumSize(99999, 99999);
                currentWindow.setSize(1000, currentSize[1])


            } else {
                currentWindow.unmaximize();
                currentWindow.setMinimumSize(500, 400);
                currentWindow.setMaximumSize(500, 99999);
                currentWindow.setSize(500, currentSize[1]);
            }
            this.advanceMode = value;
        },
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