const SingleProfile = async (props)=>{
    
    
    const user = await props.params;

    console.log(user.username);

    return(
        <h1>Hello User : {user.username}</h1>
    )
}

export default SingleProfile;