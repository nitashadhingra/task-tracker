import {FaCheckCircle} from 'react-icons/fa'

const Todo = ({task, onDone}) => {
    return (
        <div className="task-item">
            <h3 className="task-title">
                {task.title} 
                <FaCheckCircle style={{color: 'black'}} onClick={() => onDone(task.id)} />
            </h3>
            <p className="task-date">{task.deadline}</p>
        </div>
    )
}

export default Todo
