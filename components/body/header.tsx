import PhoneHeader from "./header/phone"
import WebHeader from "./header/web"
import { useAppSelector } from "@/redux/hooks"

const Header = () => {
  const { device } = useAppSelector((state) => state)
  return device.mode === "SET_WEB_MODE" ? <WebHeader /> : <PhoneHeader />
}

export default Header
