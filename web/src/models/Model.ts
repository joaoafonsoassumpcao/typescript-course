import { AxiosPromise, AxiosResponse } from "axios"

type Callback = () => void

interface HasId {
  id?: number
}

interface ModelAtributtes<T> {
  set(value: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise

}

interface Events {
  on(eventName: string, callback: Callback): void
  trigger(eventName: string): void
}

export class Model<T extends HasId> {
  constructor(
    private atributtes: ModelAtributtes<T>,
    private events: Events,
    private sync: Sync<T>
  ){}

  on = this.events.on
  get = this.atributtes.get
  trigger = this.events.trigger

  

  set(update: T): void{
      this.atributtes.set(update)
      this.events.trigger("change")
  }

  fetch(): void {
      const id = this.atributtes.get("id")

      if(typeof id !== "number"){
          throw new Error("Cannot fetch without an ID")
      }

      this.sync.fetch(id).then((response: AxiosResponse): void => {
          this.set(response.data)
      })
  }

  save(): void{
      this.sync.save(this.atributtes.getAll())
      .then((response: AxiosResponse): void => {
          this.trigger("save")
      })
      .catch(() => {
          this.trigger("error")
      })
  }

}