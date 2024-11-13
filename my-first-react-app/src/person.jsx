const person = {
    name: 'A Bhagya Charan',
    theme: {
        background: 'black',
        color: 'lightblue'
    }
};

export default function ToDoList(){
    return (
        <div style={person.theme}>
            <h1>{person.name}'s To Do List</h1>
            <ul>
                <li>Learn React</li>
                <li>Build Project</li>
            </ul>
        </div>
    );
}