import { useEffect } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import "../styles/globals.css"
import { type } from "@/redux/slices/device.slice"
import store, { persistor } from "@/redux/store"
import { IS_MOBILE_REGEX } from "@/constants/default"

import type { AppProps } from "next/app"
const MyApp = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  let { device } = store.getState()

  useEffect(() => {
    // router.push("/");

    if (IS_MOBILE_REGEX.test(navigator.userAgent)) {
      store.dispatch(type({ mode: "SET_MOBILE_MODE" }))
    } else {
      store.dispatch(type({ mode: "SET_WEB_MODE" }))
    }
  }, [device.mode])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
