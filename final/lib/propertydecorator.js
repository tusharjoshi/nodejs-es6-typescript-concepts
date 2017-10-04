"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function serialize(name) {
    return function (target, propertyKey, descriptor) {
        console.log("propertyKey:", propertyKey);
        console.log("name:", name);
        console.log(descriptor);
    };
}
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lang", {
        get: function () {
            return 'JavaScript';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        serialize()
    ], Person.prototype, "name", null);
    __decorate([
        serialize('Language')
    ], Person.prototype, "lang", null);
    return Person;
}());
var p = new Person("John");
console.log(p.name);
console.log(p.lang);
