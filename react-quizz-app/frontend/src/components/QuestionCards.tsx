import React from "react";
//types
import { userAnswersType } from "../App";
type QCProps = {
  question: string;
  answers: string[];
  callback: any; //change later
  questionNumber: number;
  totalQuestions: number;
  userAnswer: userAnswersType | undefined;
};

const QuestionCard: React.FC<QCProps> = ({
  question,
  answers,
  callback,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNumber}/ {totalQuestions}
      </p>
      <p className="question">{question}:</p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button
              key={answer}
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
            >
              {answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
