import React from 'react';

export default function Home() {
  return (
    <>
        <div className="home">
        <form className="task-form">
            <input type="text" placeholder="Enter task..." className="task-input" />
            <button className="add-task-button">ADD TASK</button>
        </form>
        <div className="task-sections">
            <div className="task-section">
                <h2>To-Do Tasks</h2>
            </div>
            <div className="task-section">
                <h2>Ongoing Tasks</h2>
            </div>
            <div className="task-section">
                <h2>Completed Tasks</h2>
            </div>
        </div>
      </div>
    </>
  )
}
