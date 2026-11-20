import React, { useEffect, useMemo, useState } from 'react'



const Practice = () => {
  const url="https://dummyjson.com/users"

const [userNames,setUserNames]=useState([])
const [item,setItem]=useState("")

const [localValue,setLocalValue]=useState("")


useEffect(()=>{
const fetchData=async()=>{
const res=await fetch(url)
const response=await res.json()

const firstNames=response.users.map((user)=>user.firstName)
setUserNames(firstNames)
console.log(firstNames)


}

fetchData()
},[])

const myDebounce=(func,delay)=>{
let timer=0

return function(...args){
    clearTimeout(timer)
timer=setTimeout(()=>{
    func(...args)
},delay)
}

}

const debounceFunc=useMemo(()=>{
return myDebounce((value)=>{
setItem(value)
},1000)
})

const handleChange=(e)=>{
setLocalValue(e.target.value)
debounceFunc(e.target.value)



}

const filteredNames=userNames.filter((name)=>name.toLowerCase().includes(item.toLowerCase()))

  return (
    <div>
      <input value={localValue} onChange={handleChange}/>
      <div>
        <ul>
          {filteredNames.map((name,index)=>{
            return <li key={index}>{name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Practice
