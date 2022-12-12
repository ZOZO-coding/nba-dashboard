import './YearSelector.scss';
import { Link } from 'react-router-dom';

const YearSelector = ({ teamName }) => {

    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;

    for (let i = startYear; i <= endYear; i++) {
        years.push(i);
    }

    return (
        <ol className='years-selector'>
            <h3>Select A Year</h3>
            {years.map(year => (
            <li>
                <Link to={`/team/${teamName}/matches/${year}`}>{year}</Link>
            </li>
            ))}
            <Link to={`/team/${teamName}`}>Back to Team</Link>
        </ol>
    )
}

export default YearSelector