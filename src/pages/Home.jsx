import React, { useState } from 'react';
//import 'taskbuddy';

function Home() {
  const [task, setTask] = useState(''); // Input field value
  const [tasks, setTasks] = useState({ todo: [], ongoing: [], completed: [] }); // Task categories

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add task to "To-Do" section
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, task],
      }));
      setTask(''); // Clear input
    }
  };

  // Move task to another category
  const moveTask = (currentCategory, targetCategory, taskToMove) => {
    setTasks((prevTasks) => {
      const updatedCurrent = prevTasks[currentCategory].filter(
        (t) => t !== taskToMove
      );
      const updatedTarget = [...prevTasks[targetCategory], taskToMove];
      return { ...prevTasks, [currentCategory]: updatedCurrent, [targetCategory]: updatedTarget };
    });
  };

  // Delete a task from a category
  const deleteTask = (category, taskToDelete) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((t) => t !== taskToDelete),
    }));
  };

  // Clear all tasks from a specific category
  const clearAllTasks = (category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: [],
    }));
  };

  // Clear all tasks from all categories
  const clearAllSections = () => {
    setTasks({ todo: [], ongoing: [], completed: [] });
  };

  return (
    <>
     
     <h1 className="logo">
          <img src="task-buddy-logo.png" alt="TaskBuddy Logo" /> 
        </h1>
        
    <div className="home">
      {/* TaskBuddy Logo Heading */}
     {/*<h1 className="logo">
          <img src="taskbuddy.png" alt="TaskBuddy Logo" /> 
  </h1>*/}
      <form
        className="task-form"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form reload
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="Enter task..."
          className="task-input"
          value={task}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="add-task-button"
          onClick={addTask}
        >
          ADD TASK
        </button><button>  </button>
        {/* Clear All Sections Button */}
        <button
            className="clear-all-button"
            onClick={clearAllSections}
          >
            CLEAR TASKS
          </button>
      </form>
      <div className="task-sections">
        {/* To-Do Section */}
        <div className="task-section">
          <h2>To-Do Tasks</h2>
          <button 
            className="clear-all-button"
            onClick={() => clearAllTasks('todo')}
          >
            Clear All Tasks
          </button>
          <ul>
            {tasks.todo.map((t, index) => (
              <li key={index}>
                {t}
                <button className="todo-button"
                  onClick={() => moveTask('todo', 'ongoing', t)}
                >
                  Move to Ongoing
                </button>
                <button
                  onClick={() => moveTask('todo', 'completed', t)}
                >
                  Move to Completed
                </button>
                <button className="delete-button"
                  onClick={() => deleteTask('todo', t)}
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Ongoing Section */}
        <div className="task-section">
          <h2>Ongoing Tasks</h2>
          <button
            className="clear-all-button"
            onClick={() => clearAllTasks('ongoing')}
          >
            Clear All Tasks
          </button>
          <ul>
            {tasks.ongoing.map((t, index) => (
              <li key={index}>
                {t}
                <button
                  onClick={() => moveTask('ongoing', 'todo', t)}
                >
                  Move to To-Do
                </button>
                <button
                  onClick={() => moveTask('ongoing', 'completed', t)}
                >
                  Move to Completed
                </button>
                <button className="delete-button"
                  onClick={() => deleteTask('ongoing', t)}
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Section */}
        <div className="task-section">
          <h2>Completed Tasks</h2>
          <button
            className="clear-all-button"
            onClick={() => clearAllTasks('completed')}
          >
            Clear All Tasks
          </button>
          <ul>
            {tasks.completed.map((t, index) => (
              <li key={index}>
                {t}
                <button
                  onClick={() => moveTask('completed', 'todo', t)}
                >
                  Move to To-Do
                </button>
                <button className="todo-button"
                  onClick={() => moveTask('completed', 'ongoing', t)}
                >
                  Move to Ongoing
                </button>
                <button
                  onClick={() => deleteTask('completed', t)}
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
