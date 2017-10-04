declare module Animals {
    class Lion {
        run(): void;
    }
}
declare namespace Animals {
    class Tiger {
        run(): void;
    }
}
declare module Animals {
    class Leopard {
        run(): void;
    }
}
declare let lion: Animals.Lion;
declare let tiger: Animals.Tiger;
declare let leopard: Animals.Leopard;
