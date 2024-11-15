const todos = [
    { task: 'learn react', id: crypto.randomUUID() },
    { task: 'make a portfolio', id: crypto.randomUUID() },
    { task: 'make projects', id: crypto.randomUUID() }
];

export default function TodosList(){
    return (
        <ul>
            <h1>To Do List</h1>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>    
            ))}
        </ul>
    );
}