const DataFetchServer = async ()=>{
    const res = await fetch("https://api.genderize.io/?name=Sumit");
    const data = await res.json();
    console.log(data);
    
    return(
        <h1>Data Fetching: {data.name}</h1>
    );
}

export default DataFetchServer;