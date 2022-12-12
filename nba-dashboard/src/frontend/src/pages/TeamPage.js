import './TeamPage.scss';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'

import { PieChart } from 'react-minimal-pie-chart';

const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });

    const { teamName } = useParams();

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
                <h1 className='team-name'>{team.teamName}</h1>
            </div>

            <div className='win-loss-section'>
                Wins / Losses
                <PieChart
                    data={[
                        { title: 'Lossess', value: team.totalMatches - team.totalWins, color: '#c93030' },
                        { title: 'Wins', value: team.totalWins, color: '#3CB371' },
                    ]}
                />
            </div>

            {/* row 2 */}
            <div className='match-detail-section'>
                <h3>Latest Matches</h3>
                <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
            </div>
            
            {/* row 3 */}
            {team.matches.slice(1).map(match => (
                <MatchSmallCard match={match} teamName={team.teamName} key={match.gameId} />
            ))}

            <div className='more-link'>
                <Link to={`/team/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>
                    More Game Stats
                </Link>
                <p><Link to='/'>HomePage</Link></p>
            </div>

        </div>
    )
}

export default TeamPage