import fetchData from "../fetch";

function checkData(data) {
    if (data === "NO_DATA") return true;
    else return false;
}

function unixToLocal(time) {
    const date = new Date(time * 1000);
    const hours = "0" + date.getHours(),
    minutes = "0" + date.getMinutes(),
    seconds = "0" + date.getSeconds();

    return `${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

function getTime() {
    const date = new Date().toLocaleString();
    return date;
}

function fetchCityWeather(x) {
    document.getElementById("loading").classList.remove("hidden");

    fetchData(x)
    .then(res => {
        if (res.cod === 200)
            return { status: "READY", data: res };
        else if (res.cod === 404)
            return { status: "NOT_FOUND", message: "I cannot find the city you are looking for. Are you sure you spelled it right?" };
        else
            return { status: "CONNECTION_ERROR", message: "Something went wrong! Please let us know about your issue or try again later!" };
    })
    .catch(err => {
        console.log(err);
        return "CATCHED_ERROR";
    })
    .finally(() => document.getElementById("loading").classList.add("hidden"));
}

const f = { checkData, unixToLocal, getTime, fetchCityWeather };

export default f;