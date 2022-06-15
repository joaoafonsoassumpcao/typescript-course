import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbersCollection = new NumbersCollection([10, 1, 0, -10, 22, 11,5])
numbersCollection.sort()
console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection("xavbcdeujl")
// const sorterChars = new Sorter(charactersCollection)
// sorterChars.sort()
// console.log(charactersCollection.data)

// const linkedList = new LinkedList()
// linkedList.add(500)
// linkedList.add(10)
// linkedList.add(0)
// linkedList.add(-10)
// linkedList.add(4)
// linkedList.add(-2)


// console.log(sorter)
// linkedList.print()


