import QuizCard from "./QuizCard";
import { Link } from "react-router-dom";
import { useQuizContext } from "./QuizContext";

const QuizList = () => {
  const { quizzes } = useQuizContext();

  return (
    <div className="">
      <div className="flex justify-between items-center max-w-md mx-auto mb-4">
        <h2>Quiz List</h2>

        <Link to="/quiz/new">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create Quiz
          </button>
        </Link>
      </div>
      {quizzes?.map((quiz, index) => (
        <QuizCard key={index} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizList;
