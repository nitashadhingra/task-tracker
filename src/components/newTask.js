import {useState} from 'react'

const NewTask = ({addTask}) => {

    // component level state for each input
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        
        if(!title){
            alert('Add task')
            setDeadline('');
            setReminder(false);
            return;
        }
        
        addTask({title, deadline, reminder});

        setTitle('');
        setDeadline('');
        setReminder(false);
    }

    return (
        <form className="add-task" onSubmit={submitForm}>
            <div className="form-item">
                <label htmlFor="title">To-do</label><br />
                <input 
                    name="title" 
                    type="text" 
                    placeholder="Add new task" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div className="form-item">
                <label htmlFor="deadline">Complete by</label><br />
                <input 
                    name="deadline" 
                    type="text" 
                    placeholder="Set Deadline" 
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)} 
                />
            </div>
            
            <input type="submit" value="Save" className="btn-wide" />
        </form>
    )
}

export default NewTask
