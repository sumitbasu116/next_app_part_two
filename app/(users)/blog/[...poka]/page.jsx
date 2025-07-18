const Blog = async (props)=>{
    
    const {poka} = await props.params;

    console.log(poka);
    

    return(
        <h1>Welcome Blog</h1>
    );
}

export default Blog;
