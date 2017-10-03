"use strict";
var service = (function () {
    var data = "";
    return {
        getData: getData,
        setData: setData
    };
    function getData() {
        return data;
    }
    function setData(value) {
        data = value;
    }
})();
service.setData('John Doe');
console.log(service.getData());
