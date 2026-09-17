import React, { useEffect, useState } from "react";

const Practice = () => {

  const [userNames,setUserNames]=useState([])


  useEffect(()=>{

    const fetchData=async()=>{
      try{

        const res=await fetch("https://dummyjson.com/users")
        const response=await res.json()
        console.log(response.users)

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

  return <div>
    <h2>UserNames List:</h2>
<ul>

    {userNames.map((user)=>{
      return <li key={user.id}>{user.name}</li>
    })}
    </ul>


  </div>;
};

export default Practice;
