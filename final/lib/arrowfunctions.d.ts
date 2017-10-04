declare var createGreating: (message: string, name: string) => string;
declare var arrowGreeting1: (message: string, name: string) => string;
declare var arrowGreeting2: (message: string, name: string) => string;
declare var deliveryBoy: {
    name: string;
    handleMessage: (message: string, handler: (message: string) => void) => void;
    receive: () => void;
};
declare var arrowDeliveryBoy: {
    name: string;
    handleMessage: (message: string, handler: (message: string) => void) => void;
    receive: () => void;
};
