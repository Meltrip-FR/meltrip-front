import { useAppSelector } from "@/redux/hooks";

import PhoneHeader from "./header/phone";
import WebHeader from "./header/web";

const Header = () => {
  const { device } = useAppSelector((state) => state);
  return device.mode === "SET_WEB_MODE" ? <WebHeader /> : <PhoneHeader />;
};

export default Header;
