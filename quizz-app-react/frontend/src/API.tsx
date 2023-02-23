import _ from "lodash";
export enum Difficulty {
  EASY = "easy",
  MEDIUM="medium",
  HARD="hard"

  }
export type Question ={
  category: string,
  correct_answer: string,
  incorrect_answers : string [],
  question: string,
  type: string,
  difficulty: string
}
export type QuestionState = Question & {answers:string[]}
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty )=>{


  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=12&difficulty=${difficulty}&type=multiple`
  const res = await fetch(endpoint);
  const data = await res.json();
  // console.log(data);

  return data.results.map((question: Question)=>({
    ...question,
    answers: _.shuffle([...question.incorrect_answers, question.correct_answer])
  }))

}