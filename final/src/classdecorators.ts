function MyClassDecorator(value: string) {
    return function (target: Function) {
        (<any>target).prototype.myprop = value;
    }
  }
  
  @MyClassDecorator("some value")
  class DecoClass { 

  }
  
  var decoObj = new DecoClass();
  console.log((<any>decoObj).myprop); // outputs “some value”