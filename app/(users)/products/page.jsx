
const Products = async (props)=>{
    const searchParamsData = await props.searchParams;
    console.log(searchParamsData);
    
    return(
        <h1>Hello Products</h1>
    );
}

export default Products;