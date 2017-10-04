declare let color: string;
declare let speed: number;
declare function go(): void;
declare let car: {
    color: string;
    speed: number;
    go: () => void;
};
declare let modifiedCar: {
    color: string;
    speed: number;
    go(): void;
};
declare let computedCar: {
    color: string;
    speed: number;
    ["go"]: () => void;
};
declare let drive: string;
declare let computedCar2: {
    [x: string]: string | number | (() => void);
    color: string;
    speed: number;
};
