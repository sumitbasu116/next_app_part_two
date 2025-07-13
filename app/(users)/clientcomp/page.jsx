'use client'

import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComponent = () => {

    const [postData, setPostData] = useState([]);

    useEffect(()=>{
      const fetchData = async  () => {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);

            setPostData(data);
            return data;
        };
        fetchData();
     } ,[]);

    return (
        <>
            <h1>Hello ClientComponent!</h1>
            <button className="bg-amber-400 text-black p-5" onClick={() => alert('Hii')}>Click Me</button>

            <ul className="grid grid-cols-3 gap-5">
                {
                    postData.map(
                        (currElem,index)=>{
                            return <li key={index}>{currElem.body}</li>
                        }
                    )
                }
            </ul>

        </>
    );
};
export default ClientComponent;