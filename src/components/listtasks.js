import Todo from './task'

const Tasks = ({tasks, onDone}) => {
    return (
        <div>
            {tasks.map((task) => (
                <Todo key={task.id} task={task} onDone={onDone} />
            ))}
        </div>
    )
}

export default Tasks
