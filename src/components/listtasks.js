import Todo from './task'

const Tasks = ({tasks, onDone}) => {
    return (
        <div>
            {tasks.map((task, idx) => (
                <Todo key={idx} task={task} onDone={onDone} />
            ))}
        </div>
    )
}

export default Tasks
