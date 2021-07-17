import { atom } from 'recoil';

const dataState = atom({
    key: "data state",
    default: "NO_DATA"
})

export default dataState;