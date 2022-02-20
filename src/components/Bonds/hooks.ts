import { useCallback, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";

import { TezosToolkit } from "@taquito/taquito";
import { NetworkType, PermissionScope } from "@airgap/beacon-sdk";
import {NETWORK_ADDRESS, BOND_CONTRACT_ADDRESS, NETWORK_TYPE} from '../../config/index';

const options = {
  name: "Plenty Bonds Marketplace: Falcon Heavy",
  network: {
    type: NETWORK_TYPE,
  },
};

export default function useBonds() {
  let myAddress: string | undefined;

  const buyBond = useCallback(async () => {
      // alert('Waiting for back-end');
      
      const bondPrice = 1;
      const LpToken = {fa12: "address",   fa2: 10};
      const LpTokenAmount = 10;
      const Slippage = 0.5;

      const contractAddress = BOND_CONTRACT_ADDRESS;
      const networkAddress = NETWORK_ADDRESS;

      const Tezos = new TezosToolkit(networkAddress);
      const wallet = new BeaconWallet(options);

      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        // If defined, the user is connected to a wallet.
        // You can now do an operation request, sign request, or send another permission request to switch wallet
        console.log("Already connected:", activeAccount.address);
        myAddress = activeAccount.address;
      } else {
        await wallet.requestPermissions();
        myAddress = await wallet.getPKH();
        console.log("New connection:", myAddress);
      }
      Tezos.setWalletProvider(wallet);

      Tezos.contract.at(contractAddress).then(contract => {
        return contract.methods.order().send({bond_price_requested_in_usd: bondPrice, lp_token: LpToken, 
          lp_token_amount: LpTokenAmount, slippage: Slippage})
        .on('transactionHash', function(hash){
          debugger;
          })
          .on('receipt', function(receipt){
            debugger;

          })
          .on('confirmation', function(confirmationNumber, receipt){
            debugger;

          })
          .on('error', console.error);
          } );


      // const batch = await Tezos.wallet.batch()
      //   .withContractCall(contract.methods.interact('defaul'))
      //   .withContractCall(contract.methods.wait([['unit']]));

      // const batchOp = await batch.send();
      // console.log('Operation hash:', batchOp.hash);
      // await batchOp.confirmation();
  }, []);



  return { buyBond };
}
