describe("failingtest.spec.ts ", () => { 
    it("should fail", () => { 
      let undefinedValue; 
      //expect(undefinedValue).toBeDefined(); 
      expect(undefinedValue).toBeUndefined();
      console.log('method executed');
    }); 
  }); 
