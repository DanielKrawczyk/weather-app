import { atom } from 'recoil';

const infoState = atom({
    key: "info state",
    default: ""
})

export default infoState;