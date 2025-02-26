import React, { FC, ReactNode } from "react";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { OrderlyAppProvider } from "@orderly.network/react-app";
import config from "../../config";

const OrderlyProvider: FC<{ children: ReactNode }> = (props) => {
  return (
    <WalletConnectorProvider>
      <OrderlyAppProvider
        brokerId="woofi_pro"
        brokerName="WOOFi"
        networkId="mainnet"
        appIcons={config.orderlyAppProvider.appIcons}
      >
        {props.children}
      </OrderlyAppProvider>
    </WalletConnectorProvider>
  );
};

export default OrderlyProvider;
