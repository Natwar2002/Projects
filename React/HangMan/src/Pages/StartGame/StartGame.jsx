import { useNavigate } from 'react-router-dom';
import TextInputFormContainer from '../../components/TextInputForm/TextInputFormContainer'

function StartGame () {

    const navigate = useNavigate()

    function handleSubmit(value, hint) {
        navigate('/play', {state : {wordSelected : value, givenHint : hint}});
    }

    return (
        <div className='flex flex-col p-[2rem] gap-5 items-center'>
            <p className='font-bold text-[2rem]'>Start Game</p>
            <TextInputFormContainer onSubmit={handleSubmit}/>
        </div>

    );
}

export default StartGame;