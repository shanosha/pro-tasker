import { useEffect, useState } from "react"
import { useUser } from "../context/UserContext"
import Project from "../components/Project"
import ProjectForm from "../components/ProjectForm"
import { projectClient } from "../clients/api"

function Dashboard() {

    const { user } = useUser()
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function getData() {
            try {

                // get user posts from DB
                const { data } = await projectClient.get('/')

                // save the user's posts in the component's state
                setProjects(data)                

            }
            catch(err) {
                console.dir(err)
            }
        }
        getData()
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome {user.username}!</p>
            
            <h2>Projects</h2>
            <ProjectForm setProjects={setProjects} />
            <ul>
                {projects.map(project => <Project key={project._id} project={project} setProjects={setProjects} />)}
            </ul>
        </>
    )
}

export default Dashboard