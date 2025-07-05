"use client"
import { UseWindowSize } from "@/utils/UseWindowSize"
import { Eye, EyeOff, LogIn } from "lucide-react"
import Link from "next/link"
import { ReactElement, useState } from "react"

export const LoginForm = (): ReactElement => {
    const { width } = UseWindowSize()

    type entriesProps = {
        email: string,
        password: string
    }

    type validEntriesProps = {
        email: boolean,
        password: boolean
    }

    const [entries, setEntries] = useState<entriesProps>({
        email: "",
        password: ""
    })

    const [inValidEntries, setInValidEntries] = useState<validEntriesProps>({
        email: false,
        password: false
    })

    const [seePassword, setSeePassword] = useState(false)
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)

    const toggleSeePassword = () => {
        setSeePassword(prev => (!prev))
    }
    const toggleSeeConfirmPassword = () => {
        setSeeConfirmPassword(prev => (!prev))
    }

    const submitForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>/?]).+$/;

        setInValidEntries((prev): validEntriesProps => ({
            ...prev, //true if empty, false if filled
            email: !emailRegex.test(entries["email"]),
            password: !passwordRegex.test(entries["password"])
        }))
    }
    return (
        <section className={`signin-section ${(width && width < 768) ? "mobile-bg" : "desktop-bg"}`}>
            <div className="account-logo-div">
                <img
                    src="/images/hire-purchase-logo.png"
                    alt="Hire-Purchase Logo"
                    className="w-[200px] h-[30px]"
                />
            </div>
            <div className="flex flex-col items-center px-5 md:px-10 w-full">
                <div className="flex flex-col items-center justify-between gap-5 mb-2">
                    <span>
                        You don't have an account?
                        <u className="font-bold text-blue-600">
                            <Link href="/signup">sign up</Link>
                        </u>
                    </span>
                    <span className='font-bold text-3xl'>Welcome Back!</span>
                </div>
                <div
                    onSubmit={(e) => e.preventDefault()}
                    className="signin-onsubmit-div"
                >
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`input-class ${inValidEntries["email"] && "border border-red-400"}`}
                            value={entries["email"]}
                            onChange={(e) => {

                                setEntries((prev): entriesProps => {
                                    return { ...prev, email: e.target.value }
                                })
                            }}
                        />
                        <span className="text-[0.6rem] text-red-400">
                            {inValidEntries["email"] && "invalid email"}
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <div className="relative w-full">
                            <input
                                type={seePassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className={`password-input-class ${inValidEntries["password"] && "border border-red-400"}`}
                                value={entries["password"]}
                                onChange={(e) => {
                                    setEntries((prev): entriesProps => {
                                        return { ...prev, password: e.target.value }
                                    })
                                }}
                            />
                            {seePassword ? (
                                <Eye
                                    className="absolute size-4.5 right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
                                    onClick={toggleSeePassword}
                                />
                            ) : (
                                <EyeOff
                                    className="absolute size-4.5 right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
                                    onClick={toggleSeePassword}
                                />
                            )}
                        </div>
                        <span className="text-[0.6rem] text-red-400">
                            {inValidEntries["password"] && "invalid password"}
                        </span>
                    </div>
                    <div className="flex flex-col items-end w-full text-[12px]">
                      <Link href="/forgot_password">
                        <span className="text-blue-500">
                           <u>forgot password?</u>
                        </span>
                      </Link>
                    </div>
                     <button
                      onClick={submitForm}
                      className="cursor-pointer bg-black text-white py-2
                      bg-gradient-to-r from-[#eeeeee] to-[#333333]"
                    >
                       <span className='flex flex-row items-center  justify-center'>
                         <LogIn size={25}/>&nbsp;Login
                        </span>
                    </button>
                    
                </div>
            </div>
        </section>
    )
}