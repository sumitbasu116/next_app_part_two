
const Products = async ({searchParams})=>{
    const searchParamsData = await searchParams;
    const category = searchParamsData?.category || "all";
    const sort = searchParamsData?.sort || "default";
    const page=searchParamsData?.page || 1;
    
    return(
        <div>
            Showing {category} Products, sorted by {sort}, page {page}
        </div>
    );
}

export default Products;