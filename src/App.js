import Header from './components/header.js'
import Tasks from './components/listtasks'
import NewTask from './components/newTask'
import './App.css';
import {useState} from 'react'



    
function App() {

  const [showForm, setShowForm] = useState(false);

  const [tasks, setState] = useState([
    {
        id: 1,
        title: 'Exam prep',
        deadline: 'May 10th, 12pm',
        reminder: true,
    },
    {
        id: 2,
        title: 'React to-do',
        deadline: 'May 9th, 9pm',
        reminder: true,
    },
    {
        id: 3,
        title: 'Clash of Clans',
        deadline: 'May 9th, 10pm',
        reminder: true,
    }
  ]);

  const optionToAddTask = () => {
    console.log("toggling")
    setShowForm(!showForm);
  }
  
  const newTask = (task) => {
    const id = tasks.length + 1;
    const newToDo = {id, ...task};
    console.log("new");
    setState([...tasks, newToDo])
    optionToAddTask()
  }

  const delTask = (id) => {
    console.log("delete ", id);
    setState(tasks.filter((task) => task.id !== id));
  }

  

  return (
    <div className="App">
      <Header addNew={ optionToAddTask }/>
      { showForm ? <NewTask addTask={newTask} /> : ('') }
      { (tasks.length > 0) ? 
          <Tasks tasks = {tasks} onDone={delTask} /> 
          : ('Hurray! Nothing pending!') }
    </div>
  );
}

export default App;
