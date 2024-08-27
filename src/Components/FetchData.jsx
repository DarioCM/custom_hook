import React from 'react';
// Importing the UseFetch custom hook from the UseFetch.jsx file
import UseFetch from "./UseFetch.jsx";

const FetchData = () => {

    // Using the UseFetch custom hook to fetch data from the URL and storing it in the data variable
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);

    return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
     </ul>
    </>
  )
}

export default FetchData