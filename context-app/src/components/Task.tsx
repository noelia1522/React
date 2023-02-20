import { Userconsumer } from "../MyContext";
type TaskProps = {
  task: {
    text: string;
  };
};

const Task = ({ task }: TaskProps) => {
  //3.add the useContext hook to the consumer children
  const context = Userconsumer();
  return (
    <div className="task">
      <h1>
        {context?.user.firstname} buys {task.text}
      </h1>
    </div>
  );
};

export default Task;
