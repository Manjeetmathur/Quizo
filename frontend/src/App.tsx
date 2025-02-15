import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Login/Login"
import QuizForm from "./Quizform/QuizForm"
import { Toaster } from "react-hot-toast"
import UpdateQuiz from "./Update-quiz/UpdateQuiz"

function App() {
  return (
    <div className=" ">
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/form" element={<QuizForm/>}/>
          <Route path="/update-quiz/:id" element={<UpdateQuiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
