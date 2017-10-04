"use strict";
var createGreating = function (message, name) {
    return message + ' ' + name;
};
// arrow function
var arrowGreeting1 = function (message, name) {
    return message + ' ' + name;
};
// no braces needed if only one value to return
var arrowGreeting2 = function (message, name) { return message + ' ' + name; };
console.log(createGreating("Hi", "John"));
console.log(arrowGreeting1("Hi", "John"));
console.log(arrowGreeting2("Hi", "John"));
var deliveryBoy = {
    name: "John",
    handleMessage: function (message, handler) {
        handler(message);
    },
    receive: function () {
        var that = this;
        this.handleMessage("Hello", function (message) {
            that.name; // get name from enclosing scope
            console.log(message + ' ' + that.name);
        });
    }
};
deliveryBoy.receive();
var arrowDeliveryBoy = {
    name: "John",
    handleMessage: function (message, handler) {
        handler(message);
    },
    receive: function () {
        var _this = this;
        this.handleMessage("Hello", function (message) {
            console.log(message + ' ' + _this.name);
        });
    }
};
arrowDeliveryBoy.receive();
