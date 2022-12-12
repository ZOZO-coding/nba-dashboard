import './TeamPage.scss';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'

import { PieChart } from 'react-minimal-pie-chart';

const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });

    const { teamName } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();

        }, [teamName]
    );

    if (!team || !team.teamName) {
        return <h1>Team Not Found</h1>
    }
    return (
        <div className='TeamPage'>
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
                />;
            </div>

            <div className='match-detail-section'>
                <h3>Latest Matches</h3>
                <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
            </div>

            {team.matches.slice(1).map(match => (
                <MatchSmallCard match={match} teamName={team.teamName} key={match.gameId} />
            ))}

            <div className='more-link'>
                <a href="#">More</a>
            </div>

        </div>
    )
}

export default TeamPage