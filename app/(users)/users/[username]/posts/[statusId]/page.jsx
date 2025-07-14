const SingleProfilePost = async (props)=>{
    
    
    const userPost = await props.params;

    console.log(userPost.statusId);

    return(
        <h1>Hello User Post : {userPost.statusId}</h1>
    )
}

export default SingleProfilePost;