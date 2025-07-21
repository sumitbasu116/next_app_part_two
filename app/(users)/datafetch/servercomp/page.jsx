const DataFetchServer = async (props)=>{
    
    const searchParams= await props.searchParams;

    const name = searchParams.name;

    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    console.log(data);
    
    return(
        <h1>Data Fetching: {data.name}</h1>
    );
}

export default DataFetchServer;