"use client"
import { UseWindowSize } from "@/utils/UseWindowSize";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";



export const SignUpForm = (): ReactElement => {

    const { width } = UseWindowSize()
    console.log(width);


    type validEntriesProps = {
        name: boolean;
        email: boolean;
        phone: boolean;
        password: boolean;
        confirmPassword: boolean;
    }

    type entriesProps = {
        name: string;
        email: string;
        phone: string;
        password: string;
        confirmPassword: string;
    }

    const [inValidEntries, setInvalidEntries] = useState<validEntriesProps>({
        name: false,
        email: false,
        phone: false,
        password: false,
        confirmPassword: false
    })
    const [entries, setEntries] = useState<entriesProps>({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
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
        handleValidEntries(entries, "submit")
    }

    const handleValidEntries = (entries: entriesProps, action: string) => {
        console.log(entries);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^(?:\+234|0|234)(7|8|9)\d{9}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>/?]).+$/;
        if (action === "typing") {
            setInvalidEntries((prev): validEntriesProps => ({
                ...prev, // true if empty, false if filled
                phone: entries["phone"].length !== 0 && !phoneRegex.test(String(entries["phone"])),
                email: entries["email"].length !== 0 && !emailRegex.test(entries["email"]),
                password: entries["password"].length !== 0 && !passwordRegex.test(entries["password"]),
                confirmPassword: entries["confirmPassword"].length !== 0 && !(entries["password"] == entries["confirmPassword"])
            }))
        } else {

            setInvalidEntries((prev): validEntriesProps => ({
                ...prev, // true if empty, false if filled
                name: !(entries["name"].length !== 0),
                phone: !phoneRegex.test(String(entries["phone"])),
                email: !emailRegex.test(entries["email"]),
                password: !passwordRegex.test(entries["password"]),
                confirmPassword: entries["password"].length !== 0 ? !(entries["password"] === entries["confirmPassword"]) : !(entries["confirmPassword"].length !== 0)

            }))
        }
    }

    useEffect(() => {
        handleValidEntries(entries, "typing")
    }, [entries])

    const specialSetter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        if (e.target.value.length !== 0) {
            setInvalidEntries((prev): validEntriesProps => {
                return { ...prev, [name]: false }
            })
        } else {
            setInvalidEntries((prev): validEntriesProps => {
                return { ...prev, [name]: true }
            })
        }
    }
    return (
        <section className={`signup-section mobile-bg ${width && width < 768 ? "mobile-bg" : "desktop-bg"}`}>
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
                        Have an account already?{" "}
                        <u className="font-bold text-blue-600">
                            <Link href={"/login"}>login</Link>
                        </u>
                    </span>
                    <span className="font-medium text-2xl">Create a Secure Account</span>
                </div>
                <div
                    onSubmit={(e) => e.preventDefault()}
                    className="onsubmit-div"
                >
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="name"
                            placeholder="Fullname"
                            className={`input-class ${inValidEntries["name"] && "border border-red-400"}`}
                            value={entries["name"]}
                            onChange={(e) => {
                                specialSetter(e)
                                setEntries((prev): entriesProps => {
                                    return { ...prev, name: e.target.value }
                                })
                            }}
                        />
                        <span className="text-[0.6rem] text-red-400">
                            {inValidEntries["name"] && "fullname is required"}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`input-class ${inValidEntries["email"] && "border border-red-400"}`}
                            value={entries["email"]}
                            onChange={(e) => {
                                specialSetter(e)
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
                        <input
                            type="text"
                            name="phone"
                            placeholder="E.g 08030000123"
                            className={`input-class ${inValidEntries["phone"] && "border border-red-400"}`}
                            value={entries["phone"]}
                            onChange={(e) => {
                                specialSetter(e)
                                setEntries((prev): entriesProps => {
                                    return { ...prev, phone: e.target.value }
                                })
                            }}
                        />
                        <span className="text-[0.6rem] text-red-400">
                            {inValidEntries["phone"] && "invalid phone"}
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

                    <span className="text-[10px]">
                        <i>At least one capital, small letters, number and special character</i>
                    </span>

                    <div className="flex flex-col">
                        <div className="relative w-full">
                            <input
                                type={seeConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Re-enter Password"
                                className={`password-input-class ${inValidEntries["confirmPassword"] && "border border-red-400"}`}
                                value={entries["confirmPassword"]}
                                onChange={(e) => {
                                    setEntries((prev): entriesProps => {
                                        return { ...prev, confirmPassword: e.target.value }
                                    })
                                }}
                            />
                            {seeConfirmPassword ? (
                                <Eye
                              className="absolute size-4.5 right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
                              onClick={toggleSeeConfirmPassword}
                            />
                            ) : (
                                <EyeOff
                              className="absolute size-4.5 right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
                              onClick={toggleSeeConfirmPassword}
                            />
                            )}
                        </div>
                        <span className="text-[0.6rem] text-red-400">
                            {inValidEntries["confirmPassword"] && "invalid entry"}
                        </span>
                    </div>

                    <input
                      type="text"
                      placeholder="Referral Code (optional)"
                      className="input-class"
                    />

                    <button
                      onClick={submitForm}
                      className="cursor-pointer bg-black text-white py-2
                      bg-gradient-to-r from-[#eeeeee] to-[#333333]"
                    >
                       Sign Up
                    </button>
                    By registering you indicate that you read and agreed to the 
                    <span className="text-blue-600"><u>Terms of Use</u></span>
                </div>
            </div>
        </section>
    )
}