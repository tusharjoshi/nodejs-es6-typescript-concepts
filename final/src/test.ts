

module Animals {
    export class Lion {
        run() {
            console.log("Lion is running");
        }
    }
}

namespace Animals {
    export class Tiger {
        run() {
            console.log("Tiger is running");
        }
    }
}

module Animals {
    export class Leopard {
        run() {
            console.log("Leopard is running");
        }
    }
}

let lion = new Animals.Lion();
let tiger = new Animals.Tiger();
let leopard = new Animals.Leopard();