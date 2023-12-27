import React, { useContext, useState, useEffect } from "react";
import QuestionSection from "./QuestionSection";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizContext } from "./QuizContext";
import { Quiz } from "../types";

const QuizForm = () => {
  const { addQuiz, updateQuiz, quizzes } = useQuizContext();
  const params = useParams();

  const navigate = useNavigate();

  const [quizData, setQuizData] = useState<Quiz>({
    title: "",
    description: "",
    score: 0,
    url: "",
    questions: [],
  });

  const [isEditting, setIsEditting] = useState(false);
  const paramsId = params && params?.id ? +params?.id : 0;
  useEffect(() => {
    if (!paramsId) return;

    const editQuiz = quizzes?.find((quiz) => quiz.id === paramsId);
    if (!editQuiz) return;
    setQuizData(editQuiz);
    setIsEditting(true);
  }, [paramsId]);

  const handleInputChange = (e: any) => {
    setQuizData((prevQuizData) => ({
      ...prevQuizData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleQuestionChange = (e: any, questionIndex: number) => {
    const { name, value } = e.target;
    setQuizData((prevQuizData) => {
      const updatedQuestions = [...(prevQuizData?.questions ?? [])];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        [name]: value,
      };
      return {
        ...prevQuizData,
        questions: updatedQuestions,
      };
    });
  };

  const handleAddQuestion = () => {
    setQuizData((prevQuizData) => ({
      ...prevQuizData,
      questions: [
        ...(prevQuizData.questions ?? []),
        {
          text: "",
          answers: [],
          feedbackTrue: "",
          feedbackFalse: "",
        },
      ],
    }));
  };

  const handleAddAnswer = (questionIndex: number) => {
    setQuizData((prevQuizData) => {
      const updatedQuestions = [...(prevQuizData.questions ?? [])];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        answers: [
          ...(updatedQuestions[questionIndex]?.answers ?? []),
          {
            text: "",
            isTrue: false,
          },
        ],
      };
      return {
        ...prevQuizData,
        questions: updatedQuestions,
      };
    });
  };

  const handleAnswerChange = (
    e: any,
    questionIndex: number,
    answerIndex: number
  ) => {
    const { name, value, type, checked } = e.target;

    setQuizData((prevQuizData) => {
      const updatedQuestions = [...(prevQuizData.questions ?? [])];
      const updatedAnswers = [
        ...(updatedQuestions[questionIndex]?.answers ?? []),
      ];
      updatedAnswers[answerIndex] = {
        ...updatedAnswers[answerIndex],
        [name]: type === "checkbox" ? checked : value,
      };
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        answers: updatedAnswers,
      };
      return {
        ...prevQuizData,
        questions: updatedQuestions,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    isEditting ? updateQuiz(quizData, paramsId) : addQuiz(quizData);
    setQuizData({
      title: "",
      description: "",
      score: 0,
      url: "",
      questions: [],
    });

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl mb-4">Create a Quiz</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Title:
          <input
            type="text"
            name="title"
            value={quizData.title}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </label>
        <label className="block mb-4">
          Description:
          <textarea
            name="description"
            value={quizData.description}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          ></textarea>
        </label>
        <label className="block mb-4">
          URL:
          <input
            type="text"
            name="url"
            value={quizData.url || ""}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </label>
        <label className="block mb-4">
          Score:
          <input
            type="number"
            name="score"
            value={quizData.score || 0}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </label>
        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Question
        </button>
        <br />
        {quizData?.questions?.map((question, questionIndex) => (
          <QuestionSection
            key={questionIndex}
            question={question}
            questionIndex={questionIndex}
            handleQuestionChange={handleQuestionChange}
            handleAddAnswer={handleAddAnswer}
            handleAnswerChange={handleAnswerChange}
          />
        ))}
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {isEditting ? "Edit Quiz" : "Create Quiz"}
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
