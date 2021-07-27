import { atom } from 'recoil';

// Current city weather data state. If there is no data - there is no data
const dataState = atom({
    key: "data state",
    default: "NO_DATA"
})

export default dataState;