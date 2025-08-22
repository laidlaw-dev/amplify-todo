import { useEffect, useState } from 'react';
import FullScreen from '@/layouts/FullPage';
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

import { Button } from './components/ui/button';
import TodoList from './features/todo/components/TodoList';

const client = generateClient<Schema>();

function App() {
    const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([]);

    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
    }, []);

    function createTodo() {
        client.models.Todo.create({ content: window.prompt('Todo content') });
    }

    function deleteTodo(id: string) {
        client.models.Todo.delete({ id });
    }

    return (
        <FullScreen>
            <Button onClick={createTodo}>+ new</Button>
            <TodoList todos={todos} onDelete={deleteTodo} />
        </FullScreen>
    );
}

export default App;
