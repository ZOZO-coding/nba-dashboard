import './TeamTile.scss'
import { Link } from 'react-router-dom'

const TeamTile = ({ teamName }) => {
    let logoName = teamName.replace(/ /g,"_");
    return (
        <div className='TeamTile'>
            <h2>
                <Link to={`/team/${teamName}`}>
                    <img src={require(`../logoImage/${logoName}.png`)} height={175} alt={logoName} />
                </Link>
            </h2>
        </div>
    )
}

export default TeamTile