interface Reportable {
  summary(): string
}

const oldCivic = { 
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink = {
  color: "brown",
  sugar: 40,
  summary(): string{
    return `This drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (car: Reportable): void => {
 printSummary(car)
}

printSummary(oldCivic)
printSummary(drink)