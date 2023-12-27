import { Quiz } from "../types";
import AnswerSection from "./AnswerSection";
import { Link } from "react-router-dom";

type QuizCardProps = {
  quiz: Quiz;
};

const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-xl rounded-md mb-5">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl mb-4">{quiz.title}</h3>

          <Link to={`/quiz/${quiz?.id ?? "new"}`}>
            <button className="bg-white-300 text-blue-500 px-4 py-2 rounded-md">
              Edit Quiz
            </button>
          </Link>
        </div>
        <p className="">{quiz.description}</p>
        <p>{quiz.score}</p>
        <Link
          to={quiz.url ?? "https://google.com"}
          className="text-blue-400 underline"
        >
          {quiz.url}
        </Link>
      </div>

      {quiz?.questions?.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <h4 className="text-xl">Question {questionIndex + 1}</h4>
          <p>{question.text}</p>

          {question?.answers?.map((answer, answerIndex) => (
            <AnswerSection
              key={answerIndex}
              answer={answer}
              handleInputChange={() => {}}
              questionIndex={questionIndex}
              answerIndex={answerIndex}
            />
          ))}

          <p>Feedback for correct answer: {question.feedbackTrue}</p>
          <p>Feedback for incorrect answer: {question.feedbackFalse}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizCard;
