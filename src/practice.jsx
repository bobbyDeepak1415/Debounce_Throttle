




const person1={
  name:"bobby",
  age:30,
  adress:{
    city:"ongole",
    state:"AP"
  }
}


const person2=JSON.parse(JSON.stringify(person1))

person2.name="Deepak"
person2.adress.city="Bengaluru"

console.log(person2)
console.log(person1)


