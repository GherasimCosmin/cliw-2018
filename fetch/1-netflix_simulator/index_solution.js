import * as AppService from "./App.service.js";

Promise.all([AppService.getPermission(), AppService.getVideoDetails()])
    .then(resp => {
        console.log('Here\'s the video', resp[1]);
    }).catch(err => {
        console.error("Oups, something failed!");
    });