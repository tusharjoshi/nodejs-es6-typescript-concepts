"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_module_1 = require("./index-module");
describe("index test", function () {
    it("Should create App", function () {
        expect(index_module_1.App).toBeDefined();
    });
    it("Should create App object", function () {
        var app = new index_module_1.App();
        expect(app).not.toBeNull();
    });
    it("Should call console.log", function () {
        spyOn(console, "log");
        var app = new index_module_1.App();
        app.sayHello();
        expect(console.log).toHaveBeenCalledWith("Hello World!!");
    });
});
