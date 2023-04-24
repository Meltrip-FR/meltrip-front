import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { type } from "@/redux/slices/device.slice";
import { IS_MOBILE_REGEX } from "@/constants/default";
import "../styles/globals.css";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  let { device } = store.getState();

  useEffect(() => {
    // router.push("/");

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
};

export default MyApp;
