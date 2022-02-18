import { useCallback, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";

import { TezosToolkit } from "@taquito/taquito";
import { NetworkType, PermissionScope } from "@airgap/beacon-sdk";
import {NETWORK_ADDRESS} from '../../config/index';


export default function useBonds() {
  const VALID_CONTRACT_ADDRESS = '';

  const buyBond = useCallback(async () => {
      alert('Waiting for back-end');
      
      const Tezos = new TezosToolkit(NETWORK_ADDRESS);
      const contract = await Tezos.wallet.at(VALID_CONTRACT_ADDRESS);
      const batch = await Tezos.wallet.batch()
        .withContractCall(contract.methods.interact('tezos'))
        .withContractCall(contract.methods.wait([['unit']]));

      const batchOp = await batch.send();
      console.log('Operation hash:', batchOp.hash);
      await batchOp.confirmation();
  }, []);



  return { buyBond, VALID_CONTRACT_ADDRESS };
}
