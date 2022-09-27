import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask));
  }

  const allTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm
          categories={CATEGORIES.filter((cat) => cat !== "All")}
          onTaskFormSubmit={addTask}
        />
        <TaskList onDeleteTask={deleteTask} tasks={allTasks} />
      </div>
    </div>
  );
}

export default App;