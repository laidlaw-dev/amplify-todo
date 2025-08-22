import React from 'react';
import TodoDisplay from './TodoDisplay';
import { type Todo } from '@/types';
import { Card } from '@/components/ui/card';

type TodoListProps = {
    todos: Todo[];
    onDelete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
    const emptyList = () =>
        todos.length === 0 ? (
            <p className="text-gray-500">No todos found.</p>
        ) : null;

    return (
        <Card className="w-100 p-4">
            {emptyList()}
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center p-3 bg-white rounded shadow-sm"
                    >
                        <TodoDisplay todo={todo} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default TodoList;
