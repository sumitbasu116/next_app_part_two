import { db } from "@/config/db.jsx";
const StaticPage = async () => {
    const [doctors] = await db.execute("select * from Doctor");
    console.log(doctors);
    
    return (

        <>
            <h1>Hello Database</h1>
            <div>
                <ul>
                {
                    doctors.map((doctor)=>{
                      return <li key={doctor.id}>{doctor.first_name}</li> 
                    })
                }
                </ul>
            </div>
        </>
    );
}

export default StaticPage;