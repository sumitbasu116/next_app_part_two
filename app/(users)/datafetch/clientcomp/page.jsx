'use client'
import { Suspense } from "react";
import ClientComp from "./ClientComp";



const DataFetchClient = () => {

    return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComp />
    </Suspense>
  );
    
}

export default DataFetchClient;