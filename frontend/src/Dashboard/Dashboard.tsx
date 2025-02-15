import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Quiz {
  id: number;
  quizQuestion: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/quiz/get-quizes").then((res) => setQuizzes(res.data.results));
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3000/quiz/delete-quiz/${id}`);
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="p-8 bg-gradient-to-b via-gray-100 from-blue-300 to-green-200 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex  items-center justify-center flex-col">
          <h1 className="text-3xl font-extrabold text-gray-800">Welcome to Quizo</h1>

          <button
            className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 cursor-pointer rounded-lg mt-6 shadow-md transition font-semibold"
            onClick={() => navigate("/form")}
          >
            ➕ Create New Quiz
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {quizzes?.map((quiz: any) => (
            <div
              key={quiz.id}
              className="border bg-white p-5 rounded-lg shadow-md transition hover:shadow-lg hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-900">{quiz.quizQuestion}</h2>

              <div className="mt-3 space-y-1 text-gray-700">
                {quiz?.option1 && <p>🔹 {quiz.option1}</p>}
                {quiz.option2 && <p>🔹 {quiz.option2}</p>}
                {quiz.option3 && <p>🔹 {quiz.option3}</p>}
                {quiz.option4 && <p>🔹 {quiz.option4}</p>}
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md shadow-md transition cursor-pointer"
                  onClick={() => navigate(`/update-quiz/${quiz.id}`)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md shadow-md transition cursor-pointer"
                  onClick={() => handleDelete(quiz.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
