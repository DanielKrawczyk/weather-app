import { useRecoilValue } from 'recoil';
import infoState from '../states/infoState';

function Info() {

    const info = useRecoilValue(infoState);

    function hideInfo() {
        document.getElementById('info').classList.add('hidden');
    }

    return (
        <div id="info" className="hidden">
            <span>{info}</span>
            <br />
            <button onClick={() => hideInfo()}>Okay</button>
        </div>
    )
}

export default Info;