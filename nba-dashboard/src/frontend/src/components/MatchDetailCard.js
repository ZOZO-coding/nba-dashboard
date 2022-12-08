import React from 'react'
import { Link } from 'react-router-dom';

const MatchDetailCard = ({ match, teamName }) => {
    if (!match) return null;

    const otherTeam = match.homeTeam === teamName ? match.visitorTeam : match.homeTeam;
    const location = match.homeTeam.split(" ")[0];
    const otherTeamRoute = `/teams/${otherTeam}`;
    
    return (
        <div className='MatchDetailCard'>
            <h3>Latest Matches</h3>

            <h1>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h1>
            <h2>{match.gameDate}</h2>
            <h3>at {location}</h3>
            <h3>Final Score {match.ptsHome} : {match.ptsAway}</h3>
        </div>
    )
}

export default MatchDetailCard