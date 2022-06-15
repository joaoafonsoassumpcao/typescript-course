class ArrayOfAnything<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index]
  }
}

const arrStr = new ArrayOfAnything(["a", "b", "c"])

function printAnything<T>(arr: T[]): void {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}
