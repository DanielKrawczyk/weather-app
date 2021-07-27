import { atom } from 'recoil';

// Current city state
const cityState = atom({
    key: "city state",
    default: ""
});

export default cityState;