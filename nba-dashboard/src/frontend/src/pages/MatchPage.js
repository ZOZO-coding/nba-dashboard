import './MatchPage.scss'

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import MatchDetailCard from '../components/MatchDetailCard'
import YearSelector from '../components/YearSelector'

const MatchPage = () => {
    const { teamName, year } = useParams();
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();
    }, [teamName, year])


    return (
        <div className='MatchPage'>
            <div className='year-selector'>
                <YearSelector teamName={teamName}/>
            </div>

            <div>
                <h1>{teamName} Matches in {year}</h1>
                {
                    matches.map(match => (
                        <MatchDetailCard teamName={teamName} match={match} />
                    ))
                }
            </div>

        </div>
    )
}

export default MatchPage