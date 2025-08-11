
import { useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDo() {
    const [todos, setTodos] = useState ([
        {
            title:'This is first todo list item',
            status:false
        },
        {
            title:'This is second todo list item',
            status:true
        }
    ]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const onChangeHandlerinput = (event) => {
        // console.log(event);
    }
    const onKeyDownEnter = (event) => {
        if (event.key==='Enter' && event.title!== '') {
            const value = event.target.value.trim();
            if (value !== "") {
                setTodos([
                    ...todos,
                    {
                        title: value,
                        status: false
                    }
                ]);
                event.target.value = "";
            }
        }
    }
    
    const handleRemove = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(todos[index].title);
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleEditSave = (index) => {
        if (editValue.trim() !== "") {
            const newTodos = [...todos];
            newTodos[index].title = editValue.trim();
            setTodos(newTodos);
            setEditIndex(null);
            setEditValue("");
        }
    };

    const handleEditKeyDown = (e, index) => {
        if (e.key === "Enter") {
            handleEditSave(index);
        }
        if (e.key === "Escape") {
            setEditIndex(null);
            setEditValue("");
        }
    };

    const handleToggle = (index) => {
        setTodos(todos.map((todo, i) =>
            i === index ? { ...todo, status: !todo.status } : todo
        ));
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text"
                        onKeyDown={onKeyDownEnter}
                        placeholder="What needs to be done today?"
                        className="w-full px-2 py-3 border rounded outline-none border-gray-300" />
                </div>
                <ToDoList
                    todos={todos}
                    onRemove={handleRemove}
                    onEdit={handleEdit}
                    editIndex={editIndex}
                    editValue={editValue}
                    onEditChange={handleEditChange}
                    onEditSave={handleEditSave}
                    onEditKeyDown={handleEditKeyDown}
                    onToggle={handleToggle}
                />
            </div>
        </div>
    )
}