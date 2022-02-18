import { useCallback, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";

import { TezosToolkit } from "@taquito/taquito";
import { NetworkType, PermissionScope } from "@airgap/beacon-sdk";
import {NETWORK_ADDRESS} from '../config/index';



export default function userWallet() {
  const [pkh, setUserPkh] = useState<string>();

//   const checkConnection = useCallback(async () => {
    
//     // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
// const activeAccount = await wallet.client.getActiveAccount();
// if (activeAccount) {
//   // If defined, the user is connected to a wallet.
//   // You can now do an operation request, sign request, or send another permission request to switch wallet
//   console.log("Already connected:", activeAccount.address);
//   myAddress = activeAccount.address;
// } else {
//   await wallet.requestPermissions();
//   myAddress = await wallet.getPKH();
//   console.log("New connection:", myAddress);
//   }, []);

//  const disconnect = useCallback(async() => {
//     // await wallet.client.removeAllAccounts();
//  }, []);


//   return {  disconnect, pkh };
}
