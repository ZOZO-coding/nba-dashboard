import './MatchDetailCard.scss'
import { Link } from 'react-router-dom';

const MatchDetailCard = ({ match, teamName }) => {
    if (!match) return null;

    const otherTeam = match.homeTeam === teamName ? match.visitorTeam : match.homeTeam;
    const location = match.homeTeam.split(" ")[0];
    const otherTeamRoute = `/team/${otherTeam}`;
    const isMatchWon = match.homeTeamWins === 1; // true if home team wins

    return (
        <div className={isMatchWon ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
            <div>
                <span className='vs'>vs</span>
                <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h2 className='game-date'>{match.gameDate}</h2>
                <h3 className='game-location'>at {location}</h3>
                <h3 className='game-result'>Final Score {match.ptsHome} : {match.ptsAway}</h3>
            </div>
            <div className='game-stats'>
                <h3>Home Team Field Goal %</h3>
                <p>{match.fgPctHome}</p>
                <h3>Home Team Total Assist</h3>
                <p>{match.astHome}</p>
                <h3>Home Team Total Rebound</h3>
                <p>{match.rebHome}</p>
                <h3>Visitor Team Field Goal %</h3>
                <p>{match.fgPctAway}</p>
                <h3>Visitor Team Total Assist</h3>
                <p>{match.astAway}</p>
                <h3>Visitor Team Total Rebound</h3>
                <p>{match.rebAway}</p>
            </div>
        </div>
    )
}

export default MatchDetailCard