import { Request,Response } from "express";
import connection from "../dbconfig";
import Quiz from "../model/quiz.model";
const createQuiz = async(req : Request,res:Response):Promise<void> => {
       const newquiz:Quiz = req.body;
       connection.query(`INSERT INTO quiz set ?`,[newquiz])
       res.json({
              success:true,
              message : "quiz Created"
       })      
}
const getquizes = async(req : Request,res : Response):Promise<void> => {
       connection.query(`select * from quiz`,(err,results) => {
              res.json({
                    results
              })
       });
      
}

const updateQuiz = async(req:Request,res: Response) : Promise<void> => {
       const id = req.params.id;
       console.log(id)
       const updatedQuiz:Quiz = req.body;
       connection.query(`update quiz set ? where id = ?`,[updatedQuiz,id])
       res.json({
              success:true,
              message : "Quiz updated"
       })
}
const deleteQuiz = async(req:Request,res: Response) : Promise<void> => {
       const id = req.params.id;
      
       connection.query(`Delete from quiz where id = ?`,[id])
       res.json({

              message : "Quiz deleted"
       })
}

export {createQuiz,getquizes,updateQuiz,deleteQuiz}