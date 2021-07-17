import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Search from "./components/Search";
import Loading from "./components/Loading";
import Info from "./components/Info";
import Main from './components/Main';
import Navbar from './components/Navbar';
import fetchData from './components/fetch';
import infoState from './states/infoState';
import dataState from './states/dataState';

function App() {

  const setInfo = useSetRecoilState(infoState),
  setData = useSetRecoilState(dataState);

  function handleShowInfo(info) {
      setInfo(info);
      document.getElementById("info").classList.remove("hidden");
  }

  function searchForCity(x) {
      document.getElementById("loading").classList.remove("hidden");

      fetchData(x)
      .then(res => {
          if (res.cod === 200) {
              setData(res);
          } else if (res.cod === 404) 
              handleShowInfo("I couldn't find the city you are looking for! Are you sure you spell it right?");
          else 
              handleShowInfo("Ooops! Something bad happened to the internet! Please, try again later!");

      })
      .catch(err => {
          handleShowInfo("Ooops! Something bad happened to the internet! Please, try again later!");
          console.log(err);
      })
      .finally(() => document.getElementById("loading").classList.add("hidden"));
  }

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