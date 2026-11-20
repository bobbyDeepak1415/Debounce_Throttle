import React, { useEffect, useMemo, useState } from 'react'

const Practice = () => {

  const [item,setItem]=useState("")
  const [localValue,setLocalValue]=useState("")
  const [users,setUsers]=useState([])


  const url="https://dummyjson.com/users"


  useEffect(()=>{
const fetchData=async()=>{
  const res=await fetch(url)
  const response=await res.json()
  // console.log(response.users)
  
  const userNames=response.users.map((user)=>{
    return {
      name:user.firstName
    }
  })
  
  // console.log(userNames)

  setUsers(userNames)

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
  },[])

  const handleChange=(e)=>{
setLocalValue(e.target.value)
debounceFunc(e.target.value)
  }


  const filteredNames=users.filter((user)=>user.name.toLowerCase().includes(item.toLowerCase()))
  
  return (
    <div>

      <input value={localValue} onChange={handleChange}/>

      <div>
        <ul>

        {filteredNames.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
        </ul>
      </div>
      
    </div>
  )
}

export default Practice
