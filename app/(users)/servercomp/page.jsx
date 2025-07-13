'use client'
const ServerComponent = ()=>{
    return(
        <>
        <h1>Hello ServerComponent!</h1>
        <button className="bg-amber-400 text-black p-5" onClick={()=>alert('Hii ServerComponent')}>Click Me</button>
        </>
    );
};
export default ServerComponent;