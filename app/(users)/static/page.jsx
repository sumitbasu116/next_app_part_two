import { db } from "@/config/db.jsx";
const StaticPage = async () => {
    const doctors = await db.execute("select * from Doctor");
    console.log(doctors);
    
    return (

        <>
            <h1>Hello Database</h1>
            <div>

            </div>
        </>
    );
}

export default StaticPage;