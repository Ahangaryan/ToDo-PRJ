import ToDolistItem from "./TodolistItem";

export default function ToDoList ({todos, onRemove, onEdit, editIndex, editValue, onEditChange, onEditSave, onEditKeyDown, onToggle}) {
        //     console.log (todos);

    return (
        <ul className="list-reset">
            {todos.map((todo1, index) => (
                <ToDolistItem
                    key={index}
                    todo={todo1}
                    onRemove={() => onRemove(index)}
                    onEdit={() => onEdit(index)}
                    isEditing={editIndex === index}
                    editValue={editValue}
                    onEditChange={onEditChange}
                    onEditSave={() => onEditSave(index)}
                    onEditKeyDown={(e) => onEditKeyDown(e, index)}
                    onToggle={() => onToggle(index)}
                />
            ))}
        </ul>
    )
}