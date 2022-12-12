import './MatchSmallCard.scss'
import { Link } from 'react-router-dom';

const MatchSmallCard = ({ match, teamName }) => {
    if (!match) return null;

    const otherTeam = match.homeTeam === teamName ? match.visitorTeam : match.homeTeam;
    const location = match.homeTeam.split(" ")[0];
    const otherTeamRoute = `/team/${otherTeam}`;
    const isMatchWon = match.homeTeamWins === 1; // true if home team wins

    return (
        <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
            <span className='vs'>vs</span>
            <h3> 
                <Link to={otherTeamRoute}>{otherTeam}</Link> <span>at {location}</span>
            </h3>
            <p className='game-result'>Final Score {match.ptsHome} : {match.ptsAway}</p>
        </div >
    )
}

export default MatchSmallCard