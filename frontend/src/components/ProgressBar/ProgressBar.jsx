import './ProgressBar.css'

function ProgressBar({ total, completed }) {

    let progress = 0
    if( total>0 ) progress = (completed/total)*100

    return (
        <div className="progress-wrapper">
        <div className="progress">
            <div className="progress-bar">
                <div style={{width: progress+'%'}} className="progress-indicator">
                </div>
            </div>
            <div className="progress-label">
                <p>Progress: {progress+'% complete'}</p>
            </div>
        </div>
        </div>
    )
}

export default ProgressBar