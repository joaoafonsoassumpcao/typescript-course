class Vehicle{

  constructor(public color: string){}


  protected drive(): void{
    console.log("rumm")
  }
}


const vehicle = new Vehicle("blue")


class Car extends Vehicle {

  constructor(public wheels: number, color: string){
    super(color)
  }

  drive(): void {
    console.log("vruum")
  }

  startDrivingProcess(): void {
    this.drive()
  }
}

const car = new Car(4, "grey")
car.startDrivingProcess()