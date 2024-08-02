import {Link} from 'react-router-dom';

function StartGame () {

    return (
        <div>
            <p>Start Game</p>

            <Link to="/play" >Play</Link>
        </div>
    );
}

export default StartGame;