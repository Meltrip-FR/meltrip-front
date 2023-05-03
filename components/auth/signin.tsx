import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { login } from "@/redux/slices/auth.slice"
import SigninIcon from "@/components/assets/icons/auth/signin"
import { FormItem } from "@/components/utils/formItem"

const SigninPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [requestMessage, setRequestMessage] = useState<string>("")
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  })

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      })
    }
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    const userData = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
      formState
    )

    const user = userData?.data?.dataValues

    const loginBuild = {
      login: true as boolean,
      user: {
        id: user.id,
        username: user?.username,
        civility: user?.civility,
        email: user?.email,
        phone: user?.phone,
        terms: true,
        newsletter: user?.newsletter === 0 ? false : true,
        roles: user?.roles,
        accessToken: userData?.data?.accessToken,
        confirmEmail: user?.confirmEmail,
        idOrganization: user?.idOrganization
      }
    }

    const loading = dispatch(login(loginBuild as any))

    if (loading?.payload) {
      router.push("/user/dashboard")
    }
  }

  return (
    <section className="text-gray-600 body-font my-[15vh]">
      <div className="flex flex-wrap items-center justify-center w-full gap-x-32">
        <SigninIcon size={500} />
        <div className="rounded-lg p-8">
          <h2 className="text-gray-900 text-3xl text-center font-medium title-font mb-14">
            CONNEXION
          </h2>
          <span className="text-red-400 mb-2">{requestMessage}</span>
          <div className="relative mb-4 w-96">
            <FormItem
              type="email"
              name="email"
              value={formState.email}
              label="Email"
              style="border border-meltrip-primary px-2 py-3"
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <div className="relative mb-4">
            <FormItem
              type="password"
              name="password"
              label="Mot de passe"
              style="border border-meltrip-primary px-2 py-3"
              value={formState.password}
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <p className="text-xs text-right mb-4 text-gray-500">
            <Link className="hover:underline" href="/auth/forgotpassword">
              Mot de passe oublié ?
            </Link>
          </p>
          <button
            className="text-white bg-[#186E7A] flex justify-center w-full border-0 py-2 px-8 focus:outline-none rounded text-lg"
            onClick={(e) => handleSubmit(e)}
          >
            Se connecter
          </button>
          <p className="text-md text-center text-black mt-3">
            Nouveau sur Meltrip ?{" "}
            <Link
              href="/auth/signup"
              className="text-meltrip-secondary hover:underline"
            >
              Créer votre compte
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SigninPage
