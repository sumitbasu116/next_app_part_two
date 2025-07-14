const SingleProfilePost = async (props)=>{
    
    
    const user = await props.params;

    return(
        <h1>Hello User :{user.username} , Post : {user.statusId}</h1>
    )
}

export default SingleProfilePost;