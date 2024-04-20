import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/JITGH')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setdata(data);
        })
    },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.id}
        <div className='flex justify-center items-center'>
        <img src={data.avatar_url} alt="Git pic"  width={300}/>
        </div>
        </div>
    )
}

export default Github
