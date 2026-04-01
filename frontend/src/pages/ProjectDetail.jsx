import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { projectClient } from "../clients/api"
import { useState } from "react"
import Task from "../components/Task"
import TaskForm from "../components/TaskForm"

function ProjectDetail() {
    const { projectId } = useParams()
    const [ project, setProject] = useState({})
    const [ tasks, setTasks] = useState([])

    useEffect(() => {
        const getProjectData = async () => {
            try {
                const { data } = await projectClient.get(`/${projectId}`)
                setProject(data)
            }
            catch(err) {
                console.dir(err)
                alert(err.response.data.message)
            }
        }
        const getTaskData = async () => {
            try {
                const { data } = await projectClient.get(`/${projectId}/tasks`)
                setTasks(data)
            }
            catch(err) {
                console.dir(err)
                alert(err.response.data.message)
            }
        }
        getProjectData()
        getTaskData()
    }, [])

    return (
        <>
            <h1>{project.name}</h1>
            <p>{project.description}</p>

            <h2>Tasks</h2>
            <TaskForm projectId={projectId} setTasks={setTasks} />
            {tasks.length > 0 ?
                tasks.map(task => <Task key={task._id} task={task} setTasks={setTasks} />)
                :
                <p>Currently no tasks assigned to this project.</p>
            }
        </>
    )
}

export default ProjectDetail