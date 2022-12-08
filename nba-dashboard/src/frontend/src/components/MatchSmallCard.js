import React from 'react'

const MatchSmallCard = ({ match }) => {
    return (
        <div className='MatchSmallCard'>
            <p>Home Team: {match.homeTeam}</p>
            <p>Visitor Team: {match.visitorTeam}</p>
        </div>
    )
}

export default MatchSmallCard