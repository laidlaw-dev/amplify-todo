import { Button } from '@/components/ui/button';
import { type Todo } from '@/types/index';
import { CircleXIcon } from 'lucide-react';

interface TodoDisplayProps {
    todo: Todo;
    onDelete: (id: string) => void;
}

const TodoDisplay = ({ todo, onDelete }: TodoDisplayProps) => {
    return (
        <>
            <h2 className="flex-1">{todo.content}</h2>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(todo.id)}
            >
                <CircleXIcon />
            </Button>
        </>
    );
};

export default TodoDisplay;
