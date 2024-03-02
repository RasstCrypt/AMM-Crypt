import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, okxWallet } from "@thirdweb-dev/react";
import { BerachainArtio } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "Berachain";
//const apikey = "265def4768f24970299dba3991993362";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    supportedWallets={[
      metamaskWallet({
        recommended:true,
      }),
      coinbaseWallet(),
      okxWallet(),
    ]}
      clientId="265def4768f24970299dba3991993362"
      activeChain={BerachainArtio}
    >
      <ChakraProvider>
        <NavBar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
