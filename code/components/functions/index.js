// Functions that runs without putting them into the react component

// Check recoil dataState if there is data to be showed
function checkData(data) {
    if (data === "NO_DATA") return true;
    else return false;
}

// Convert unix time to readable for everyday users
function unixToLocal(time) {
    const date = new Date(time * 1000);
    const hours = "0" + date.getHours(),
    minutes = "0" + date.getMinutes(),
    seconds = "0" + date.getSeconds();

    return `${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

// Return current time
function getTime() {
    const date = new Date().toLocaleString();
    return date;
}

// Object with short name and all functions that I need somewhere else
const f = { checkData, unixToLocal, getTime };

export default f;