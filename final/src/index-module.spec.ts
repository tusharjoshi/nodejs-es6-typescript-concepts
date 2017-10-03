import {App} from './index-module';

describe("index test", () => {
  it("Should create App", () => {
    expect(App).toBeDefined();
  });

  it("Should create App object", () => {
    let app = new App();
    expect(app).not.toBeNull();
  });

  it("Should call console.log", () => {
    spyOn(console,"log");
    let app = new App();
    app.sayHello();
    expect(console.log).toHaveBeenCalledWith("Hello World!!");
    
  });
});