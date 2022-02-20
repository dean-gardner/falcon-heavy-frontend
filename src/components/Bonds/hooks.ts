import { useCallback, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";

import { TezosToolkit } from "@taquito/taquito";
import { NetworkType, PermissionScope } from "@airgap/beacon-sdk";
  
  import {NETWORK_ADDRESS, TREASURY_CONTRACT_ADDRESS, BOND_CONTRACT_ADDRESS, NETWORK_TYPE, LP_TOKEN_CONTRACT_ADDRESS} from '../../config/index';

const options = {
  name: "Plenty Bonds Marketplace: Falcon Heavy",
  network: {
    type: NETWORK_TYPE,
  }
};

export default function useBonds() {
  let myAddress: string | undefined;

  const buyBond = useCallback(async () => {
      // alert('Waiting for back-end');
      
      const bondPrice = 1;
      const LpToken = "KT1GgNMoJhfeWUoqh1RJaFXE1H66tja7L1eU";
      const LpTokenAmount = 1000;
      const Slippage = 0.5;

      const Tezos = new TezosToolkit(NETWORK_ADDRESS);
      const wallet = new BeaconWallet(options);

      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount && false) {

        console.log("Already connected:", activeAccount.address);
        myAddress = activeAccount.address;
        //const permissions = await wallet.client.requestPermissions(options);

      } else {
        await wallet.requestPermissions(options);
        myAddress = await wallet.getPKH();
        console.log("New connection:", myAddress);
      }

      Tezos.setWalletProvider(wallet);

      // Tezos.wallet.at(LP_TOKEN_CONTRACT_ADDRESS).then(contract => {
      //   return contract.methods.approve(TREASURY_CONTRACT_ADDRESS, LpTokenAmount).send({from: myAddress});
      // } );

      Tezos.wallet.at(BOND_CONTRACT_ADDRESS).then(contract => {
        // bond_price_requested_in_usd: bondPrice, lp_token : LpToken, 
        //   lp_token_amount: LpTokenAmount, slippage: Slippage
        return contract.methods.order(bondPrice, LpTokenAmount, LpToken, Slippage).send({from: myAddress});
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
