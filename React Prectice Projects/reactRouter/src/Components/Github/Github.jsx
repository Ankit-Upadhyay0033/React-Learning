// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import React from "react";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ankit-Upadhyay0033')
    //     .then(response => response.json()) 
    //     .then(data => {
    //          console.log(data);
    //          setData(data)
    //     })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers : {data.followers}

            <img src={data.avatar_url} alt="git-picture" width={300} />
        </div>
    )
}
export default Github;

export const gitHubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Ankit-Upadhyay0033')
    return response.json()
}