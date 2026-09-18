import React, { useEffect, useState } from "react";

const Practice = () => {

  const [userNames,setUserNames]=useState([])

  const [query,setQuery]=useState("")


  useEffect(()=>{

    const fetchData=async()=>{
      try{

        const res=await fetch("https://dummyjson.com/users")
        const response=await res.json()

        const firstNames=response.map((user)=>{
          return {
            name:user.firstNAME
          }
        })
        
        setUserNames(firstNames)
      }catch(err){
        console.log("failed to fetch...",err)
      }
    }

    fetchData()
  },[])


  const filteredNames=userNames.filter((user)=>user.firstName.toLowerCase().includes(query.toLowerCase()))

  return <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
    <h2>UserNames List:</h2>

    <input value={query} onChange={(e)=>setQuery(e.target.value)}/>

    {!query? (
<p>Search for user</p>
    ):(
<ul>

    {filteredNames.map((user)=>{
      return <li key={user.id}>{user.name}</li>
    })}
    </ul>

    )}


  </div>;
};

export default Practice;
