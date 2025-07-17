import ProductList from "./Productlist";

const Products = async ({searchParams})=>{
    const searchParamsData = await searchParams;
    const category = searchParamsData?.category || "all";
    const sort = searchParamsData?.sort || "default";
    const page=searchParamsData?.page || 1;

    console.log('outer',searchParamsData);
    
    return(
        <div>
            <ProductList/>
            Showing {category} Products, sorted by {sort}, page {page}
        </div>
    );
}

export default Products;