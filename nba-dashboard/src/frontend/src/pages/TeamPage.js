import './TeamPage.scss';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'
import PieChartComponent from '../components/PieChartComponent';

const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });

    const { teamName } = useParams();

    let logoName = teamName.replace(/ /g, "_");

    function round(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchTeam();

        }, [teamName]
    );

    if (!team || !team.teamName) {
        return <h1>Team Not Found</h1>
    }
    return (
        <div className='TeamPage'>
            {/* row 1 */}
            <div className='team-name-section'>
                <img src={require(`../logoImage/${logoName}.png`)} height={175} alt={logoName} />
                <h1 className='team-name'>{team.teamName}</h1>
            </div>

            <div className='win-loss-section'>
                <p>Winning Rate (from 2014 - 2022): {round(team.totalWins/team.totalMatches * 100)}%</p>
                <PieChartComponent team={team} />
            </div>

            {/* row 2 */}
            <div className='match-detail-section'>
                <h2>Latest Matches</h2>
                <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
            </div>

            {/* row 3 */}

            {team.matches.slice(1).map(match => (
                <MatchSmallCard match={match} teamName={team.teamName} key={match.gameId} />
            ))}

            <div className='more-link'>
                <p>
                    <Link to={`/team/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>
                        More Game Stats
                    </Link>
                </p>
                <p><Link to='/'>Back to HomePage</Link></p>
            </div>


        </div>
    )
}

export default TeamPage