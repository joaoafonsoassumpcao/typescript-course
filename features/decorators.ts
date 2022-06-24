class Boat {
  @testDecorartor
  color: string = 'red';

  @testDecorartor
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("ooopssss")
  pilot(@parameterDecorator speed: string): void {
    if(speed === "fast") console.log ("swish")
    else console.log ("nothing")
  }
}

function parameterDecorator(target: any, key: string, index: number){
  console.log(target, key, index)
} 


function testDecorartor(target: any, key: string){
  console.log(key)

}

function classDecorator(constructor: Function){

}

function logError(errorMessage: string){
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
  
    desc.value = () => {
      try {
        method()
      } catch (e){
        console.log(errorMessage)
      }
    }
  }
}
