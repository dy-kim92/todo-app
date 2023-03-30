import logo from './logo.svg';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';

function App() {
    return (
        <TodoTemplate>
            <TodoInsert />
        </TodoTemplate>
    );
}

export default App;
