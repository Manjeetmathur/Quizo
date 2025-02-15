import mysql from 'mysql'
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const connection = mysql.createConnection({
       host:`${process.env.host}`,
       user:`${process.env.user}`,
       password:`${process.env.password}`,
       database:`${process.env.database}`
})


export default connection

