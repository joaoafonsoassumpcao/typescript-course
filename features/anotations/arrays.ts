const carMakers: string[] = []

const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [["f150"], ["corola"], ["camaro"]]

// help with inference when extracting values

const car = carMakers[0]
const myCar = carMakers.pop()

carMakers.map((car: string) => {
  return car.toUpperCase()
})


// flexible types

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"]