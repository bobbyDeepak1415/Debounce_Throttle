import React, { useEffect, useState } from "react";

const Practice = () => {

  const [userNames,setUserNames]=useState([])

  const [query,setQuery]=useState("")


  useEffect(()=>{

    const fetchData=async()=>{
      try{

        const res=await fetch("https://dummyjson.com/users")
        const response=await res.json()
        // console.log(response.users)

        const firstNames=response.users.map((user)=>{
          return {
            name:user.firstName
          }
        })

        setUserNames(firstNames)
      }catch(err){
        console.log("failed to fetch...",err)
      }
    }

    fetchData()
  },[])

  console.log(userNames)

  const filteredNames=userNames.filter((user)=>user.name.toLowerCase().includes(query.toLowerCase()))

  return <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
    <h2>UserNames List:</h2>

    <input value={query} onChange={(e)=>setQuery(e.target.value)}/>
<ul>

    {userNames.map((user)=>{
      return <li key={user.id}>{user.name}</li>
    })}
    </ul>


  </div>;
};

export default Practice;
