import { Link } from "react-router-dom"
import { projectClient } from "../clients/api"
import { useEffect } from "react"
import { useState } from "react"

function Project({ project, setProjects }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTaskData = async () => {
            try {
                const { data } = await projectClient.get(`/${project._id}/tasks`)
                setTasks(data)
            }
            catch(err) {
                console.dir(err)
                alert(err.response.data.message)
            }
        }
        getTaskData()
    },[])

    const handleDelete = async () => {
        try {
            // remove project from database
            await projectClient.delete(`/${project._id}`)
            // remove project from state
            setProjects(projects => projects.filter(p => p._id !== project._id))
        }
        catch(err) {
            console.dir(err)
            alert(err.response.data.message)
        }
    }

    return (
        <>
            <li>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {(tasks.length>0) && <p>{tasks.length} Tasks</p>}
                <Link to={`/project/${project._id}`}><button>View</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </li>
        </>
    )
}

export default Project