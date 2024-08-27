import React, { useEffect, useState } from 'react'

// Creating a custom hook named UseFetch
const UseFetch = (url) => {

    // Using the useState hook to store the fetched data
    const[data,setData]=useState();

    // Using the useEffect hook to fetch data from the URL
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
            .then((data)=>setData(data))
    },[]) // Passing an empty array as the second argument to useEffect to ensure that the fetch request is made only once
    // Returning the fetched data
    return [data]
}

export default UseFetch