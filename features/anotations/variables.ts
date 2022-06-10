// type annotations:

const apples : number = 5
let speed : string = "fast"

let nothing : null = null

// built in objects

let now : Date = new Date()


//array:

let color : string[] = ["red", "green", "blue"]
let myNumbers : number[] = [1,2,3,4,5]


//classes

class Car {

}

let car :Car = new Car()


//object literal

let point : { x: number; y: number } = {
    x: 10,
    y: 20
}

//function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// when to use annotations:
// 1) function that returns "any" type

const json = "{x : 20, y : 10}"

const coordinates: {x: number; y: number} = JSON.parse(json)

console.log(coordinates)

// 2) when we declare a variable in one line and initialize it later

let words =["red", "green", "blue"]

let foundWord: boolean

for(let i = 0; i < words.length; i++){
    if(words[i] === "green"){
        foundWord = true
    }
}

// 3) variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12]
let numberAboveZero : boolean | number = false

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
