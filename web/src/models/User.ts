import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Atributtes } from "./Atributtes"
import { AxiosResponse } from "axios"

export interface UserProps{
    name?: string
    age?:number
    id?: number
}

const rootUrl = "http://localhost:3000/users"

export class User {
    
    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
    public atributtes: Atributtes<UserProps>

    constructor(attrs: UserProps){
        this.atributtes = new Atributtes<UserProps>(attrs)
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    get get(){
      return  this.atributtes.get
    }

    set(update: UserProps): void{
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