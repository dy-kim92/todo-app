import logo from './logo.svg';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function App() {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
    );
}

export default App;
