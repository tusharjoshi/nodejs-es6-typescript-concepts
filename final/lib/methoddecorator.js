"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value; // save a reference to the original method
    // NOTE: Do not use arrow syntax here. Use a function expression in 
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // pre
        console.log("The method args are: " + JSON.stringify(args));
        // run and store result
        var result = originalMethod.apply(this, args);
        // post
        console.log("The return value is: " + result);
        // return the result of the original method (or modify it before returning)
        return result;
    };
    return descriptor;
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function (arg) {
        return "Message -- " + arg;
    };
    __decorate([
        log
    ], MyClass.prototype, "myMethod", null);
    return MyClass;
}());
var obj = new MyClass();
var value = obj.myMethod("Hi");
console.log(value);
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    Object.defineProperty(SomeClass.prototype, "prop", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        enumerable(false)
    ], SomeClass.prototype, "prop", null);
    return SomeClass;
}());
function enumerable(isEnumerable) {
    return function (target, propertyKey, descriptor) {
        console.log("Inside enumerable decorator");
        descriptor.enumerable = isEnumerable;
        return descriptor;
    };
}
var someObj = new SomeClass();
var val = someObj.prop;
console.log(val);
