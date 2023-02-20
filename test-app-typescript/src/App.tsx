import React from 'react';
import logo from './logo.svg';
import Todo from './Todo'
import Button from './Button'
import './App.css';

function App() {
  const todos=[
    {_id: 1, title: " wash dishes", isCompleted: true},
    {_id: 2, title: " wash car", isCompleted: false},
    {_id: 3, title: " cook", isCompleted: true},
    {_id: 4, title: " dance", isCompleted: false}
  ]
  return (
    <div className="App">
      <Button label="Click"></Button>
      {todos.map((todo)=> {
        return <Todo todo={todo}/>
      })}
    </div>
  );
}

export default App;
