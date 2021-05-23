import Header from './components/header.js'
import Tasks from './components/listtasks'
import NewTask from './components/newTask'
import './App.css';
import {useState, useEffect} from 'react'

    
function App() {

  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
  ]);

  // load tasks when page loads
  useEffect( () => {
    const getTasks = async () => {
      const taskListServer = await fetchTasks();
      setTasks(taskListServer)
    }
    getTasks();
  }, [])

  // to get list of tasks in DB
  const fetchTasks = async () => {
    const taskListServer = await fetch('http://localhost:5000/tasks');
    const taskList = await taskListServer.json()
    return taskList
  }

  // toggle disply new todo form
  const optionToAddTask = () => {
    console.log("toggling")
    setShowForm(!showForm);
  }
  
  // posting a new task to db
  const addTask = async (task) => {
  
    const postToServer = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newToDo = await postToServer.json()

    console.log("new posted");
    setTasks([...tasks, newToDo])
    optionToAddTask()
  }

  // deleting task from db
  const delTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE'})
    console.log("deleted", id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Header optionToAddTask={optionToAddTask} showForm = {showForm} />
      { showForm ? <NewTask addTask={addTask} /> : ('') }
      { (tasks.length > 0) ?
          <Tasks tasks = {tasks} onDone={delTask} /> 
          : ('Hurray! Nothing pending!') }
    </div>
  );
}

export default App;
