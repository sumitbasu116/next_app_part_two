const SingleProfile = async (props)=>{
    
    
    const user = await props.params;

    console.log(user.userName);

    return(
        <h1>Hello User : {user.userName}</h1>
    )
}

export default SingleProfile;