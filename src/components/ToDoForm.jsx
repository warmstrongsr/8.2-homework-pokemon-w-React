import React from 'react';

export default function ToDoForm({ addToList }) {

    function handleClick(e){
        e.preventDefault();
        console.log(e);
        const newTask = e.target.task.value;
        addToList(newTask);
        e.target.task.value = '';
    }

    return (
        <form action="" onSubmit={handleClick}>
            <h1 className="text-center">Add A Task</h1>
            <div className="form-">
                {/* <label htmlFor="task">Enter task</label> */}
                <input className="form-control" type="text" name="task" placeholder='Enter a Task...' />
                <input type="submit" value="Add Task" className='btn btn-outline-primary w-100 mt-3' />
            </div>
        </form>
    )
}
