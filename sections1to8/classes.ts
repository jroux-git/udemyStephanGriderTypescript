class Vehicle {
  constructor(pColor: string) {
    this.color = pColor;
  }
  public color: string;

  protected drive(): void {
    console.log('vroom');
  };

  public honk() : void {
    console.log('beep');
  };
}

class Car extends Vehicle {
  // constructor(pColor: string) {
  //   super(pColor);
  // }

  drive(): void {
    console.log('hnnnnnnnn');
  };
}

const car = new Car('blue');
car.drive();
car.honk();
console.log(car.color);

const vehicle = new Vehicle('red');
//vehicle.drive();  // test protected
console.log(vehicle.color);