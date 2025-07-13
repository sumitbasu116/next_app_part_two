
const URL = "https://jsonplaceholder.typicode.com/posts";
const ServerComponent = async () => {

    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);

    return (
        <>
            <h1> Server Component!</h1>
            <ul className="grid grid-cols-3 gap-5">
                {
                    data.map(
                        (currElem,index)=>{
                            return <li key={index}>{currElem.body}</li>
                        }
                    )
                }
            </ul>

        </>
    );
};
export default ServerComponent;