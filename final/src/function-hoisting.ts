let service = (function() {
    let data: string = "";

    return {
        getData: getData,
        setData: setData
    };

    function getData() {
        return data;
    }

    function setData(value: string) {
        data = value;
    }
})();

service.setData('John Doe');
console.log(service.getData());