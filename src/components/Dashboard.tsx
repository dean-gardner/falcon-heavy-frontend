import React, { useEffect, useState } from "react";
import { Button, VStack, Text, Code, Divider } from "@chakra-ui/react";

import useBeacon from "../hooks/useBeacon";
import { ContractAddressInput } from "./ContractAddressInput";
import { ContractStorageInfo } from "./ContractStorageInfo";
import { validateContractAddress } from "../utils";
import { ContractBalanceInfo } from "./ContractBalanceInfo";
import { ContractTransferForm } from "./ContractTransferForm";

const AccountInfo: React.FC<{
  pkh: string;
}> = ({ pkh }) => (
  <Text>
    Your account: <Code>{pkh}</Code>
  </Text>
);

export function Dashboard() {
  const { connect, pkh, disconnect } = useBeacon();
  const [contractAddress, setContractAddress] = useState<string>(
    "KT19psPK1PZNMkaq8TuU1D77u7ipyFVQ3BmE"
  );
  const [contractValid, setContractValid] = useState<boolean>(false);

  useEffect(() => {
    setContractValid(validateContractAddress(contractAddress));
  }, [contractAddress]);

  
  return (
    <div className="text-center">
      {!pkh ? (
        <Button className="btn btn-primary submit-btn" onClick={connect}>
          Connect wallet
        </Button>
      ) : (
        <>
          <Button className="btn btn-primary submit-btn" variant="outline" onClick={disconnect}>
            Disconnect wallet
          </Button>

          <AccountInfo pkh={pkh} />
          <Divider />
          <ContractAddressInput
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            isInvalid={!contractValid}
          />
          {contractValid && contractAddress && (
            <>
              <ContractStorageInfo contractAddress={contractAddress} />
              <ContractBalanceInfo contractAddress={contractAddress} pkh={pkh} />
              <ContractTransferForm contractAddress={contractAddress} pkh={pkh} />
            </>
          )}
        </>
      )}
    </div>
  );
}
