import { useRecoilValue } from 'recoil';
import infoState from '../states/infoState';

// Component that show information
function Info() {
    const info = useRecoilValue(infoState);

    return (
        <div id="info" className="hidden">
            <span>{info.msg}</span>
            <br />
            <button onClick={() => /* Hide that component after clicking button */ document.getElementById('info').classList.add('hidden')}>{info.btn}</button>
        </div>
    )
}

export default Info;