import BigNumber from 'bignumber.js'

export const MoBasemAddress = "0x6194da6ceD35CeE92fBfC8f097fA9Ea626EEe5D7";
export const RINKEBY_NET = "https://rinkeby.infura.io/v3/";
export const CHAINID = "0x4";

export function toWEI(number){
    return BigNumber(number).shiftedBy(18);
}