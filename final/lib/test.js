"use strict";
var Animals;
(function (Animals) {
    var Lion = /** @class */ (function () {
        function Lion() {
        }
        Lion.prototype.run = function () {
            console.log("Lion is running");
        };
        return Lion;
    }());
    Animals.Lion = Lion;
})(Animals || (Animals = {}));
(function (Animals) {
    var Tiger = /** @class */ (function () {
        function Tiger() {
        }
        Tiger.prototype.run = function () {
            console.log("Tiger is running");
        };
        return Tiger;
    }());
    Animals.Tiger = Tiger;
})(Animals || (Animals = {}));
(function (Animals) {
    var Leopard = /** @class */ (function () {
        function Leopard() {
        }
        Leopard.prototype.run = function () {
            console.log("Leopard is running");
        };
        return Leopard;
    }());
    Animals.Leopard = Leopard;
})(Animals || (Animals = {}));
var lion = new Animals.Lion();
var tiger = new Animals.Tiger();
var leopard = new Animals.Leopard();
