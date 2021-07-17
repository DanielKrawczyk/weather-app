import { useRecoilState } from 'recoil';
import cityState from '../states/cityState';

function Search(props) {

    const [ city, setCity ] = useRecoilState(cityState);

    return (
        <div id="search" className="search">
            <label className="search-label">Search for city: </label>
            <input className="search-input" type="text" id="search" onChange={(el) => {
                setCity(el.target.value);
            }} />
            <h1 className="search-button" onClick={() => {
                if (city.length > 0) props.onSearch(city);;
            }}>
                <i className="bi bi-search rotate"></i>
            </h1>
        </div>
    )
}

export default Search;