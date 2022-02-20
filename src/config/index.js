// const {
//   NETWORK_ADDRESS,
// } = process.env;

// https://mainnet-tezos.giganode.io
//https://delphinet-tezos.giganode.io
//https://hangzhounet.api.tez.ie
//https://testnet-tezos.giganode.io
const NETWORK_ADDRESS = 'https://hangzhounet.api.tez.ie/';


//'mainnet' | 'granadanet' | 'hangzhounet' | 'custom'
const NETWORK_TYPE = 'hangzhounet';

const BOND_CONTRACT_ADDRESS = 'KT1Kv4yA9gohSvJTrVHiY671rWhZ4ohAFFVS';
const LP_TOKEN_CONTRACT_ADDRESS =  "KT1GgNMoJhfeWUoqh1RJaFXE1H66tja7L1eU";
const TREASURY_CONTRACT_ADDRESS =  "KT1VX4MV7RXzBq1bpnxfSG8V2sTtpT5N2TCh";
const REWARD_TOKEN_CONTRACT_ADDRESS =  "KT1GxEuEZyPe2ba4aVVxPWQDzqEhi62ZruxU";
const LP_TOKEN = "KT1GgNMoJhfeWUoqh1RJaFXE1H66tja7L1eU";

export {
  NETWORK_ADDRESS,
  BOND_CONTRACT_ADDRESS,
  NETWORK_TYPE,
  LP_TOKEN_CONTRACT_ADDRESS,
  TREASURY_CONTRACT_ADDRESS,
  REWARD_TOKEN_CONTRACT_ADDRESS,
  LP_TOKEN
}; 