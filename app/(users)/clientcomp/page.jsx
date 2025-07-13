'use client'
const ClientComponent = ()=>{
    return(
        <>
        <h1>Hello ClientComponent!</h1>
        <button className="bg-amber-400 text-black p-5" onClick={()=>alert('Hii')}>Click Me</button>
        </>
    );
};
export default ClientComponent;