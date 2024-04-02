import {Link} from 'react-router-dom';
export const NotFound = () => {

    return(
        <div id="not-found">
            <h1> Error !!! No Routes match this URL</h1>
            <h2>Go <Link to='/home'>back</Link> to Home Page</h2>
        </div>
    )
}