import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateQuiz = () => {
       let { id } = useParams<{ id: any }>();
       const navigate = useNavigate();
       const [quizQuestion, setquizQuestion] = useState("");
       const [option1, setoption1] = useState("");
       const [option2, setoption2] = useState("");
       const [option3, setoption3] = useState("");
       const [option4, setoption4] = useState("");
       const [answer, setanswer] = useState("");


       console.log(id)
       const handleSubmit = async () => {
              try {
                     if (!quizQuestion) {
                            throw new Error("Please write question")
                     }
                     if (!answer) {
                            throw new Error("Please write question")
                     }
                     const res = await axios.put(`http://localhost:3000/quiz/update-quiz/${id}`, { quizQuestion, option1, option2, option3, option4, answer })
                     console.log(res)
                     if (res.data.success) {
                            navigate("/dashboard");
                     }
              } catch (error: any) {
                     toast.error(error.message)
              }
       };

       return (
              <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
                     <div className="bg-white p-8 rounded-xl shadow-xl w-[80vw]  sm:w-[400px]">
                            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                                   ✏️ Edit Quiz
                            </h1>

                            <div className="space-y-3 ">

<div className="flex items-center gap-2 justify-center">
  <h1 className="font-bold md:text-4xl text-lg sm:text-2xl " >Q.</h1>
  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="✍️ Write Question"
    value={quizQuestion}
    onChange={(e) => setquizQuestion(e.target.value)}
  />
</div>


<div className="flex items-center gap-2 justify-center">
  <h1 className="font-bold md:text-4xl text-lg sm:text-2xl " >1.</h1>
  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="🔹 Option 1"
    value={option1}
    onChange={(e) => setoption1(e.target.value)}
  />
</div>
<div className="flex items-center gap-2 justify-center">
  <h1 className="font-bold md:text-4xl text-lg sm:text-2xl " >2.</h1>
  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="🔹 Option 2"
    value={option2}
    onChange={(e) => setoption2(e.target.value)}
  />

</div>
<div className="flex items-center gap-2 justify-center">
  <h1 className="font-bold md:text-4xl text-lg sm:text-2xl " >3.</h1>
  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="🔹 Option 3"
    value={option3}
    onChange={(e) => setoption3(e.target.value)}
  />
</div>

<div className="flex items-center gap-2 justify-center">
  <h1 className="font-bold md:text-4xl text-lg sm:text-2xl " >4.</h1>
  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="🔹 Option 4"
    value={option4}
    onChange={(e) => setoption4(e.target.value)}
  />

</div>
<div className="flex items-center gap-2 justify-center"><h1 className="font-bold text-l " >Ans.</h1>
  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    placeholder="✅ Correct Answer"
    value={answer}
    onChange={(e) => setanswer(e.target.value)}
  />
</div>
</div>


                            <button
                                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg mt-4 shadow-md transition"
                                   onClick={handleSubmit}
                            >
                                   {id ? "✅ Update" : "🚀 Create"} Quiz
                            </button>
                     </div>
              </div>

       );
};

export default UpdateQuiz;
