import { useState } from "react";
import { useRouter } from "next/router";

//Components
import { FormItem } from "@components/utils/formItem";

//Library && CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Icons
//import logo from "@icons/logo.svg";

const Signup = () => {
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleChange = () => {
    setCheckbox(!checkbox);
  };

  async function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(formState);
    // if (checkbox) {
    //   const lo = await SignUp(
    //     formState.email,
    //     formState.password,
    //     formState.firstname,
    //     formState.lastname,
    //     formState.phone,
    //     "Student",
    //     "",
    //     checkbox
    //   );

    //   if (lo) {
    //     init((authData) => {
    //       dispatch(login(authData));
    //     });
    //     toast.success("Sign up successful");
    //     router.push("/user/form");
    //   }
    // } else {
    //   toast.error("Vous n'avez pas accepté les conditions d'utilisations", {
    //     icon: "🚀",
    //   });
    // }
  }

  return (
    <div className="h-screen">
      <div className="">
        <div className="flex flex-row">
          <FormItem
            name="firstName"
            value={formState.firstname}
            label="firstName"
            onChange={onFormChange}
            disabled={false}
            required={true}
          />
          <FormItem
            name="lastname"
            label="lastname"
            value={formState.lastname}
            onChange={onFormChange}
            disabled={false}
            required={true}
          />
        </div>
        <div className="flex flex-col">
          <FormItem
            type="email"
            name="email"
            value="email"
            label="email"
            onChange={onFormChange}
            disabled={false}
            required={true}
          />
          <FormItem
            type="password"
            name="password"
            label="password"
            value="password"
            onChange={onFormChange}
            disabled={false}
            required={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
