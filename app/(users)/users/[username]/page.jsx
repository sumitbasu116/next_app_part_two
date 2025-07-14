const SingleProfile = async (props)=>{
    
    
    const name = await props.params;

    console.log(name);

    return(
        <h1>Hello Single Name</h1>
    )
}

export default SingleProfile;