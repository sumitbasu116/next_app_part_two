import mysql from "mysql2/promise";
export const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "Sumit@123",
    database: "hospital_db"
});

try{
    const connection = await db.getConnection();
    console.log("Database Connected Successfully");
    connection.release();
    
}catch(err){
    connection.error("Database Connected Failed",err);
    process.exit(1);
}