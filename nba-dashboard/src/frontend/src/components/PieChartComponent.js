import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = ({ team }) => {

    return (
        <div>
            <PieChart
                data={[
                    { title: 'Lossess', value: team.totalMatches - team.totalWins, color: '#c93030' },
                    { title: 'Wins', value: team.totalWins, color: '#3CB371' },
                ]}
            />
        </div>
    )
}

export default PieChartComponent