import React, { useState } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

export default function ToDo() {
    const [toDos, setToDos] = useState([]);

    function addToList(task){
        console.log(task);
        setToDos([...toDos, task]);
    };

    return (
        <>
            <ToDoForm addToList={addToList} />
            <ToDoList taskList={toDos} />
        </>
    )
}
