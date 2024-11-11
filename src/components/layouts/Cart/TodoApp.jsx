import React, { Component } from 'react';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Meeting', completed: false },
        { id: 2, text: 'Event', completed: false },
        { id: 3, text: 'Doctor Appointment', completed: false }
      ],
      newTask: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() === '') return; // Prevent adding empty tasks

    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false
    };

    this.setState({
      tasks: [...tasks, newTaskObj],
      newTask: '' // Clear input field
    });
  };

  deleteTask = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  };

  toggleTaskCompletion = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  render() {
    const { tasks, newTask } = this.state;
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    return (
      <div className="todo-app">
        {/* Task Counter */}
        <div className="task-counter">
          <h1>Task Done <br/>Keep it up</h1>
          <div className="task-progress">
            <h1>{completedTasks}/{totalTasks}</h1>
            
          </div>
        </div>

        {/* Input for adding new tasks */}
        <div className="task-input-container">
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
            placeholder="Write your next task"
          />
          <button className="add-task-button" onClick={this.addTask}>+</button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-info">
                <span onClick={() => this.toggleTaskCompletion(task.id)}>
                  {task.text}
                </span>
                {/* Task Control Buttons */}
                <div className="task-controls">
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn" onClick={() => this.deleteTask(task.id)}>🗑️</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
