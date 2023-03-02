import React,{useEffect} from 'react';

type TodoInputProp = {
  addTodo: (task:string) => void;
};
type InputChangeEvent= React.ChangeEvent<HTMLInputElement> & {
  target:HTMLInputElement
}

type FormChangeEvent = React.FocusEvent<HTMLFormElement>

export const TodoInput = ({  addTodo }: TodoInputProp) => {
  const [task, setTask] = React.useState<string>('');

  
  const handleChange = (e: InputChangeEvent) => {
    setTask((prevtask) => e.target.value);
  };
  const handleSubmit = (e: FormChangeEvent) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
    console.log(task);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          name="task"
          placeholder="Create a new todo"
          onChange={handleChange}
        />
        <button >Add</button>
      </form>
    </div>
  );
};
