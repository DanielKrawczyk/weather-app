import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Search from "./components/Search";
import Loading from "./components/Loading";
import Info from "./components/Info";
import Main from './components/Main';
import Navbar from './components/Navbar';
import fetchData from './components/functions/fetch';
import infoState from './states/infoState';
import dataState from './states/dataState';

// I could say it's a heart of the whole app, but the veins width are not enough to carry 16px size letters, so it's just another important component
function App() {
  const setInfo = useSetRecoilState(infoState),
  setData = useSetRecoilState(dataState);

  // Function that show info component
  function handleShowInfo(info) {
      setInfo(info);
      document.getElementById("info").classList.remove("hidden");
  }

  // Function that call fetch function and handling eventual errors
  function searchForCity(x) {
      document.getElementById("loading").classList.remove("hidden");

      // fetchData is a function with fetch method
      fetchData(x)
      .then(res => {
          // if data is succesfully fetched
          if (res.cod === 200) {
              setData(res); // Save that data to dataState recoil
          } else if (res.cod === 404) // If there is not such city (like after typing hello! Truly unbelieveable there is no "Hello" city!)
              handleShowInfo({ msg:"I couldn't find the city you are looking for! Are you sure you spell it right?", btn:"Let's check!" });
          else
            // When there is an error I've never seen before
              handleShowInfo({ msg:"Ooops! Something went wrong! Please let us know about your issue or try again later!", btn:"Okay!" });
      })
      .catch(err => {
        // Classicaly catching errors with Mr. Catcherr
          handleShowInfo({ msg:"What an unexpected and unwanted error has been occured! Check your internet connection, let me know about this issue or try again later!", btn:"Not nice!" });
          console.log(err);
      })
      // All is done, so we can remove loading component
      .finally(() => document.getElementById("loading").classList.add("hidden"));
  }

  // If there is a city in localStorage, look for him instead of doing nothing!
  useEffect(() => {
    if ("fav" in localStorage) {
      searchForCity(JSON.parse(localStorage.getItem("fav")))
    }
  })

  return (
    <main>
      <Loading />
      <Info />
      <Navbar />
      <Search onSearch={(x) => searchForCity(x)} />
      <Main />
    </main>
  )
}

export default App;