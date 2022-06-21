import { User } from "./models/User";

const user = new User({name: "MyName", age: 20})

user.on("change", () => {
    console.log("changing #1")
})

user.trigger("change")