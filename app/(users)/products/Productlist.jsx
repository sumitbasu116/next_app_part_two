'use client'

import { useSearchParams } from "next/navigation";

const ProductList = ()=>{

    const searchParamData = useSearchParams();

    console.log('inside',searchParamData);
    
    const page=searchParamData.getAll('page');
    const category = searchParamData.get('category');
    console.log('page:',page+" category:",category);

    return(
        <h1>Hello Product List</h1>
    );
}

export default ProductList;