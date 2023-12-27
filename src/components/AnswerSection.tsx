import { Answer } from "../types";

type AnswerProps = {
  answer: Answer;
  questionIndex: number;
  answerIndex: number;
  handleInputChange: (
    e: any,
    questionIndex: number,
    answerIndex: number
  ) => void;
};

const AnswerSection = ({
  answer,
  handleInputChange,
  questionIndex,
  answerIndex,
}: AnswerProps) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        name="text"
        value={answer.text}
        onChange={(e) => handleInputChange(e, questionIndex, answerIndex)}
        placeholder="Answer"
        className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-full"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          name="isTrue"
          checked={answer.isTrue}
          onChange={(e) => handleInputChange(e, questionIndex, answerIndex)}
          className="mr-2"
        />
        Correct
      </label>
    </div>
  );
};

export default AnswerSection;
