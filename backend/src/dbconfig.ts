import mysql from 'mysql'

const connection = mysql.createConnection({
       host:'127.0.0.1',
       user:'root',
       password:'',
       database:'man'
})

export default connection

// import { createPool } from "mysql";
// export const connect = async()=>{
//        const connection = await createPool({
//               host : "127.0.0.1",
//               user:"root",
//               password:"",
//               database:"man",
//               connectionLimit:10
//        })
//        return connection
// }
