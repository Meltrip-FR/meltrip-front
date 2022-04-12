//React / Next
import type { AppProps } from "next/app";

//Redux
import store, { persistor } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//CSS
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
