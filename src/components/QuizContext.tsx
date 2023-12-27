import { ReactNode, createContext, useContext, useState } from "react";
import { defaultQuestions } from "../constants";
import { Quiz } from "../types";

type QuizContextType = {
  quizzes?: Quiz[];
  addQuiz: (quiz: Quiz) => void;
  updateQuiz: (quiz: Quiz, id: number) => void;
} | null;

type Props = {
  children: ReactNode;
};

const QuizContext = createContext<QuizContextType>(null);

const QuizProvider = ({ children }: Props) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(defaultQuestions);

  const addQuiz = (quizData: Quiz) => {
    setQuizzes((prevQuizzes) => [...prevQuizzes, quizData]);
  };

  const updateQuiz = (quizData: Quiz, id: number) => {
    const originalQuizIdx = quizzes.findIndex((quiz) => quiz.id === id);
    if (originalQuizIdx === -1) return;

    const removeFromQuizzes = quizzes.filter((quiz) => quiz.id !== id);
    setQuizzes([...removeFromQuizzes, quizData]);
  };

  return (
    <QuizContext.Provider value={{ quizzes, addQuiz, updateQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error(
      "useCompaniesContext must be used within a CompaniesProvider"
    );
  }
  return context;
};

export { QuizProvider, useQuizContext };
