var createGreating = function(message: string, name: string): string {
    return message + ' ' + name;
}

// arrow function
var arrowGreeting1 = (message: string, name: string): string => {
    return message + ' ' + name;
}

// no braces needed if only one value to return
var arrowGreeting2 = (message: string, name: string): string => message + ' ' + name;

console.log(createGreating("Hi", "John"));

console.log(arrowGreeting1("Hi", "John"));

console.log(arrowGreeting2("Hi", "John"));

var deliveryBoy = {
    name: "John",

    handleMessage: function(message: string, handler: (message: string) => void) {
        handler(message);
    },

    receive: function() {
        var that = this;

        this.handleMessage("Hello", function(message: string) {
            that.name; // get name from enclosing scope
            console.log(message + ' ' + that.name);
        });
    }
};

deliveryBoy.receive();

var arrowDeliveryBoy = {
    name: "John",

    handleMessage: function(message: string, handler: (message: string) => void) {
        handler(message);
    },

    receive: function() {
        this.handleMessage("Hello", (message: string) => {
            console.log(message + ' ' + this.name);
        });
    }
};

arrowDeliveryBoy.receive();