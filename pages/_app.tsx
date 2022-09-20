// React / Next
import { useEffect } from "react";
import type { AppProps } from "next/app";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { type } from "@/redux/slices/device.slice";

// Constants
import { IS_MOBILE_REGEX } from "@/constants/default";

// CSS
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  let { device } = store.getState();

  useEffect(() => {
    if (IS_MOBILE_REGEX.test(navigator.userAgent)) {
      store.dispatch(type({ mode: "SET_MOBILE_MODE" }));
    } else {
      store.dispatch(type({ mode: "SET_WEB_MODE" }));
    }
  }, [device.mode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
