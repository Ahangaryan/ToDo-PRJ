import EditBtn from "./Icons/editBtn";
import RemoveBtn from "./Icons/removeBtn";


export default function ToDolistItem ({todo, onRemove, onEdit, isEditing, editValue, onEditChange, onEditSave, onEditKeyDown, onToggle}){
    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            <div>
                <input type="checkbox" checked={todo?.status} onChange={onToggle} className="" />
                {isEditing ? (
                    <input
                        className="inline-block mt-1 ml-2 border px-1 rounded"
                        value={editValue}
                        onChange={onEditChange}
                        onBlur={onEditSave}
                        onKeyDown={onEditKeyDown}
                        autoFocus
                    />
                ) : (
                    <p className={`inline-block mt-1 ml-2 text-black ${todo?.status ? "line-through text-gray-400" : ""}`}>{todo?.title}</p>
                )}
            </div>
            <div className="absolute right-0 flex items-center space-x-1">
                <button type="button" onClick={onEdit}><EditBtn/></button>
                <button type="button" onClick={onRemove}><RemoveBtn/></button>
            </div>
        </li>
    )
}