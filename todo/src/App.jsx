import { useState } from "react";

export default function App({name}) {

  const [todos, setTodos] = useState(["Complete React","Learn Node"]);
  const [inputVal, setInputVal] = useState("");

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todos, inputVal]);
    setInputVal("");
  }

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
         type="text"
         name="task-entry"
         value={inputVal}
         onChange={handleChange} 
        />
        <button type="submit">Add</button>
      </form>
      <h4>All the Tasks to do: </h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </section>
  )
}