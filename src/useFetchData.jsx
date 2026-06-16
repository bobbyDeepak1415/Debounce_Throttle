import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchProds=async ()=>{
            try{

                const res=await axios.get(url)
                setProducts(res.data.products)
            }catch(er){
                console.log("failed to fetch...",er)
            }
        }

        fetchProds()
    })

  return {products}
}

export default useFetchData
