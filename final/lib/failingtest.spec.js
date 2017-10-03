"use strict";
describe("failingtest.spec.ts ", function () {
    it("should fail", function () {
        var undefinedValue;
        //expect(undefinedValue).toBeDefined(); 
        expect(undefinedValue).toBeUndefined();
        console.log('method executed');
    });
});
