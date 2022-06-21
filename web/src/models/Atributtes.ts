import { User, UserProps } from "./User"

export class Atributtes<T> {
  constructor(private data: T){}

  get = <K extends keyof T> (key: K): T[K] => {
    return this.data[key]
  }

  set(update: T){
    Object.assign(this.data, update)

  }

  getAll(): T {
    return this.data
  }
}


const attrs = new Atributtes<UserProps>({
  id: 5,
  name: "Nameeee",
  age:25
})

const name = attrs.get("name")