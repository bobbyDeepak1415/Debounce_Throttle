import React, { useEffect, useState } from 'react'



const Practice = () => {
  const url="https://dummyjson.com/users"

const [userNames,setUserNames]=useState([])
const [item,setItem]=useState("")


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

const handleChange=(e)=>{
setItem(e.target.value)


}

const filteredNames=userNames.filter((name)=>name.toLowerCase().includes(item.toLowerCase()))

  return (
    <div>
      <input value={item} onChange={handleChange}/>
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
