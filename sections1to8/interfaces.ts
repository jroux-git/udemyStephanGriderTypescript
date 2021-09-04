interface IVehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic: IVehicle = {
  name: 'civic',
  year: new Date('2000-02-11'),
  broken: false,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year.toLocaleDateString()}\nBroken: ${this.broken}`;
  }
};

const printVehicle = (vehicle: IVehicle): void => {
  console.log(vehicle.summary());
} 

printVehicle(oldCivic);