import React from 'react'

export default function ToDoList({ taskList }) {
    console.log(taskList);
    return (
        <div className="row mt-3">
            <div className="col-6 offset-3">
                <ol className="list-group list-group-numbered text-center">
                    {taskList.map(task => <li key={task} className='list-group-item'>{task}</li>)}
                </ol>
            </div>
        </div>
    )
}
