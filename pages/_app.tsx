// React / Next
import type { AppProps } from "next/app";

// Redux
import store, { persistor } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// CSS
import "../styles/globals.css";
import { useEffect, useState } from "react";

// Constants
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home");
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
