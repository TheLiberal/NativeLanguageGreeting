"use strict";


window.onload = function () {

    let ip;

    async function getIP() {
        // GET ip from ip-api
        const response = await fetch("http://ip-api.com/json/");

        const data = await response.json();

        // return the JSON
        return data;

    };

    async function getGreeting(ip) {
        // GET from fourtonfish API
        const response = await fetch(`https://fourtonfish.com/hellosalut/?ip=${ip}`)

        const greeting = await response.json();

        // return the JSON
        return greeting;
    };

    getIP()
        .then(information => {
            console.log(information.query)
            ip = information.query;
            getGreeting(ip)
                .then(data => {
                    console.log(data.hello);
                    document.getElementById("greeting").innerHTML = data.hello;
                });
        });


};