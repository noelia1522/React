import react from "react";

interface todoProps {
  todo?: {
    _id: number;
    title: string;
    isCompleted: boolean;
  };
}
export default function Todo({ todo }: todoProps) {
  const h1 = <h1>{todo?.title}</h1>;
  const text = todo?.isCompleted ? <del>{h1}</del> : h1;
  return <div data-testid={`todo-${todo?._id}`}> {text}</div>;
}
