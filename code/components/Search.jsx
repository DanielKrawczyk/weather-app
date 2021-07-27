import { useRecoilState } from 'recoil';
import cityState from '../states/cityState';

// Search component, where you type name of the city you are looking for and it send that city name through props to App component
function Search(props) {
    const [ city, setCity ] = useRecoilState(cityState);

    return (
        <div id="search" className="search">
            <p className="search-label">Search for city: </p>
            <span className="search-input">
                <input className="search-input" type="text" id="search" onChange={(el) => {
                    setCity(el.target.value);
                }} />
                <h1 className="search-button" onClick={() => {
                    if (city.length > 0) props.onSearch(city);
                }}>
                    <i className="bi bi-search rotate"></i>
                </h1>
            </span>
        </div>
    )
}

export default Search;