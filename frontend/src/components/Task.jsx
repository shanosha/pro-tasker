import { taskClient } from "../clients/api"
import TaskForm from "./TaskForm"

function Task({ task, setTasks }) {

    const handleChange = async (e) => {
        try {
            // update the tasks state
            setTasks(tasks => tasks.map(t => (t._id === task._id)?{...t, status: e.target.value}:t))
            
            // update the task in our backend
            await taskClient.put(`/${task._id}`, {status: e.target.value})
        }
        catch(err) {
            console.dir(err)
            alert(err.response.data.message)
        }
    }

    return (
        <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <div className="form-row">
                <label>Status:
                <select
                    value={task.status}
                    onChange={handleChange}
                    name="status"
                    type="text"
                    required
                >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                </label>
            </div>

            <div className="buttons">
                <TaskForm projectId={task.project} task={task} setTasks={setTasks} btnText={'Edit'} headingText={'Edit Task'} />
            </div>
        </>
    )
}

export default Task