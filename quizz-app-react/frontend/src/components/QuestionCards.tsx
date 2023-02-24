import React from "react";
//types
import { userAnswersType } from "../pages/Quiz";
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
    <div className="card-container">
      <p className="number">
        Question: {questionNumber}/ {totalQuestions}
      </p>
      <p className="question">{question}:</p>
      <div className="answers-container">
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
