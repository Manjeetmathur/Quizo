import { Request,Response } from "express";
const STATIC_USER = {username : "teacher",password : "teacher123"};

export const login = async(req:Request,res:Response) : Promise<void> => {
       try {
              const {username,password} = req.body 
              console.log(username,password)
              if(username === STATIC_USER.username && password === STATIC_USER.password)
              {
                     res.json({ 
                            success: true,
                            message : "user logged in successfully"
                     })
              }else{
                     res.json({ 
                            success: false,
                            message : "user not found"
                     })
              }

              
       } catch (error) {
              res.json({ 
                     success: false,
                     message : "user not found"
              })
       }
}