
const Products = async ({searchParams})=>{
    
    const category = searchParams?.category || "all";
    const sort = searchParams?.sort || "default";
    const page=searchParams?.page || 1;
    
    return(
        <div>
            Showing {category} Products, sorted by {sort}, page {page}
        </div>
    );
}

export default Products;