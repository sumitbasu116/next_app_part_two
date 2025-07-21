const DataFetchServer = async (props) => {

    const searchParams = await props.searchParams;

    const name = searchParams.name;

    if (!name) {
        return (
            <div style={{backgroundColor:"darkgrey"}}>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    No Name Provided
                </h1>
                <h3 className="text-gray-600">Please add ?name=yourname to the URL</h3>
            </div>
        );
    }

    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    console.log(data);

    return (
        <h1>Data Fetching: {data.name}</h1>
    );
}

export default DataFetchServer;