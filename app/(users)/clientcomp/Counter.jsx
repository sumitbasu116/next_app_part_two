import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        
        <>
        <button className="bg-red-400 text-black p-5" onClick={()=>setCount((prev)=>prev+1)}>Add Me:{count}</button>
        </>
    )
}

export default Counter;