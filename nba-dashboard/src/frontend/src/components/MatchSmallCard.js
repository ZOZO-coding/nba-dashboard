import React from 'react'
import { Link } from 'react-router-dom';

const MatchSmallCard = ({ match, teamName }) => {
    if (!match) return null;

    const otherTeam = match.homeTeam === teamName ? match.visitorTeam : match.homeTeam;
    const location = match.homeTeam.split(" ")[0];
    const otherTeamRoute = `/teams/${otherTeam}`;

    return (
        <div className='MatchSmallCard'>
            <h3> 
                vs<Link to={otherTeamRoute}>{otherTeam}</Link> <span>at {location}</span>
            </h3>
            <p>Final Score {match.ptsHome} : {match.ptsAway}</p>
        </div >
    )
}

export default MatchSmallCard