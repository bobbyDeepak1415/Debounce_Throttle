import React from 'react'
import useFetchData from './useFetchData'

const Practice2 = () => {

  const { products } = useFetchData("https://dummyjson.com/products?limit=20");


  return (
    <div>

<h1>Hello</h1>
<ul>
  
</ul>
{products.map((product)=>{
  return <li key={product.id}>{product.title}</li>
})}
      
    </div>
  )
}

export default Practice2
