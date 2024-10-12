let myArr = [1, 2]

let myObj = {
    name: "Daniyal",
    num: 20
}

// Now we will add a property in base object to that every func array  obj and string can access this property
Object.prototype.addDaniyal = () => {
    console.log("Daniyal is present in base Object")
}

// But if we ass a property in Arrays that only arrays can have its access not obj fun and string
Array.prototype.arrDaniyal = () => {
    console.log("Daniyal is only in arrays")
}

myArr.addDaniyal()
myObj.addDaniyal()

myArr.arrDaniyal()
// myObj.arrDaniyal() //this will give 