"use strict";
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.sayHello = function () {
        console.log("Hello World!!");
    };
    return App;
}());
var app = new App();
app.sayHello();
