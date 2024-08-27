import {useEffect, useState} from "react"; // Importing useEffect and useState from react

const UseFetch = (url) => {
    // Declaring a state variable data and setData
    const [data, setData] = useState();
    useEffect(() => {
        // Fetching data from the url
        fetch(url).then(response => response.json()) // Converting the response to JSON
            .then(data => setData(data)) // Setting the data to the state variable
    }, []) // End of useEffect
    return data; // Returning the data
}// End of UseFetch

export default UseFetch
