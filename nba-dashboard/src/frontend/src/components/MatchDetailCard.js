import React from 'react'

const MatchDetailCard = ({ match }) => {
    if (!match) return null;
    return (
        <div className='MatchDetailCard'>
            <h3>Latest Matches</h3>
            <h4>Match Details</h4>
            <h4>{match.homeTeam} vs {match.visitorTeam}</h4>
        </div>
    )
}

export default MatchDetailCard