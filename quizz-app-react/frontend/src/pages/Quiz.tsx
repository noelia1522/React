import React, { useState } from "react";
// import "./App.css";
import QuestionCard from "../components/QuestionCards";
import { fetchQuizQuestions } from "../API";
import { Difficulty, QuestionState } from "../API";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Quiz.css";
import { useAuthentication } from "../context/AuthenticationProvider";

export type userAnswersType = {
  question: string;
  answer: string;
  correct_answer: string;
  correct: boolean;
};

function Quiz() {
  const TOTAL_QUESTIONS = 10;
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<userAnswersType[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authContext= useAuthentication();

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correct_answer: questions[number].correct_answer,
      };
      //prev = [{q:"question1"aswer:"nscjkkj", correct: flase, correct_answer: "abc"}, {q:"...?"}, {}, {}]
      //[{q:"question1"aswer:"nscjkkj", correct: flase, correct_answer: "abc"}, {q:"...?"}, {}, {}, answerObject ]
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) setGameOver(true);
    else setNumber(nextQuestion);
  };

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setLoading(false);
    setNumber(0);
    setUserAnswers([]);
    console.log(questions);
  };
  const logoutHandler = async () => {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };
    fetch("/users/logout", requestOptions)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        authContext.onLogout();
        navigate("/login", { replace: true });
      });
  };

  return (
    <div className="quiz-container">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <Button
          className="start"
          variant="contained"
          onClick={startQuiz}
          sx={{
            maxWidth: "168px",
            maxHeight: "40px",
            padding: "10px 0",
            margin: "10px",
            textAlign:"center"
          }}
        >
          Start Quiz!
        </Button>
      ) : null}
      {!gameOver && (
        <div className="first-row">
          <div className="score">Score: {score}</div>
          <div className="number">
            Question: {number + 1}/ {TOTAL_QUESTIONS}
          </div>
        </div>
      )}

      {!loading && !gameOver && (
        <QuestionCard
          question={questions[number]?.question}
          answers={questions[number]?.answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
        ></QuestionCard>
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <Button
            variant="contained"
            onClick={nextQuestion}
            sx={{ maxWidth: "168px", padding: "10px 0", margin: "10px" }}
          >
            NextQuestion
          </Button>
        )}
      <Button
        variant="contained"
        onClick={logoutHandler}
        sx={{
          maxWidth: "168px",
          maxHeight: "40px",
          padding: "10px 0",
          margin: "10px",
          textAlign:"center"
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Quiz;