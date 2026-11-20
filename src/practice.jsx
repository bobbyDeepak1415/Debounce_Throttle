import axios from "axios";
import { useEffect, useState } from "react";


const Practice = () => {
  const [input, setInput] = useState("");
  
    const [userNames, setUserNames] = useState([]);


    useEffect(()=>{
const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      const result = response.data.users;
      setUserNames(result.map((u) => u.firstName));
    } catch (e) {
      console.log("failed to fetch...", e);
    }
  };

  fetchData();

    },[])


    


  return (
    <div>
      <h2>Hello</h2>
      <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <div>
        <ul>
          {userNames.map((user, id) => {
              return <li key={id}>{user}</li>;
            })}
        </ul>
      </div>
    </div>
  )
}

export default Practice
