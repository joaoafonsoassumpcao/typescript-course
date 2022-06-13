import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"

const numbersCollection = new NumbersCollection([10, 1, 0, -10, 22, 11,5])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)