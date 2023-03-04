import { useEffect, useState } from 'react'
import axios from 'axios'
function useFetch(url) {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  useEffect(()=>{
    const FetchData = async ()=>{
        try {
            setLoading(true)
            const respond = await axios.get(`${import.meta.env.VITE_REACT_API_URL}${url}`,{
              headers:{
                Authorization:'bearer'+import.meta.env.VITE_REACT_API_TOKEN_KEY
              }
            })
            setData(respond)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    FetchData()
  },[url])
  return {data,loading,error}
}

export default useFetch