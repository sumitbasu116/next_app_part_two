'use client';

import { use } from "react";

const SingleProfilePost =  (props)=>{
    
    
    const user = use( props.params);

    return(
        <h1>Hello User :{user.username} , Post : {user.statusId}</h1>
    )
}

export default SingleProfilePost;