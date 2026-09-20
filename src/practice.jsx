


import React, { useEffect, useState } from 'react'

const Practice = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // return () => clearInterval(id);
  }, []);

  return <div>count at:{count}
  
  </div>;
}

export default Practice
