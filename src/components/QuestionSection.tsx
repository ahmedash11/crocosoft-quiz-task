import React from "react";
import Answer from "./AnswerSection";
import { Question } from "../types";

type QuestionSectionProps = {
  question: Question;
  questionIndex: number;
  handleQuestionChange: (e: any, questionIndex: number) => void;
  handleAddAnswer: (questionIndex: number) => void;
  handleAnswerChange: (
    e: any,
    questionIndex: number,
    answerIndex: number
  ) => void;
};

const QuestionSection = ({
  question,
  questionIndex,
  handleQuestionChange,
  handleAddAnswer,
  handleAnswerChange,
}: QuestionSectionProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-xl mb-2">Question {questionIndex + 1}</h4>
      <label className="block mb-2">
        Question Text:
        <textarea
          name="text"
          value={question.text}
          onChange={(e) => handleQuestionChange(e, questionIndex)}
          required
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
        ></textarea>
      </label>
      <label className="block mb-2">
        Answers:
        {question?.answers?.map((answer, answerIndex) => (
          <Answer
            key={answerIndex}
            answer={answer}
            handleInputChange={(e) =>
              handleAnswerChange(e, questionIndex, answerIndex)
            }
            questionIndex={questionIndex}
            answerIndex={answerIndex}
          />
        ))}
        <br />
        <button
          type="button"
          onClick={() => handleAddAnswer(questionIndex)}
          className="bg-blue-500 text-white px-3 py-2 rounded-md mt-2"
        >
          Add Answer
        </button>
      </label>
      <label className="block mb-2">
        Feedback if True:
        <textarea
          name="feedbackTrue"
          value={question.feedbackTrue}
          onChange={(e) => handleQuestionChange(e, questionIndex)}
          required
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
        ></textarea>
      </label>
      <label className="block mb-2">
        Feedback if False:
        <textarea
          name="feedbackFalse"
          value={question.feedbackFalse}
          onChange={(e) => handleQuestionChange(e, questionIndex)}
          required
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
        ></textarea>
      </label>
      <hr className="my-4" />
    </div>
  );
};

export default QuestionSection;
