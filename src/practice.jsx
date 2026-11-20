import axios from "axios";
import { useEffect, useMemo, useState } from "react";


const Practice = () => {
  const [input, setInput] = useState("");
  
    const [userNames, setUserNames] = useState([]);

    const [localValue,setLocalValue]=useState("")

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
setInput(value)
},800)
    },[])

    const handleChange=(e)=>{

setLocalValue(e.target.value)
debounceFunc(e.target.value)

    }



    const filteredNames=userNames.filter((name)=>name.toLowerCase().includes(input.toLowerCase()))
    


  return (
    <div>
      <h2>Hello</h2>
      <input value={localValue} onChange={handleChange}></input>
      <div>
        <ul>
          {filteredNames.map((user, id) => {
              return <li key={id}>{user}</li>;
            })}
        </ul>
      </div>
    </div>
  )
}

export default Practice
