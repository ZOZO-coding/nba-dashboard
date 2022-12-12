import './TeamTile.scss'
import { Link } from 'react-router-dom'

const TeamTile = ({ teamName }) => {
  return (
    <div className='TeamTile'>
        <h2>
            <Link to={`/team/${teamName}`}>{teamName}</Link>
        </h2>
    </div>
  )
}

export default TeamTile